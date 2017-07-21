module.exports = {
  css: [
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
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//cdn.materialdesignicons.com/1.9.32/css/materialdesignicons.min.css'
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