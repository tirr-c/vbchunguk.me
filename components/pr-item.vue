<template>
  <v-list-tile :href="resolvedUrl">
    <v-list-tile-content>
      <v-list-tile-title>
        <v-layout row>
          <octicon name="git-pull-request"
                   :class="[gitClass, 'mx-1']">
          </octicon>
          <h4 class="subheading mx-1 mb-0">
            {{ title }}
          </h4>
        </v-layout>
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import Octicon from '~/components/octicon.vue';

export default {
  name: 'resume-pr-item',
  props: ['title', 'url', 'status'],
  computed: {
    resolvedUrl() {
      if (!this.url) return null;
      function computeUrl(type, path, url) {
        switch (type) {
          case 'github': {
            const [name, id] = path.split('#');
            return `https://github.com/${name}/pull/${id}`;
          }
          default:
            return url;
        }
      }
      const [type, path] = this.url.split(':');
      return computeUrl(type, path, this.url);
    },
    gitClass() {
      switch (this.status) {
        case 'open':
          return ['green--text'];
        case 'merged':
        default:
          return ['purple--text', 'text--darken-1'];
      }
    }
  },
  components: {
    Octicon
  }
};
</script>

<style scoped>
h4 {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
