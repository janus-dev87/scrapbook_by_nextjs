const isProd = process.env.NODE_ENV === 'production'
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  assetPrefix: isProd ? 'https://scrapbook.hackclub.com' : ''
})
