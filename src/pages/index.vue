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
import Newsletter from "../components/newsletter.vue";
import product from "../components/product-card";
export default {
  components: { product, Newsletter },
};
</script>
    