<script>
export default {
  name: 'resume-social',
  props: {
    type: String,
    username: String,
    alt: String,
    url: String,
    icon: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    resolvedAlt() {
      if (this.alt) return this.alt;
      return this.username;
    }
  },
  render(createElement) {
    function makeIcon(icon) {
      return createElement(
        'v-icon',
        icon
      );
    }

    let url = this.url;
    let body = this.$slots.default;
    let iconButton = this.icon;
    switch (this.type) {
      case 'twitter':
        url = `https://twitter.com/${this.username}`;
        body = [makeIcon('mdi-twitter')];
        iconButton = true;
        break;
      case 'github':
        url = `https://github.com/${this.username}`;
        body = [makeIcon('mdi-github-circle')];
        iconButton = true;
        break;
    }
    const button = createElement(
      'v-btn',
      {
        props: {
          flat: true,
          icon: iconButton,
          href: url
        },
        'class': ['light-blue--text'],
      },
      body
    );
    return createElement(
      'div',
      {
        'class': ['social'],
        attrs: {
          'data-alt': this.resolvedAlt
        }
      },
      [button]
    );
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

@media print {
  .social::after {
    margin-left: -8px;
    content: attr(data-alt);
  }
}
</style>
