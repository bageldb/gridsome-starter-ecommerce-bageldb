<template>
  <div>
    <div class="tabs-menu">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        :class="{ 'is-active': tab.isActive }"
        class="tabs"
      >
        <a
          class="tab-link"
          :href="tab.href"
          @mouseover="selectTab(tab)"
          :class="{ current: tab.isActive }"
          >{{ tab.name }}</a
        >
      </div>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
    },
  },
};
</script>
  

<style>
.tabs-details {
  display: inline-block;
}
.tabs-menu {
  display: inline-block;
  vertical-align: top;
}
</style>