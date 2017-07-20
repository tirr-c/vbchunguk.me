<template>
  <div>
    <resume-header name="Wonwoo Choi">
      <resume-social type="github" username="tirr-c"></resume-social>
      <resume-social type="twitter" username="TirrTweet"></resume-social>
    </resume-header>
    <div class="body">
      <resume-part title="Curriculum vitae" :markdown="true" :body="cv">
      </resume-part>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title>
              <h3 class="headline mb-0">Hello world!</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import ResumeHeader from '~components/header.vue';
import ResumeSocial from '~components/social.vue';
import ResumePart from '~components/part.vue';

import cv from '~assets/cv.md';

export default {
  data() {
    return {
      cv
    };
  },
  components: {
    ResumeHeader,
    ResumeSocial,
    ResumePart
  }
};
</script>

<style scoped lang="postcss">
</style>
