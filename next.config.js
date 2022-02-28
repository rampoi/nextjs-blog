const REPO_NAME = 'nextjs-blog'

const prod = process.env.NODE_ENV === 'production'

const urlPrefix = process.env.NODE_ENV === 'production'
    ? '/' + REPO_NAME
    : ''

const nextConfig = {
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
}

module.exports = {
    images: {
        loader: 'imgix',
        path: 'https://example.com/myaccount/',
    },

    basePath: process.env.GITHUB_ACTIONS ? "/nextjs-blog" : "",
    trailingSlash: true,
    
    nextConfig,

    publicRuntimeConfig: { urlPrefix },

    'process.env.BACKEND_URL': prod ? '/nextjs-blog' : "",
}

// module.exports = {
//     basePath: process.env.GITHUB_ACTIONS ? "/nextjs-blog" : "",
//     trailingSlash: true,
    
//   };



// module.exports = nextConfig