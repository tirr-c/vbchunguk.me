<template>
  <div>
    <resume-header name="Wonwoo Choi">
      <resume-social type="github" username="tirr-c"></resume-social>
      <resume-social type="twitter" username="TirrTweet"></resume-social>
    </resume-header>
    <div class="body pa-3">
      <resume-part title="Curriculum vitae" :markdown="true" :body="cv">
      </resume-part>
      <resume-part title="Personal projects">
        <resume-projects :projects="personalProjects">
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

export default {
  data() {
    return {
      cv,
      personalProjects
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
