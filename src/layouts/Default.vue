<template>
  <div class="body">
    <header class="header">
     <div class="top-bar w-clearfix">
        <g-link to="/" class="logo-wrap w-inline-block"
          ><img src="images/logo.svg" loading="lazy" alt="" class="logo"
        /></g-link>
        <dropdown-menu/>
        <cart></cart>
      </div>
    </header>
    <slot/>
     <div class="sign-wrap">
      <div class="signup w-form">
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          class="form"
        >
          <h2 class="smaller-head">Sign up for a newsletter<br /></h2>
          <p class="paragraph">to get no samples at all</p>
          <input
            type="text"
            class="text-field w-input"
            maxlength="256"
            name="name"
            data-name="Name"
            placeholder="Name"
            id="name"
          /><input
            type="email"
            class="text-field w-input"
            maxlength="256"
            name="email"
            data-name="Email"
            placeholder="Email"
            id="email"
            required=""
          /><input
            type="submit"
            value="Submit"
            data-wait="Please wait..."
            class="btn"
          />
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <img src="images/logo.svg" loading="lazy" alt="" class="footer-logo" />
      <p>
       This is a demo site for BagelDB, showcasing how to set up an ecommerce solution
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
import cart from "../components/cart"
import DropdownMenu from '../components/dropdown-menu.vue'
export default {
  components:{cart,DropdownMenu}
}
</script>

<style>
  @import '/css/bagelbeer.css';
</style>
