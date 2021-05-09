const debug = process.env.NODE_ENV !== 'production'
const name = 'shorten-Link'

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}