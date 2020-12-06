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
    <product/>
    <product/>
    <product/>
      </div>
    </div>
  </Layout>
</template>


<script>
import product from '../components/product.vue'
export default {
  components:{product}
}
</script>