<template>
  <div data-hover="" data-delay="0" class="dropdown">
    <dropdown :title="'Categories'">
      <nav class="dropdown-list">
        <div class="tabs">
          <div class="tabs-menu">
            <a
              v-for="(tab, i) in tabs"
              :key="i"
              class="tab-link"
              @mouseover="activeTab = tab"
            >
              {{ tab.title }}
            </a>
          </div>
          <div class="tabs-content w-tab-content">
            <div v-if="activeTab" class="">
              <a
                href="#"
                class="menu-items-wrap"
                v-for="(product, i) in activeTab.products"
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
                <p class="view-more">View More</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from "./dropdown.vue";
export default {
  name: "dropdown-menu",
  components: { Dropdown },
  data() {
    return {
      activeTab: {},
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
          products: [
            { title: "Red", image: "images/1-red.jpg", price: 23 },
            { title: "Blue", image: "images/1-red.jpg", price: 123 },
          ],
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