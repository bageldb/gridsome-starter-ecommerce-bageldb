<template>
  <div>
    <p>
      {{ title }}
      <span class="arrow-down">›</span>
    </p>
    <div cla>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: { title: String },
};
</script>

<style scoped>
.arrow-down {
  display: inline-block;
  padding: 5px;
  transform: rotate(90deg);
}
</style>