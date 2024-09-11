<template>
  <div>单个用法</div>
  <div>基本用法</div>
  <BasicRadio v-model="state.value1" label="选项-1" :vadlue="1" />

  <div>未传value时，label会作为value</div>
  <BasicRadio v-model="state.value2" label="选项-2" />

  <div>多个用法</div>
  <div>传入options 渲染多个radio</div>
  <div>单个禁用，disabled</div>
  <div>若传入button，则为按钮样式的单选</div>
  <BasicRadio
    v-model="state.value3"
    :options="[
      {
        label: '选项-option-1',
        value: 1,
      },
      {
        label: '选项-option-2',
        value: 2,
      },
      {
        label: '选项-option-3',
        value: 3,
        disabled: true,
      },
    ]"
    button
  />

  <div>单选选项值来自接口api的返回值</div>
  <BasicRadio v-model="state.value4" :api="api" />
</template>

<script setup lang="tsx">
import { BasicRadio } from "@center/components";

const state = ref({
  value1: undefined,
  value2: undefined,
  value3: undefined,
  value4: undefined,
});

const api = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: "来着api-option-1",
          value: 11,
        },
        {
          label: "来着api-option-2",
          value: 22,
        },
      ]);
    }, 1000);
  });
};
</script>
