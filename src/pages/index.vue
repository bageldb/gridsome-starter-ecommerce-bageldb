<template>
  <Layout>
    <div class="hero">
      <div class="_1200 top">
        <img src="images/2701.png" loading="lazy" alt="" class="main-img" />
        <h1 class="heading">Tastes better after a Pint</h1>
      </div>
    </div>
    <div class="items-sec">
      <div class="_1200 items">
        <product />
        <product />
        <product />
      </div>
    </div>
    <newsletter />
    <div class="blog-sec">
      <h2 class="smaller-head">Blog</h2>
      <div class="under-head-line"></div>
      <div class="blogs-wrap">
        <blog-box />
        <blog-box />
      </div>
    </div>
  </Layout>
</template>


<script>
import blogBox from "../components/blog-box";
import Newsletter from "../components/newsletter.vue";
import product from "../components/product.vue";
export default {
  components: { product, blogBox, Newsletter },
};
</script>