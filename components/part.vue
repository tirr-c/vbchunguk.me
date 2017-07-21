<template>
  <div class="my-4">
    <div class="headline pb-3">{{ title }}</div>
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
