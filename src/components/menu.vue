<template>
  <div data-hover="" data-delay="0" class="dropdown">
    <dropdown :title="'Categories'">
      <nav class="dropdown-list">
        <tabs>
          <tab name="Services" :selected="true">
            <div>
              <a
                href="#"
                class="menu-items-wrap"
                v-for="(product, i) in products"
                :key="i"
              >
                <div class="items-flex">
                  <div class="menu-item">
                    <img :src="product.image" alt="" class="menu-item-image" />
                    <div class="item-txt-box">
                      <p class="item-price">
                        <span class="small-price">$</span>{{ product.price }}
                      </p>
                      <p class="item-name-menu">{{ product.title }}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <p class="view-more">View More</p>
          </tab>
          <tab class="tab-link" name="Pricing">
            <h1>How much we do it for</h1>
          </tab>
          <tab class="tab-link" name="About Us">
            <h1>Why we do it</h1>
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
export default {
  name: "dropdown-menu",
  components: { Dropdown, tabs, tab },
  data() {
    return {
      activeTab: {},
      products: [
        { title: "Red", image: "images/1-red.jpg", price: 23 },
        { title: "Blue", image: "images/1-red.jpg", price: 123 },
      ],
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
  max-width: 640px;
}
</style>