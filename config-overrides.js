const { addWebpackAlias, addDecoratorsLegacy, useBabelRc, override } = require('customize-cra');
const path = require('path');

const defineOutput = () => config => {
    const mode = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';
    // if (mode === 'prod') {
    //     Object.assign(config.output, { publicPath: 'https://cdn-star.kuipmake.com/' });
    // }
    return config;
};

const config = override(
    addDecoratorsLegacy(),
    useBabelRc(),
    // addWebpackAlias({
    //     '@component': path.resolve('./src/component'),
    //     '@layout': path.resolve('./src/layout'),
    //     '@assets': path.resolve('./src/assets'),
    //     '@utils': path.resolve('./src/utils'),
    // }),
    defineOutput()
);

module.exports = config;
