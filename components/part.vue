<template>
  <div class="my-4">
    <h6>{{ title }}</h6>
    <vue-markdown :source="body" v-if="markdown"></vue-markdown>
    <slot v-else></slot>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'resume-part',
  props: ['title', 'markdown', 'body'],
  components: {
    VueMarkdown
  }
};
</script>
