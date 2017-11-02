<template>
  <v-app>
    <github-corner href="https://github.com/tirr-c/vbchunguk.me"
                   class="hidden-xs-only hidden-print">
    </github-corner>
    <resume-header :name="name">
      <resume-social type="github" username="tirr-c"></resume-social>
      <resume-social url="https://keybase.io/vbchunguk" alt="vbchunguk">
        keybase
      </resume-social>
    </resume-header>
    <div class="body px-3 pb-3">
      <resume-part title="Curriculum vitae">
        <div v-html="cv"></div>
      </resume-part>
      <resume-part title="Web frontend development experiences">
        <div v-html="web"></div>
        <resume-projects :projects="webProjects"></resume-projects>
      </resume-part>
      <page-divider></page-divider>
      <resume-part title="Systems programming language experiences">
        <div v-html="systems"></div>
        <resume-pr-list :projects="systemsProjects"></resume-pr-list>
      </resume-part>
      <page-divider></page-divider>
      <resume-part title="Server administration experiences">
        <div v-html="server"></div>
      </resume-part>
      <resume-part title="Personal projects">
        <resume-projects :projects="personalProjects"></resume-projects>
      </resume-part>
      <page-divider></page-divider>
      <resume-part title="Team projects">
        <resume-projects :projects="teamProjects"></resume-projects>
      </resume-part>
      <resume-part title="Open source contribution">
        <resume-pr-list :projects="oscProjects"></resume-pr-list>
      </resume-part>
      <resume-part title="Miscellaneous projects">
        <div v-html="misc"></div>
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
import ResumeHeader from '~/components/header.vue';
import ResumeSocial from '~/components/social.vue';
import ResumePart from '~/components/part.vue';
import ResumeProjects from '~/components/projects.vue';
import ResumePrList from '~/components/pr-list.vue';
import ResumePr from '~/components/pr.vue';
import GithubCorner from '~/components/github-corner.vue';
import PageDivider from '~/components/page-divider.vue';

import cv from '~/assets/docs/cv.md';
import web from '~/assets/docs/web.md';
import systems from '~/assets/docs/systems.md';
import server from '~/assets/docs/server.md';
import misc from '~/assets/docs/misc.md';
import webProjects from '~/assets/docs/web.json';
import systemsProjects from '~/assets/docs/systems.json';
import personalProjects from '~/assets/docs/personal.json';
import teamProjects from '~/assets/docs/team.json';
import oscProjects from '~/assets/docs/open-source.json';

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
      web,
      systems,
      server,
      misc,
      webProjects,
      systemsProjects,
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
    ResumePrList,
    ResumePr,
    GithubCorner,
    PageDivider
  }
};
</script>
