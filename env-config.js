const debug = process.env.NODE_ENV !== 'production'
const name = 'yunos0502'

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}