<template>
  <v-app>
    <github-corner href="https://github.com/tirr-c/vbchunguk.me"
                   class="hidden-xs-only hidden-print">
    </github-corner>
    <resume-header :name="name">
      <resume-social type="github" username="tirr-c"></resume-social>
      <resume-social type="twitter" username="TirrTweet"></resume-social>
      <resume-social url="https://keybase.io/vbchunguk" alt="vbchunguk">
        keybase
      </resume-social>
    </resume-header>
    <div class="body px-3 pb-3">
      <resume-part title="Curriculum vitae">
        <div v-html="cv"></div>
      </resume-part>
      <resume-part title="Server administration experiences">
        <div v-html="server"></div>
      </resume-part>
      <page-divider></page-divider>
      <resume-part title="Personal projects">
        <resume-projects :projects="personalProjects">
        </resume-projects>
      </resume-part>
      <page-divider></page-divider>
      <resume-part title="Team projects">
        <resume-projects :projects="teamProjects">
        </resume-projects>
      </resume-part>
      <resume-part title="Open source contribution">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="project in oscProjects"
                    :key="project.name"
                    xs12 sm6>
              <resume-pr :name="project.name"
                         :description="project.description"
                         :url="project.url">
                <template v-for="pr in project.pr">
                  <resume-pr-item :key="pr.url"
                                  :title="pr.title"
                                  :status="pr.status"
                                  :url="pr.url">
                  </resume-pr-item>
                </template>
              </resume-pr>
            </v-flex>
          </v-layout>
        </v-container>
      </resume-part>
    </div>
    <v-footer class="hidden-print">
      <v-spacer></v-spacer>
      <div>
        <a href="https://github.com/tirr-c/vbchunguk.me/blob/master/LICENSE">AGPL-3.0</a>
        <span>+</span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import ResumeHeader from '~components/header.vue';
import ResumeSocial from '~components/social.vue';
import ResumePart from '~components/part.vue';
import ResumeProjects from '~components/projects.vue';
import ResumePr from '~components/pr.vue';
import ResumePrItem from '~components/pr-item.vue';
import GithubCorner from '~components/github-corner.vue';
import PageDivider from '~components/page-divider.vue';

import cv from '~assets/docs/cv.md';
import server from '~assets/docs/server.md';
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
      server,
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
    ResumePrItem,
    GithubCorner,
    PageDivider
  }
};
</script>
