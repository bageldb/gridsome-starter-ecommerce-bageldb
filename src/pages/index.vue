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
        <blog-box image="/images/hops.jpeg" />
        <blog-box image="/images/typesofbeer.jpeg" />
      </div>
      <div class="blogs-vertical">
        <blog-box-vertical image="/images/smiling.jpg" />
        <blog-box-vertical image="/images/types.jpg" />
        <blog-box-vertical image="/images/hops.jpeg" />
      </div>
    </div>
  </Layout>
</template>


<script>
import blogBox from "../components/blog-box";
import BlogBoxVertical from "../components/blog-box-vertical.vue";
import BlogBox from "../components/blog-box.vue";
import Newsletter from "../components/newsletter.vue";
import product from "../components/product.vue";
export default {
  components: { product, blogBox, Newsletter, BlogBox, BlogBoxVertical },
};
</script>,
    