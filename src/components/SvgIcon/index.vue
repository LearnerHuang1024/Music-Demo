<script setup lang="ts">
import { defineProps, computed, PropType } from 'vue'
import { isExternal } from '@/utils/validate'

const props = defineProps({
  iconClass: {
    type: String as PropType<string>,
    required: true
  },
  className: {
    type: String as PropType<string>,
    default: ''
  }
})

const isExternalIcon = computed(() => isExternal(props.iconClass))
const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => ['svg-icon', props.className].filter(Boolean).join(' '))
const styleExternalIcon = computed(() => ({
  mask: `url(${props.iconClass}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
}))
</script>

<template>
  <svg v-if="!isExternalIcon" :class="svgClass">
    <use :xlink:href="iconName" />
  </svg>
  <div v-else :class="svgClass" :style="styleExternalIcon"></div>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
