module.exports = {
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-runtime',
      ],
      presets: [
        ['@babel/preset-react'],
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false
          }
        ]
      ]
    }
  }
};
