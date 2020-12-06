<template>
<div>
  <a @click="open=!open" class="shop"></a>
   <div class="cart" :class="{close:!open}">
     
      <a @click="open=!open" class="close-cart"></a>
      <h3 class="cart-head">Your Cart</h3>
      <div class="cari-item">
        <p class="cart-price"><span class="smaller-cart">$</span>4</p>
        <p class="cart-txt">name name</p>
        <a href="#" class="delete-item"></a>
      </div>
      <div class="cari-item">
        <p class="cart-price"><span class="smaller-cart">$</span>4</p>
        <p class="cart-txt">name name</p>
        <a href="#" class="delete-item"></a>
      </div>
      <div class="cari-item">
        <p class="cart-price"><span class="smaller-cart">$</span>4</p>
        <p class="cart-txt">name name</p>
        <a href="#" class="delete-item"></a>
      </div>
      <div class="cari-item">
        <p class="cart-price"><span class="smaller-cart">$</span>4</p>
        <p class="cart-txt">name name</p>
        <a href="#" class="delete-item"></a>
      </div>
      <div class="cari-item">
        <p class="cart-price"><span class="smaller-cart">$</span>4</p>
        <p class="cart-txt">name name</p>
        <a href="#" class="delete-item"></a>
      </div>
      <div class="cari-item">
        <p class="cart-price"><span class="smaller-cart">$</span>4</p>
        <p class="cart-txt">name name</p>
        <a href="#" class="delete-item"></a>
      </div>
      <div class="cari-item">
        <p class="cart-price"><span class="smaller-cart">$</span>4</p>
        <p class="cart-txt">name name</p>
        <a href="#" class="delete-item"></a>
      </div>
      <a href="#" class="check-out">Button Text</a>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      open:false
    }
  }

}
</script>

<style>

</style>