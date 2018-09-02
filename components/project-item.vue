<template>
  <v-list-tile :class="{ disabled: resolvedData.private }"
               :href="resolvedData.url">
    <v-list-tile-content>
      <v-list-tile-title>
        <v-layout row class="vcenter pb-1">
          <octicon :name="resolvedData.private ? 'lock' : 'repo'"
                   :class="octiconClass">
          </octicon>
          <div class="title mx-1">
            {{ resolvedData.name }}
          </div>
          <v-spacer></v-spacer>
          <div class="mx-1" style="color: rgba(0, 0, 0, .54);">
            {{ resolvedData.language | expandLanguage }}
          </div>
        </v-layout>
      </v-list-tile-title>
      <v-list-tile-sub-title>
        {{ resolvedData.description }}
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import Octicon from '~/components/octicon.vue';

export default {
  name: 'resume-project-item',
  props: ['data'],
  computed: {
    resolvedData() {
      const item = this.data;
      function computeUrl(type, path, url) {
        if (type === null) {
          return {
            caption: null,
            url: null
          };
        }
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
      const [type, path] = (
        item.private ?
        [null, null] :
        item.url.split(':')
      );
      return {
        ...item,
        ...computeUrl(type, path, item.url)
      };
    },
    octiconClass() {
      const baseClass = ['ml-1'];
      const yellowClass = ['yellow--text', 'text--accent-4'];
      if (this.resolvedData.private) return [].concat(baseClass, yellowClass);
      else return baseClass;
    }
  },
  filters: {
    expandLanguage(lang) {
      switch (lang) {
        case 'js':
          return 'JavaScript';
        case 'ts':
          return 'TypeScript';
        case 'c#':
          return 'C#';
        case 'rust':
          return 'Rust';
        default:
          return lang;
      }
    }
  },
  components: {
    Octicon
  }
};
</script>

<style>
.disabled a {
  pointer-events: none;
}
</style>
