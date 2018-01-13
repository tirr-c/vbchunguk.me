<template>
  <div class="page-divider"></div>
</template>

<script>
export default {
  name: 'page-divider'
};
</script>

<style scoped>
.page-divider {
  height: 0;
  margin: 0;
  padding: 0;
  page-break-before: always;
}
</style>
