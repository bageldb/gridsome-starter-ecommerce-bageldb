<template>
  <div class="dropdown-wrap" @mouseover="openDropdown()">
    <p class="dropdown-title">
      {{ title }}
      <span class="arrow-down" :class="{ open: open }">›</span>
    </p>
    <div
      class="dropdown-list-wrap"
      :class="{ open: open, preopen: preopen }"
      v-click-outside="closeDropdown"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: { title: String },
  data() {
    return { open: false, preopen: false };
  },
  methods: {
    openDropdown() {
      this.preopen = true;
      setTimeout(() => (this.open = true), 50);
    },
    closeDropdown() {
      this.open = false;
      setTimeout(() => (this.preopen = false), 50);
    },
  },
};
</script>

<style scoped>
.arrow-down {
  display: inline-block;
  padding: 5px;
  transform: rotate(90deg);
  transition: all 0.2s ease;
}
.arrow-down.open {
  transform: rotate(-90deg);
}
.dropdown-wrap {
  display: inline-block;
  position: absolute;
}
.dropdown-list-wrap {
  display: none;
  z-index: 2;
}
.dropdown-list-wrap.preopen {
  display: block;
  opacity: 0;
  bottom: -10px;
  transition: 0.2s ease-in-out;
}
.dropdown-list-wrap.open {
  opacity: 1;

  bottom: 0;
}
.dropdown-title {
  cursor: pointer;
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
.dropdown-title {
  display: inline-block;
  padding: 10px;
}
.dropdown-list-wrap {
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