<template>
  <div data-hover="" data-delay="0" class="dropdown">
    <dropdown :title="'Categories'">
      <nav class="dropdown-list">
        <tabs>
          <tab name="Category 1" :selected="true">
            <div>
              <product-small :price="21" />
              <product-small :price="11" />
            </div>
            <g-link to="/category" class="view-more">View More</g-link>
          </tab>
          <tab name="category 2">
            <div>
              <product-small :price="221" />
              <product-small :price="41" />
            </div>
            <g-link to="/category" class="view-more">View More</g-link>
          </tab>
          <tab name="category 3">
            <div>
              <product-small :price="29" />
              <product-small :price="51" />
            </div>
            <g-link to="/category" class="view-more">View More</g-link>
          </tab>
        </tabs>
      </nav>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from "./dropdown.vue";
import tabs from "../components/tabs/tabs";
import tab from "../components/tabs/tab";
import productSmall from "../components/product-small";
export default {
  name: "dropdown-menu",
  components: { Dropdown, tabs, tab, productSmall },
  data() {
    return {
      activeTab: {},
      products: [],
      tabs: [
        {
          title: "Original",
          products: [
            { title: "Red", image: "images/1-red.jpg", price: 4 },
            { title: "Blue", image: "images/1-red.jpg", price: 2 },
          ],
        },
        {
          title: "Light",
        },
        {
          title: "Red",
          products: [
            { title: "Red", image: "images/1-red.jpg", price: 23 },
            { title: "Blue", image: "images/1-red.jpg", price: 123 },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.dropdown-list {
  width: 90vw;
  max-width: 440px;
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