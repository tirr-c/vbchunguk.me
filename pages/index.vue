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
        <v-container fluid grid-list-lg class="pa-0">
          <v-layout row wrap>
            <v-flex v-for="project in personalProjects"
                    :key="project.name"
                    xs12 sm6>
              <v-card :class="[{ yellow: project.private }, 'lighten-4', 'card']">
                <v-card-title>
                  <v-container fluid class="pa-0">
                    <v-layout row>
                      <v-icon v-if="project.private"
                              class="vcenter body-2 grey--text text--darken-1 pl-1">
                        lock
                      </v-icon>
                      <div class="headline px-1">
                        {{ project.name }}
                      </div>
                      <v-spacer></v-spacer>
                      <div class="vcenter grey--text px-1">
                        {{ project.language | expandLanguage }}
                      </div>
                    </v-layout>
                    <div>{{ project.description }}</div>
                  </v-container>
                </v-card-title>
                <v-card-actions v-if="!project.private">
                  <v-spacer></v-spacer>
                  <a :href="project.url">
                    <v-btn flat class="light-blue--text">
                      {{ project.caption }}
                    </v-btn>
                  </a>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </resume-part>
    </div>
  </div>
</template>

<script>
import ResumeHeader from '~components/header.vue';
import ResumeSocial from '~components/social.vue';
import ResumePart from '~components/part.vue';

import cv from '~assets/cv.md';
import personalProjects from '~assets/personal.json';

export default {
  data() {
    return {
      cv,
      personalProjects: personalProjects.map(item => {
        function computeUrl(type, path, url) {
          if (type === null) {
            return {
              caption: null,
              url: null
            };
          }
          switch (type) {
            case 'github':
              return {
                caption: 'Open in GitHub',
                url: `https://github.com/${path}`
              };
            default:
              return {
                caption: 'Open',
                url: url
              }
          }
        }
        const [type, path] = (
          item.private ?
          [null, null] :
          item.url.split(':')
        );
        return {
          ...item,
          ...computeUrl(type, path, item.url)
        };
      })
    };
  },
  filters: {
    expandLanguage(lang) {
      switch (lang) {
        case 'js':
          return 'JavaScript';
        case 'c#':
          return 'C#';
        default:
          return lang;
      }
    }
  },
  components: {
    ResumeHeader,
    ResumeSocial,
    ResumePart
  }
};
</script>

<style scoped>
.card {
  min-height: 120px;
}
.vcenter {
  display: flex;
  align-items: center;
}
</style>
