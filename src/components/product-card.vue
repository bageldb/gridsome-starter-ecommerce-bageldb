<template>
  <div class="item">
    <bgl-image :image="product.mainImageGallery[0]" class="item-image" />
    <img />
    <div class="item-txt-box">
      <p class="item-price">
        <span class="small-price">$</span>{{ product.price }}
      </p>
      <p class="item-name">{{ product.title }}</p>
      <p class="small-txt">
        {{ product.description }}
      </p>
    </div>
    <g-link to="/product" class="btn-add">Add to Cart</g-link>
  </div>
</template>


<script>
import bglImage from "./bgl-image.vue";
export default {
  components: { bglImage },
  name: "product",
  props: { product: Object },
  mounted() {
    console.log(this.product);
  },
};
</script>