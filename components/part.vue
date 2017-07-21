<template>
  <div class="my-4">
    <div class="headline pb-3">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'resume-part',
  props: ['title']
};
</script>
