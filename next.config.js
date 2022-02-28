module.exports = {
    images: {
        loader: 'imgix',
        path: 'https://example.com/myaccount/',
    },
}

module.exports = {
    basePath: process.env.GITHUB_ACTIONS ? "/nextjs-blog" : "",
    trailingSlash: true,
  };

const REPO_NAME = 'nextjs-blog'

const urlPrefix = process.env.NODE_ENV === 'production'
    ? '/' + REPO_NAME
    : ''

const nextConfig = {
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
}

module.exports = nextConfig