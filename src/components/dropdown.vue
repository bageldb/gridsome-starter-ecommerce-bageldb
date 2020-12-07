<template>
  <div @mouseover="open = true">
    <p>
      {{ title }}
      <span class="arrow-down">›</span>
    </p>
    <div v-if="open" v-click-outside="() => (open = fals)">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: { title: String },
  data() {
    return { open: false };
  },
};
</script>

<style scoped>
.arrow-down {
  display: inline-block;
  padding: 5px;
  transform: rotate(90deg);
}
</style>