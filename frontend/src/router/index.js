import { route } from 'quasar/wrappers'
import routes from './routes'

export default route(function (/* { store, ssrContext } */) {
  return {
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 })
  }
})