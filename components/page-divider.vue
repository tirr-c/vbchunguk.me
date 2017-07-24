<template>
  <div class="divider"></div>
</template>

<script>
export default {
  name: 'page-divider'
};
</script>

<style scoped>
.divider {
  height: 0;
  margin: 0;
  padding: 0;
  page-break-before: always;
}
</style>
