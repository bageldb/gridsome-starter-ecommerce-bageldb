<template>
  <div class="body">
    <header class="header">
      <div class="top-bar">
        <g-link to="/" class="logo-wrap"
          ><img src="images/logo.svg" loading="lazy" alt="" class="logo"
        /></g-link>
        <dropdown-menu />
        <cart></cart>
      </div>
    </header>
    <slot />

    <footer class="footer">
      <img src="images/logo.svg" loading="lazy" alt="" class="footer-logo" />
      <p>
        This is a demo site for BagelDB, showcasing how to set up an ecommerce
        solution
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import cart from "../components/cart";
import DropdownMenu from "../components/menu.vue";
export default {
  components: { cart, DropdownMenu },
};
</script>

<style>
@import "../css/bagelbeer.css";
</style>
