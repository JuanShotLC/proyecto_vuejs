/* Styles */
import '@/scss/main.scss'
import './css/index.css'

/* Core */
import Vue from 'vue'
import Buefy from 'buefy'
import VueCompositionAPI from '@vue/composition-api'

/* Router & Store */
import router from './router'
import store from './store'

/* Vue. Main component */
import App from './App.vue'

import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

/* Composition API */
Vue.use(VueCompositionAPI)

/* Fetch sample data */
store.dispatch('fetch', 'clients')

/* Default title tag */
const defaultDocumentTitle = 'SICMED 1.0.0'

/* Collapse mobile aside menu on route change & set document title from route meta */
router.afterEach(to => {
  store.commit('asideMobileStateToggle', false)

  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
