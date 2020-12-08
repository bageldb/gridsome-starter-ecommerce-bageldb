<template>
  <a href="#" class="menu-items-wrap">
    <div class="items-flex">
      <div class="menu-item">
        <img src="images/1-red.jpg" alt="" class="menu-item-image" />
        <div class="item-txt-box">
          <p class="item-price">
            <span class="small-price">$</span>{{ price }}
          </p>
          <p class="item-name-menu">Blue</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "product-small",
  props: { price: [String, Number] },
};
</script>