<template>
  <div>
    <resume-header :name="name">
      <resume-social type="github" username="tirr-c"></resume-social>
      <resume-social type="twitter" username="TirrTweet"></resume-social>
      <resume-social url="https://keybase.io/vbchunguk">keybase</resume-social>
    </resume-header>
    <div class="body px-3 pb-3">
      <resume-part title="Curriculum vitae" :markdown="true" :body="cv">
      </resume-part>
      <resume-part title="Personal projects">
        <resume-projects :projects="personalProjects">
        </resume-projects>
      </resume-part>
      <resume-part title="Team projects">
        <resume-projects :projects="teamProjects">
        </resume-projects>
      </resume-part>
    </div>
  </div>
</template>

<script>
import ResumeHeader from '~components/header.vue';
import ResumeSocial from '~components/social.vue';
import ResumePart from '~components/part.vue';
import ResumeProjects from '~components/projects.vue';

import cv from '~assets/cv.md';
import personalProjects from '~assets/personal.json';
import teamProjects from '~assets/team.json';

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
      teamProjects
    }
  },
  components: {
    ResumeHeader,
    ResumeSocial,
    ResumePart,
    ResumeProjects
  }
};
</script>
