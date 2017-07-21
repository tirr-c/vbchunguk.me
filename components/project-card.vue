<template>
  <v-card :class="[{ grey: resolvedData.private }, 'lighten-3']">
    <v-card-title>
      <v-container fluid class="pa-0">
        <v-layout row>
          <v-icon v-if="resolvedData.private"
                  class="vcenter body-2 yellow--text text--accent-4 pl-1">
            lock
          </v-icon>
          <div class="title px-1">
            {{ resolvedData.name }}
          </div>
          <v-spacer></v-spacer>
          <div class="vcenter grey--text px-1">
            {{ resolvedData.language | expandLanguage }}
          </div>
        </v-layout>
        <div>{{ resolvedData.description }}</div>
      </v-container>
    </v-card-title>
    <v-card-actions v-if="!resolvedData.private">
      <v-spacer></v-spacer>
      <v-btn flat class="light-blue--text" :href="resolvedData.url">
        {{ resolvedData.caption }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'resume-project-card',
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
  }
};
</script>
