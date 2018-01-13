<template>
  <div class="grey lighten-2">
    <div class="body pa-3">
      <hgroup>
        <h3 class="display-2">{{ name }}</h3>
        <h5 v-if="apply">for {{ apply }}</h5>
        <div class="vcenter">
          <slot></slot>
        </div>
      </hgroup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume-header',
  props: ['name', 'apply']
};
</script>
