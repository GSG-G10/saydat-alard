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
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
