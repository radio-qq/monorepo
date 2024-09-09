<template>
  <span :class="ns.b()">
    <div :class="[ns.e('circle'), ns.em('circle', type)]"></div>
    <span :class="ns.e('text')">{{ content }}</span>
  </span>
</template>

<script lang="ts" setup>
import { BasicStatusProps } from "./type";
import { useBasicNamespace } from "@open-power/utils/ns";

defineOptions({
  name: "BasicStatus",
});

withDefaults(defineProps<BasicStatusProps>(), {
  content: "状态",
  type: "primary",
});

const ns = useBasicNamespace("status");
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
