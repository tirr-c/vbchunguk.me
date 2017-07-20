<template>
  <div class="head">
    <div class="body">
      <hgroup>
        <h3>{{ name }}</h3>
        <slot></slot>
      </hgroup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume-header',
  props: ['name']
};
</script>

<style scoped lang="postcss">
:root {
  --head-bg: #f8f8f8;
}

.head {
  background-color: var(--head-bg);
}
</style>
