module.exports = {
  css: [
    'mdi/css/materialdesignicons.css',
    'vuetify/dist/vuetify.min.css',
    { src: '~assets/main.css', lang: 'postcss' }
  ],
  plugins: [
    '~plugins/vuetify'
  ],
  head: {
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  build: {
    filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[hash].js'
    },
    vendor: [
      'vuetify',
      'vue-markdown'
    ],
    loaders: [
      {
        test: /\.(?:jpg|png|(?:woff2?|ttf|eot|svg)(?:\?v=[0-9]\.[0-9]\.[0-9])?)$/,
        loader: 'file-loader',
        query: {
          name: '[hash].[ext]'
        }
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ],
    postcss: {
      plugins: [
        require('postcss-import')(),
        require('postcss-cssnext')()
      ]
    }
  }
};
