<template>
  <Layout>
    <div class="cat-hero">
      <div class="_1200 top">
        <h1 class="heading smaller center">
          probably not the best beer in the world
        </h1>
      </div>
    </div>
    <div>
      <div class="cat">
        <div class="items-wrap">
          <product />
          <product />
          <product />
          <product />
          <product />
          <product />
          <product />
          <product />
          <product />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import product from "../components/product-card";
export default {
  components: { product },
};
</script>