<template>
  <v-container fluid grid-list-md>
    <v-card>
      <v-list three-line>
        <template v-for="(project, index) in sortedProjects">
          <project :key="project.name" :data="project"></project>
          <v-divider v-if="index + 1 < projects.length"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import Project from '~/components/project-item.vue';

export default {
  name: 'resume-projects',
  props: ['projects'],
  computed: {
    sortedProjects() {
      return this.projects.sort((a, b) => {
        if (a.private !== b.private) return a.private;
        return a.name > b.name;
      });
    }
  },
  components: {
    Project
  }
};
</script>
