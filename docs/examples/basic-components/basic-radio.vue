<template>
  <div>
    <!-- {{ valuewhy }}
    <el-radio v-model="valuewhy" size="large" border>Option 111A</el-radio>
    <BasicRadio></BasicRadio>
    <br /> -->
    ??? <component :is="customRender" />
    <el-radio-group v-model="valuewhy">
      <el-radio-button
        v-for="(item, index) in ['备选项1', '备选项2']"
        :label="item"
        :key="index"
        @click.native.prevent="customRadioClickHandler(item)"
        >{{ item }}</el-radio-button
      >
    </el-radio-group>
  </div>
</template>

<script setup lang="tsx">
import { BasicRadio } from "@center/components";

const valuewhy = ref(false);

const customRadioClickHandler = (item) => {
  valuewhy.value = item === valuewhy.value ? "" : item;
};

const customRender = () => <div>ddddd</div>;
</script>
