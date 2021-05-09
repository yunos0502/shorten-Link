const debug = process.env.NODE_ENV !== 'production'
const name = 'yunos0502'

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  assetPrefix: !debug ? `/${name}/` : '',
}