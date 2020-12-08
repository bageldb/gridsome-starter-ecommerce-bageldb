<template>
  <div class="blog-box">
    <img class="blog-img" :src="image" />
    <div class="white-card">
      <p class="blog-big-txt">
        {{ title }}
      </p>
      <p class="blog-txt">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: { image: String, title: String, description: String },
};
</script>