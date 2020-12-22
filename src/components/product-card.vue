<template>
  <div class="item">
    <bgl-image :image="product.image" class="item-image" />
    <img />
    <div class="item-txt-box">
      <p class="item-price">
        <span class="small-price">$</span>{{ product.price }}
      </p>
      <p class="item-name">{{ product.title }}</p>
      <div class="small-txt" v-html="product.description"></div>
    </div>
    <g-link :to="'/product/' + product.slug" class="btn-add"
      >Go to product</g-link
    >
  </div>
</template>


<script>
import bglImage from "./bgl-image.vue";
export default {
  components: { bglImage },
  name: "product",
  props: { product: Object },
};
</script>