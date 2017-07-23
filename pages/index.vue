<template>
  <v-app>
    <resume-header :name="name">
      <resume-social type="github" username="tirr-c"></resume-social>
      <resume-social type="twitter" username="TirrTweet"></resume-social>
      <resume-social url="https://keybase.io/vbchunguk">keybase</resume-social>
    </resume-header>
    <div class="body px-3 pb-3">
      <resume-part title="Curriculum vitae">
        <div v-html="cv"></div>
      </resume-part>
      <resume-part title="Personal projects">
        <resume-projects :projects="personalProjects">
        </resume-projects>
      </resume-part>
      <resume-part title="Team projects">
        <resume-projects :projects="teamProjects">
        </resume-projects>
      </resume-part>
      <resume-part title="Open source contribution">
        <v-layout row wrap>
          <v-flex v-for="project in oscProjects"
                  xs12 sm6>
            <resume-pr :name="project.name"
                       :description="project.description"
                       :url="project.url">
              <template v-for="pr in project.pr">
                <resume-pr-item :title="pr.title"
                                :status="pr.status"
                                :url="pr.url">
                </resume-pr-item>
              </template>
            </resume-pr>
          </v-flex>
        </v-layout>
      </resume-part>
    </div>
  </v-app>
</template>

<script>
import ResumeHeader from '~components/header.vue';
import ResumeSocial from '~components/social.vue';
import ResumePart from '~components/part.vue';
import ResumeProjects from '~components/projects.vue';
import ResumePr from '~components/pr.vue';
import ResumePrItem from '~components/pr-item.vue';

import cv from '~assets/docs/cv.md';
import personalProjects from '~assets/docs/personal.json';
import teamProjects from '~assets/docs/team.json';
import oscProjects from '~assets/docs/open-source.json';

export default {
  head() {
    return {
      title: this.name
    };
  },
  data() {
    return {
      name: 'Wonwoo Choi',
      cv,
      personalProjects,
      teamProjects,
      oscProjects
    }
  },
  components: {
    ResumeHeader,
    ResumeSocial,
    ResumePart,
    ResumeProjects,
    ResumePr,
    ResumePrItem
  }
};
</script>
