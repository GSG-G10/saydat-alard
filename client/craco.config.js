const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#185503',
              '@border-color-base': 'hsv(0, 0, 85%)',
              '@font-family': 'Almarai ',
              '@body-background': '#fff',
              '@btn-primary-color': '#185503',
              '@text-color': 'fade(@black, 85%)',
              '@text-color-secondary': 'fade(@black, 45%)',
              '@text-color-inverse': '@white',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
