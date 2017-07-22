<template>
  <div class="vcenter" v-html="svg">
  </div>
</template>

<script>
import octicons from 'octicons';

export default {
  name: 'octicon',
  props: ['name'],
  computed: {
    svg() {
      const icon = this.name;
      return (icon in octicons) ? octicons[icon].toSVG() : '';
    }
  }
};
</script>
