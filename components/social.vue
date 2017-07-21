<script>
export default {
  name: 'resume-social',
  props: {
    type: String,
    username: String,
    url: String,
    icon: {
      type: Boolean,
      default: false,
    }
  },
  render(createElement) {
    function makeIcon(icon) {
      return createElement(
        'v-icon',
        {
          props: {mdi: true},
        },
        icon
      );
    }

    let url = this.url;
    let body = this.$slots.default;
    let iconButton = this.icon;
    switch (this.type) {
      case 'twitter':
        url = `https://twitter.com/${this.username}`;
        body = [makeIcon('twitter')];
        iconButton = true;
        break;
      case 'github':
        url = `https://github.com/${this.username}`;
        body = [makeIcon('github-circle')];
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
    return createElement('div', [button]);
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
