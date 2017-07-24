<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="title mb-0">{{ name }}</h3>
      <p v-if="description" class="mt-2 mb-0">{{ description }}</p>
    </v-card-title>
    <v-card-actions class="hidden-print">
      <v-btn flat class="light-blue--text" :href="resolvedUrl.url">
        {{ resolvedUrl.caption }}
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <v-list class="py-0">
      <slot></slot>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'resume-pull-requests',
  props: ['name', 'description', 'url'],
  computed: {
    resolvedUrl() {
      if (!this.url) return {};
      function computeUrl(type, path, url) {
        switch (type) {
          case 'github':
            return {
              caption: 'Open in GitHub',
              url: `https://github.com/${path}`
            };
          default:
            return {
              caption: 'Open',
              url: url
            }
        }
      }
      const [type, path] = this.url.split(':');
      return computeUrl(type, path, this.url);
    },
  }
};
</script>
