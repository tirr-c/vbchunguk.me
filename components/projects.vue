<template>
  <v-container fluid grid-list-lg class="pa-0">
    <v-layout row wrap>
      <v-flex v-for="project in projects"
              :key="project.name"
              xs12 sm6>
        <project-card :data="project"></project-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectCard from '~components/project-card.vue';

export default {
  name: 'resume-projects',
  props: ['projects'],
  components: {
    ProjectCard
  }
};
</script>
