<template>
  <Layout>
    <div class="hero">
      <div class="_1200 top">
        <g-image src="/images/2701.png" alt="" class="main-img" />
        <h1 class="heading">Tastes better after a Pint</h1>
      </div>
    </div>
    <div class="items-sec">
      <div class="_1200 items">
        <product
          v-for="edge in $page.allProducts.edges"
          :key="edge.node._id"
          :product="edge.node"
        />
      </div>
    </div>
    <newsletter />
    <div class="blog-sec">
      <h2 class="smaller-head">Blog</h2>
      <div class="under-head-line"></div>
      <div class="blogs-wrap">
        <blog-box
          image="/images/hops.jpeg"
          :title="'Why hops are the key for a good brew'"
          :description="'Chuck Berry will walk you through the different hop variaties'"
        />
        <blog-box
          image="/images/typesofbeer.jpeg"
          :title="`Mix'em up for me - the best stoutes around`"
          :description="'Chuck Berry will walk you through the different hop variaties'"
        />
      </div>
      <div class="blogs-vertical">
        <blog-box-vertical
          image="/images/smiling.jpg"
          :title="'Which brew to choose when there are many'"
        />
        <blog-box-vertical image="/images/types.jpg" />
        <blog-box-vertical image="/images/hops.jpeg" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query{
    allProducts{
      edges{
        node{
          _id
          title
          slug
          image{
            imageURL
            altText
          }
          price
          description
        }
      }
    }
  }
</page-query>

<script>
import blogBox from "../components/blog-box";
import BlogBoxVertical from "../components/blog-box-vertical.vue";
import Newsletter from "../components/newsletter.vue";
import product from "../components/product-card";
export default {
  components: { product, blogBox, Newsletter, BlogBoxVertical },
};
</script>
    