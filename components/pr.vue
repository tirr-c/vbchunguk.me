<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="title mb-0">{{ project.name }}</h3>
        <p v-if="project.description" class="mt-2 mb-0">
        {{ project.description }}
        </p>
      </div>
    </v-card-title>
    <v-card-actions class="hidden-print">
      <v-btn flat class="light-blue--text" :href="resolvedUrl.url">
        {{ resolvedUrl.caption }}
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <v-list class="py-0">
      <template v-for="pr in project.pr">
        <resume-pr-item :key="pr.url"
                :title="pr.title"
                :status="pr.status"
                :url="pr.url">
        </resume-pr-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import ResumePrItem from '~/components/pr-item.vue';

export default {
  name: 'resume-pull-requests',
  props: ['project'],
  computed: {
    resolvedUrl() {
      if (!this.project.url) return {};
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
      const [type, path] = this.project.url.split(':');
      return computeUrl(type, path, this.project.url);
    },
  },
  components: {
    ResumePrItem,
  }
};
</script>
