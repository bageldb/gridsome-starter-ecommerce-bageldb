<template>
  <div class="body">
    <header class="header">
     <div class="top-bar">
        <g-link to="/" class="logo-wrap"
          ><img src="images/logo.svg" loading="lazy" alt="" class="logo"
        /></g-link>
        <dropdown-menu/>
        <cart></cart>
      </div>
    </header>
    <slot/>
     <div class="sign-wrap">
      <div class="signup">
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
            class="text-field"
            maxlength="256"
            name="name"
            data-name="Name"
            placeholder="Name"
            id="name"
          /><input
            type="email"
            class="text-field"
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
        <div class="form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    <div class="blog-sec">
     <h2 class="smaller-head">Blog</h2>
     <div class="under-head-line"></div>
     <div class="blogs-wrap"> 
        <div class="blog-box">
          <img class="blog-img" src="/images/1-red-p-500.jpeg"/>
            <p class="blog-big-txt">blog text blog text blog text blog textblog text blog text blog text blog textblog text blog text blog text blog textblog text blog text blog text blog text</p>
          <p class="blog-txt">blog text blog text blog text blog textblog text blog text blog text blog textblog text blog text blog text blog textblog text blog text blog text blog text</p>
          </div>
        <div class="blog-box">
          <img class="blog-img" src="/images/1-red-p-500.jpeg"/>
            <p class="blog-big-txt">blog text blog text blog text blog textblog text blog text blog text blog textblog text blog text blog text blog textblog text blog text blog text blog text</p>
          <p class="blog-txt">blog text blog text blog text blog textblog text blog text blog text blog textblog text blog text blog text blog textblog text blog text blog text blog text</p>
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
  @import '../css/bagelbeer.css';
</style>
