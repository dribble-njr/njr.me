const isGitHubActions = process.env.GITHUB_ACTIONS || false

let basePath = ''
let assetPrefix = ''

if (isGitHubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  basePath = `/${repo}`
  assetPrefix = `/${repo}/`
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix
}
