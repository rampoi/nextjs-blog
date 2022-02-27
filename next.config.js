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