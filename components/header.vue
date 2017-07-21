<template>
  <div class="grey lighten-4">
    <div class="body pa-3">
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
