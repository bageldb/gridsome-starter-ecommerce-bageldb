<template>
  <div class="dropdown">
    <dropdown :title="'Categories'">
      <nav class="dropdown-list">
        <g-link
          v-for="(edge, i) in $static.allCategories.edges"
          :key="i"
          class="view-more"
          :to="'/category/' + edge.node.categoryName"
          >{{ edge.node.categoryName }}
        </g-link>
      </nav>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from "./dropdown.vue";
export default {
  name: "dropdown-menu",
  components: { Dropdown },
};
</script>

<static-query>
query{
  allCategories{
    edges{
      node{
        _id
        categoryName
      }
    }
  }
}
</static-query>

<style scoped>
.dropdown-list {
  /* width: 90vw; */
  max-width: 440px;
  padding: 0 30px;
  height: auto;
}
@media screen and (max-width: 767px) {
  .dropdown-list {
    max-width: 160px;
    text-align: center;
    padding-bottom: 10px;
  }
}
</style>