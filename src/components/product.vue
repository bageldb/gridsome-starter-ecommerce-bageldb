<template>
  <div class="item">
    <img
      src="images/1-red.jpg"
      loading="lazy"
      sizes="(max-width: 479px) 90vw, (max-width: 767px) 300px, (max-width: 991px) 41vw, 27vw"
      srcset="images/1-red-p-500.jpeg 500w, images/1-red.jpg 800w"
      alt=""
      class="item-image"
    />
    <div class="item-txt-box">
      <p class="item-price"><span class="small-price">$</span>4</p>
      <p class="item-name">name name nasdfdfsadfsm ena me</p>
      <p class="small-txt">
        Small textSmall te xtSmall tex tS mall textSmall textSmall tex tSmall
        text
      </p>
    </div>
    <g-link to="/product" class="btn-add">Add to Cart</g-link>
  </div>
</template>


<script>
export default {
  name:"product"
}
</script>