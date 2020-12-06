
<template>
<Layout>
 <div class="hero-prod">
    <div class="big-prod"><img src="images/1-red.jpg" loading="lazy" sizes="50vw" srcset="images/1-red-p-500.jpeg 500w, images/1-red.jpg 800w" alt="" class="prod-image">
      <div class="prod-txt-box">
        <p class="prod-name">name name nasdfdfsadfsm ena me</p>
        <p class="prod-price"><span class="small-price">$</span>4</p>
        <p class="prod-small-txt">Small textSmall te xtSmall tex tS mall textSmall textSmall tex tSmall text</p>
        <a href="#" class="btn-add active">Add to Cart</a>
      </div>
    </div>
  </div>
  <div class="more-items-sec">
    <div class="_1200 items">
      <p class="smaller-head space">More Items</p>
      <product/>
      <product/>
      <product/>
    </div>
  </div>
</Layout>
</template>
   

<script>
import product from '../components/product';
export default {
  components:{product}
}
</script>