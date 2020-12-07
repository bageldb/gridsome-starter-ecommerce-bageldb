<template>
  <div class="dropdown-wrap" @mouseover="open = true">
    <p class="dropdown-title">
      {{ title }}
      <span class="arrow-down">›</span>
    </p>
    <div class="dropdown-list-wrap" v-if="open" v-click-outside="() => (open = fals)">
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
.dropdown-wrap{
  display: inline-block;
  position: absolute
}
.dropdown {
  top: 26px;
  margin-left: 20px;
  display: inline;
  cursor: pointer;
  background: red;
  height: 10px;
  position: relative;
}
.dropdown-title{
  display: inline-block;
  padding: 10px;
}
.dropdown-list-wrap{
  position: relative;
}

.dropdown-list {
  height: auto;
  position: absolute;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.12);
  z-index: 99;
  left: 0;
  top: -10px;
}

</style>