<template>
  <div data-hover="" data-delay="0" class="dropdown">
    <dropdown :title="'Categories'">
      <nav class="dropdown-list">
        <tabs>
          <tab name="Category 1" :selected="true">
            <div>
              <a
                href="#"
                class="menu-items-wrap"
              >
                <div class="items-flex">
                  <div class="menu-item">
                    <img src="images/1-red.jpg" alt="" class="menu-item-image" />
                    <div class="item-txt-box">
                      <p class="item-price">
                        <span class="small-price">$</span>23
                      </p>
                      <p class="item-name-menu">Blue</p>
                    </div>
                  </div>
                </div>
              </a>
                   <a
                href="#"
                class="menu-items-wrap"
              >
                <div class="items-flex">
                  <div class="menu-item">
                    <img src="images/1-red.jpg" alt="" class="menu-item-image" />
                    <div class="item-txt-box">
                      <p class="item-price">
                        <span class="small-price">$</span>23
                      </p>
                      <p class="item-name-menu">Blue</p>
                    </div>
                  </div>
                </div>
              </a>
              
            </div>
            <p class="view-more">View More</p>
          </tab>
          <tab name="category 2">
                          <div>
              <a
                href="#"
                class="menu-items-wrap"
              >
                <div class="items-flex">
                  <div class="menu-item">
                    <img src="images/1-red.jpg" alt="" class="menu-item-image" />
                    <div class="item-txt-box">
                      <p class="item-price">
                        <span class="small-price">$</span>23
                      </p>
                      <p class="item-name-menu">Blue</p>
                    </div>
                  </div>
                </div>
              </a>
                   <a
                href="#"
                class="menu-items-wrap"
              >
                <div class="items-flex">
                  <div class="menu-item">
                    <img src="images/1-red.jpg" alt="" class="menu-item-image" />
                    <div class="item-txt-box">
                      <p class="item-price">
                        <span class="small-price">$</span>23
                      </p>
                      <p class="item-name-menu">Blue</p>
                    </div>
                  </div>
                </div>
              </a>
              
            </div>
            <p class="view-more">View More</p>
          </tab>
          <tab   name="category 3">
                         <div>
              <a
                href="#"
                class="menu-items-wrap"
              >
                <div class="items-flex">
                  <div class="menu-item">
                    <img src="images/1-red.jpg" alt="" class="menu-item-image" />
                    <div class="item-txt-box">
                      <p class="item-price">
                        <span class="small-price">$</span>23
                      </p>
                      <p class="item-name-menu">Blue</p>
                    </div>
                  </div>
                </div>
              </a>
                   <a
                href="#"
                class="menu-items-wrap"
              >
                <div class="items-flex">
                  <div class="menu-item">
                    <img src="images/1-red.jpg" alt="" class="menu-item-image" />
                    <div class="item-txt-box">
                      <p class="item-price">
                        <span class="small-price">$</span>23
                      </p>
                      <p class="item-name-menu">Blue</p>
                    </div>
                  </div>
                </div>
              </a>
              
            </div>
            <p class="view-more">View More</p>
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