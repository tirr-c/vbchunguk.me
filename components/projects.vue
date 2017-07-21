<template>
  <v-container fluid class="pa-0">
    <v-card>
      <v-list two-line>
        <template v-for="(project, index) in sortedProjects">
          <project :key="project.name" :data="project"></project>
          <v-divider v-if="index + 1 < projects.length"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import Project from '~components/project-item.vue';

export default {
  name: 'resume-projects',
  props: ['projects'],
  computed: {
    sortedProjects() {
      return this.projects.sort((a, b) => a.name > b.name);
    }
  },
  components: {
    Project
  }
};
</script>
