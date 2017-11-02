<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="project in projects"
              :key="project.name"
              xs12>
        <resume-pr :project="project"></resume-pr>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ResumePr from '~/components/pr.vue';

export default {
  name: 'resume-pull-requests-list',
  props: ['projects'],
  components: {
    ResumePr,
  }
};
</script>
