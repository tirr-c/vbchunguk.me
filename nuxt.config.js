module.exports = {
  css: [
    'vuetify/dist/vuetify.min.css',
    { src: '~assets/stylesheets/main.css', lang: 'postcss' }
  ],
  plugins: [
    '~plugins/vuetify'
  ],
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
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
      'vuetify'
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
        use: ['html-loader', 'markdown-loader']
      }
    ],
    postcss: {
      plugins: [
        require('postcss-import'),
        require('postcss-cssnext')
      ]
    }
  }
};
