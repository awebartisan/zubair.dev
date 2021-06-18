const rehypePrism = require('@mapbox/rehype-prism');

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [rehypePrism],
    },
});

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/generate-sitemap');
        }

        return config;
    },
});
