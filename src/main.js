// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import vClickOutside from 'v-click-outside'
import bglImage from "./components/bgl-image.vue";
import vuex from 'vuex'
import store from './store/index'
export default function (Vue, {appOptions, router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(vuex);
  appOptions.store = new vuex.Store(store);
  Vue.component('bgl-image',bglImage)
  Vue.component('Layout', DefaultLayout)
  Vue.use(vClickOutside)
}
