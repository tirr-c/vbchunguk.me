<script>
export default {
  name: 'resume-social',
  props: ['type', 'username', 'url'],
  render(createElement) {
    let url = this.url;
    let body = this.$slots.default;
    switch (this.type) {
      case 'twitter':
        url = `https://twitter.com/${this.username}`;
        body = [
          createElement(
            'v-icon',
            {
              props: {
                mdi: true
              },
              attrs: {
                'class': 'light-blue--text'
              }
            },
            'twitter'
          )
        ];
        break;
      case 'github':
        url = `https://github.com/${this.username}`;
        body = [
          createElement(
            'v-icon',
            {
              props: {
                mdi: true
              },
              attrs: {
                'class': 'light-blue--text'
              }
            },
            'github-circle'
          )
        ];
        break;
    }
    return createElement(
      'a',
      {
        attrs: {
          href: url
        }
      },
      body
    );
  }
};
</script>
