// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import vClickOutside from 'v-click-outside'
import vuex from 'vuex'
import store from './store/index'
import bglImage from '@bageldb/vue-bgl-image'
export default function (Vue, {appOptions, router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(vuex);
  Vue.use(bglImage)
  appOptions.store = new vuex.Store(store);
  Vue.component('Layout', DefaultLayout)
  Vue.use(vClickOutside)
}
