<template>
  <div>
    <a @click="open = !open" class="shop">{{ cartItemCount }} <span class="icon-shop"></span></a>
    <div class="cart" :class="{ close: !open }">
      <a @click="open = !open" class="close-cart"></a>
      <h3 class="cart-head">Your Cart</h3>
      <div class="cart-item" v-for="(item, i) in distinctCartItems" :key="i">
        <bgl-image class="cart-image" :image="item.image" />
        <div class="cart-item-desc">
          <p class="cart-txt">{{ item.title }}</p>
          <p class="cart-price">
            <span class="smaller-cart">$</span>{{ item.price }}
          </p>
        </div>
        <div class="cart-item-amount-wrap">
          <div class="toggle-group">
            <button @click="addToCart(item)" class="toggle plus">+</button>
            <input
            disabled
            class="cart-item-amount"
            type="number"
            :value="item.amount"
          />
            <button @click="removeFromCart(item)" class="toggle">-</button>
          </div>
        </div>
      </div>
      <div class="total">
      Total: ${{ total }}
      </div>
      <g-link to="/checkout" class="check-out">Checkout</g-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
  },
  computed: {
    ...mapGetters(["distinctCartItems", "cartItemCount", "total"]),
  },
};
</script>

<style>
</style>