<template>
  <span :class="ns.b()" v-for="{ type, color, content } in getContents">
    <div
      :class="[ns.e('circle'), ns.em('circle', type)]"
      :style="{
        backgroundColor: color,
      }"
    />
    <span :class="ns.e('text')">
      <slot>{{ content }}</slot>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { BasicStatusProps } from './type'
import { withDefaults, defineProps, computed } from 'vue'

import { useBasicNamespace } from '@open-power/utils/ns'

defineOptions({
  name: 'BasicStatus',
})

const props = withDefaults(defineProps<BasicStatusProps>(), {
  content: '',
  type: 'primary',
})

const ns = useBasicNamespace('status')

const getContents = computed(() => {
  console.log(props)
  return Array.isArray(props.contents)
    ? props.contents
    : [{ content: props.content, type: props.type, color: props.color }]
})
</script>

<style lang="scss" scoped>
@use './style.scss';
</style>
