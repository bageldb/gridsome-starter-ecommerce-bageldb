
<template>
  <Layout>
    <div class="hero-prod">
      <div class="big-prod">
        <bgl-image class="prod-image" :image="$page.product.image" />
        <div class="prod-txt-box">
          <p class="prod-name">{{ $page.title }}</p>
          <p class="prod-price">
            <span class="small-price">$</span>{{ $page.product.price }}
          </p>
          <div class="prod-small-txt" v-html="$page.product.description"></div>
          <button @click="addToCart($page.product)" class="btn-add active">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <div class="more-items-sec">
      <div class="_1200 items">
        <p class="smaller-head space">Related Items</p>
        <product
          v-for="edge in $page.allProducts.edges"
          :key="edge.node._id"
          :product="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
    blog:blogs(id: $id) {
      _id
      title
      price
      description
      image{
        imageURL
        altText
      }
    }

  allBlogs(limit:3, filter: { id: { ne: $id}}){
    edges {
      node {
        slug
				title
        price
        description
        image{
        imageURL
        altText
        }
        _id
      }
    }
  }
}
</page-query>

<script>
import product from "../components/product-card";
export default {
  components: { product },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
  },
};
</script>