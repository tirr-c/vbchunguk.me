<template>
  <v-list-tile :class="{ disabled: resolvedData.private }"
               :href="resolvedData.url">
    <v-list-tile-content>
      <v-list-tile-title>
        <v-layout row class="vcenter pb-1">
          <octicon v-if="resolvedData.private"
                   name="lock" class="yellow--text text--accent-4 ml-1">
          </octicon>
          <octicon v-else
                   name="repo" class="ml-1">
          </octicon>
          <div class="title mx-1">
            {{ resolvedData.name }}
          </div>
          <v-spacer></v-spacer>
          <div class="grey--text mx-1">
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
import Octicon from 'vue-octicon/components/Octicon.vue';
import 'vue-octicon/icons/lock';
import 'vue-octicon/icons/repo';

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
    }
  },
  filters: {
    expandLanguage(lang) {
      switch (lang) {
        case 'js':
          return 'JavaScript';
        case 'c#':
          return 'C#';
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
