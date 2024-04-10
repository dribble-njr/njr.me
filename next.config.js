const isGitHubActions = process.env.GITHUB_ACTIONS || false

let basePath = '/'

if (isGitHubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  basePath = `/${repo}`
}

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath
}
