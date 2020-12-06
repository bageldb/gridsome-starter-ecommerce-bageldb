<template>
    <div data-hover="" data-delay="0" class="dropdown w-dropdown">
          <div class="dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>Categories</div>
          </div>
          <nav class="dropdown-list w-dropdown-list">
            <div
              data-duration-in="300"
              data-duration-out="100"
              class="tabs w-tabs"
            >
              <div class="tabs-menu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  class="tab-link w-inline-block w-tab-link"
                >
                  <div>Original</div>
                </a>
                <a
                  data-w-tab="Tab 2"
                  class="tab-link w-inline-block w-tab-link w--current"
                >
                  <div>Light</div>
                </a>
                <a
                  data-w-tab="Tab 3"
                  class="tab-link w-inline-block w-tab-link"
                >
                  <div>Red</div>
                </a>
              </div>
              <div class="tabs-content w-tab-content">
                <div data-w-tab="Tab 1" class="w-tab-pane">
                  <a href="#" class="menu-items-wrap w-inline-block">
                    <div class="items-flex">
                      <div class="menu-item">
                        <img
                          src="images/1-red.jpg"
                          loading="lazy"
                          sizes="100vw"
                          srcset="
                            images/1-red-p-500.jpeg 500w,
                            images/1-red.jpg        800w
                          "
                          alt=""
                          class="menu-item-image"
                        />
                        <div class="item-txt-box">
                          <p class="item-price">
                            <span class="small-price">$</span>4
                          </p>
                          <p class="item-name-menu">name name</p>
                        </div>
                      </div>
                      <div class="menu-item">
                        <img
                          src="images/1-red.jpg"
                          loading="lazy"
                          sizes="100vw"
                          srcset="
                            images/1-red-p-500.jpeg 500w,
                            images/1-red.jpg 800w
                          "
                          alt=""
                          class="menu-item-image"
                        />
                        <div class="item-txt-box">
                          <p class="item-price">
                            <span class="small-price">$</span>4
                          </p>
                          <p class="item-name-menu">name name</p>
                        </div>
                      </div>
                    </div>
                    <p class="view-more">View More</p>
                  </a>
                </div>
                <div data-w-tab="Tab 2" class="w-tab-pane w--tab-active">
                  <a href="#" class="menu-items-wrap w-inline-block">
                    <div class="items-flex">
                      <div class="menu-item">
                        <img
                          src="images/1-red.jpg"
                          loading="lazy"
                          sizes="100vw"
                          srcset="
                            images/1-red-p-500.jpeg 500w,
                            images/1-red.jpg 800w
                          "
                          alt=""
                          class="menu-item-image"
                        />
                        <div class="item-txt-box">
                          <p class="item-price">
                            <span class="small-price">$</span>4
                          </p>
                          <p class="item-name-menu">name name</p>
                        </div>
                      </div>
                      <div class="menu-item">
                        <img
                          src="images/1-red.jpg"
                          loading="lazy"
                          sizes="100vw"
                          srcset="
                            images/1-red-p-500.jpeg 500w,
                            images/1-red.jpg        800w
                          "
                          alt=""
                          class="menu-item-image"
                        />
                        <div class="item-txt-box">
                          <p class="item-price">
                            <span class="small-price">$</span>4
                          </p>
                          <p class="item-name-menu">name name</p>
                        </div>
                      </div>
                    </div>
                    <p class="view-more">View More</p>
                  </a>
                </div>
                <div data-w-tab="Tab 3" class="w-tab-pane">
                  <a href="#" class="menu-items-wrap w-inline-block">
                    <div class="items-flex">
                      <div class="menu-item">
                        <img
                          src="images/1-red.jpg"
                          loading="lazy"
                          sizes="100vw"
                          srcset="
                            images/1-red-p-500.jpeg 500w,
                            images/1-red.jpg        800w
                          "
                          alt=""
                          class="menu-item-image"
                        />
                        <div class="item-txt-box">
                          <p class="item-price">
                            <span class="small-price">$</span>4
                          </p>
                          <p class="item-name-menu">name name</p>
                        </div>
                      </div>
                      <div class="menu-item">
                        <img
                          src="images/1-red.jpg"
                          loading="lazy"
                          sizes="100vw"
                          srcset="
                            images/1-red-p-500.jpeg 500w,
                            images/1-red.jpg        800w
                          "
                          alt=""
                          class="menu-item-image"
                        />
                        <div class="item-txt-box">
                          <p class="item-price">
                            <span class="small-price">$</span>4
                          </p>
                          <p class="item-name-menu">name name</p>
                        </div>
                      </div>
                    </div>
                    <p class="view-more">View More</p>
                  </a>
                </div>
              </div>
            </div>
          </nav>
              <div data-hover="" data-delay="0" class="drop-mobile w-dropdown">
          <div class="w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>Dropdown</div>
          </div>
          <nav class="dropdown-list w-dropdown-list">
            <a href="#" class="dropdown-link w-dropdown-link">Original</a>
            <a href="#" class="dropdown-link w-dropdown-link">Light</a>
            <a href="#" class="dropdown-link w-dropdown-link">Red</a>
          </nav>
        </div>
    </div>
</template>

<script>
export default {
    name:"dropdown-menu",
}
</script>