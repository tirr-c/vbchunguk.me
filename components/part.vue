<template>
  <div class="my-4">
    <div v-if="title" class="headline pb-3">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'resume-part',
  props: ['title']
};
</script>
