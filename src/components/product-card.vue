<template>
  <div class="item">
    <img src="/images/1-red-p-500.jpeg" class="item-image" />
    <div class="item-txt-box">
      <p class="item-price"><span class="small-price">$</span>{{ price }}</p>
      <p class="item-name">{{ title }}</p>
      <p class="small-txt">
        {{ description }}
      </p>
    </div>
    <g-link to="/product" class="btn-add">Add to Cart</g-link>
  </div>
</template>


<script>
export default {
  name: "product",
  props: { title: String, description: String, price: Number },
};
</script>