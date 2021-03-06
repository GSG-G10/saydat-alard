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
              '@font-family': "'Aref Ruqaa', serif",
              '@body-background': '#fff',
              '@btn-primary-color': '#FFFFFF',

            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
