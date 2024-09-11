<template>
  <el-radio-group v-bind="$attrs" v-model="stateValue" @change="onChange">
    <template v-if="isButton">
      <el-radio-button
        v-for="(item, index) in stateOptions"
        v-bind="item"
        :key="index"
        @click="onRadioClick"
      />
    </template>
    <template v-else>
      <el-radio
        v-for="(item, index) in stateOptions"
        v-bind="item"
        :key="index"
        @click="onRadioClick"
      />
    </template>
  </el-radio-group>
</template>

<script lang="ts" setup>
import { BasicRadioProps, BasicRadioEmits, Value, SingleRadio } from "./type";

import { onMounted, ref, watchEffect } from "vue";

import {
  isFunction,
  isArray,
  getValue,
  mapObjectArrayFields,
} from "@center/utils";

defineOptions({
  name: "BasicRadio",
});

const props = withDefaults(defineProps<BasicRadioProps>(), {});

const emit = defineEmits<BasicRadioEmits>();

const stateValue = ref<Value>();
const stateOptions = ref<SingleRadio[]>();

watchEffect(() => {
  stateValue.value = props.modelValue;
});

const init = () => {
  debugger;
  if (isArray(props.options)) {
    stateOptions.value = props.options;
    return;
  }

  if (!isArray(props.options) && props.label) {
    stateOptions.value = [
      {
        label: props.label,
        value: props.value || props.label,
      },
    ];
    return;
  }

  query();
};

onMounted(() => {
  init();
});

const query = async () => {
  try {
    if (!isFunction(props.api)) {
      return;
    }

    const result = await props.api();
    const datas = props.resultField
      ? getValue(result, props.resultField)
      : result;
    stateOptions.value = handleResult(datas);
  } catch (error) {
    console.error("BasicRadio query error:", error);
  }
};

const handleResult = (options: unknown[]) => {
  if (!isArray(options)) {
    return [];
  }

  if (props.labelField && props.valueField) {
    return mapObjectArrayFields(options, {
      label: props.labelField,
      value: props.valueField,
    });
  }
};

const onChange = (value: Value) => {
  emit("update:modelValue", value);
  emit("change", value);
};

const onRadioClick = (value: Value) => {
  stateValue.value =
    stateValue.value === value ? "" : stateValue.value === value;
};
</script>
