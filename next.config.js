const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const remarkCustomBlockquote = require('./plugins/remark-custom-blockquote');
const remarkExtractFrontmatter = require('./plugins/remark-extract-frontmatter');
const remarkFrontmatter = require('remark-frontmatter');
const remarkGroup = require('./plugins/remark-group');
const remarkMath = require('remark-math');
const remarkMathCustom = require('./plugins/remark-math-custom');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkMath,
      remarkMathCustom,
      remarkCustomBlockquote,
      remarkGroup,
      remarkFrontmatter,
      remarkExtractFrontmatter,
    ],
  },
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
