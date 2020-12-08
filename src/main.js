// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import vClickOutside from 'v-click-outside'
import bglImage from "./components/bgl-image.vue";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('bgl-image',bglImage)
  Vue.component('Layout', DefaultLayout)
  Vue.use(vClickOutside)
}
