<template>
  <header class="navbar5-container1">
    <header data-thq="thq-navbar" class="navbar5-navbar-interactive">
      <img :alt="logoAlt" :src="logoSrc" class="navbar5-image1" />
      <div data-thq="thq-navbar-nav" class="navbar5-desktop-menu">
        <nav class="navbar5-links1">
          <a :href="link3Url" class="thq-body-small thq-link">
            <slot name="link3">
              <!--Default content for link3-->
              <div><span>Link 3</span></div>
            </slot>
          </a>
          <div class="navbar5-container2">
            <div
              @click="link5DropdownVisible = !link5DropdownVisible"
              class="navbar5-link4-dropdown-trigger"
            >
              <span class="thq-body-small thq-link">
                <slot name="link4">
                  <!--Default content for link4-->
                  <div><span>Link 4</span></div>
                </slot>
              </span>
              <div class="navbar5-icon-container1">
                <div v-if="link5DropdownVisible" class="navbar5-container3">
                  <svg viewBox="0 0 1024 1024" class="navbar5-icon10">
                    <path d="M298 426h428l-214 214z"></path>
                  </svg>
                </div>
                <div v-if="!link5DropdownVisible" class="navbar5-container4">
                  <svg viewBox="0 0 1024 1024" class="navbar5-icon12">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              v-if="link5DropdownVisible"
              class="navbar5-container5 thq-box-shadow"
            >
              <div class="navbar5-menu-item1">
                <div class="navbar5-content1">
                  <a :href="linkUrlPage1" class="navbar5-page11 thq-body-large">
                    <slot name="page1">
                      <!--Default content for page1-->
                      <div><span>Page One</span></div>
                    </slot>
                  </a>
                </div>
              </div>
              <div class="navbar5-menu-item2">
                <div class="navbar5-content2">
                  <a :href="linkUrlPage2" class="navbar5-page21 thq-body-large">
                    <slot name="page2">
                      <!--Default content for page2-->
                      <div><span>Page Two</span></div>
                    </slot>
                  </a>
                </div>
              </div>
              <div class="navbar5-menu-item3">
                <div class="navbar5-content3">
                  <a :href="linkUrlPage3" class="navbar5-page31 thq-body-large">
                    <slot name="page3">
                      <!--Default content for page3-->
                      <div><span>Page Three</span></div>
                    </slot>
                  </a>
                </div>
              </div>
              <div class="navbar5-menu-item4">
                <div class="navbar5-content4">
                  <a :href="linkUrlPage4" class="navbar5-page41 thq-body-large">
                    <slot name="page4">
                      <!--Default content for page4-->
                      <div><span>Page Four</span></div>
                    </slot>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div data-thq="thq-burger-menu" class="navbar5-burger-menu">
        <svg viewBox="0 0 1024 1024" class="navbar5-icon14">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="navbar5-mobile-menu">
        <div class="navbar5-nav">
          <div class="navbar5-top">
            <img :alt="logoAlt" :src="logoSrc" class="navbar5-logo" />
            <div data-thq="thq-close-menu" class="navbar5-close-menu">
              <svg viewBox="0 0 1024 1024" class="navbar5-icon16">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="navbar5-links2">
            <a :href="link1Url" class="thq-body-small thq-link">
              <slot name="link1">
                <!--Default content for link1-->
                <div class="navbar5-fragment5">
                  <span class="navbar5-text5">Link 1</span>
                </div>
              </slot>
            </a>
            <a :href="link2Url" class="thq-body-small thq-link">
              <slot name="link2">
                <!--Default content for link2-->
                <div class="navbar5-fragment4">
                  <span class="navbar5-text4">Link 2</span>
                </div>
              </slot>
            </a>
            <a :href="link3Url" class="thq-body-small thq-link">
              <slot name="link3">
                <!--Default content for link3-->
                <div class="navbar5-fragment8">
                  <span class="navbar5-text8">Link 3</span>
                </div>
              </slot>
            </a>
            <div class="navbar5-link4-accordion">
              <div
                @click="link5AccordionOpen = !link5AccordionOpen"
                class="navbar5-trigger"
              >
                <span class="thq-body-small thq-link">
                  <slot name="link4">
                    <!--Default content for link4-->
                    <div class="navbar5-fragment2">
                      <span class="navbar5-text2">Link 4</span>
                    </div>
                  </slot>
                </span>
                <div class="navbar5-icon-container2">
                  <div v-if="link5AccordionOpen" class="navbar5-container6">
                    <svg viewBox="0 0 1024 1024" class="navbar5-icon18">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                  <div v-if="!link5AccordionOpen" class="navbar5-container7">
                    <svg viewBox="0 0 1024 1024" class="navbar5-icon20">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div v-if="link5AccordionOpen" class="navbar5-container8">
                <div class="navbar5-menu-item5">
                  <div class="navbar5-content5">
                    <a :href="linkUrlPage1" class="navbar5-page12 thq-body-large">
                      <slot name="page1">
                        <!--Default content for page1-->
                        <div class="navbar5-fragment6">
                          <span class="navbar5-text6">Page One</span>
                        </div>
                      </slot>
                    </a>
                  </div>
                </div>
                <div class="navbar5-menu-item6">
                  <div class="navbar5-content6">
                    <a :href="linkUrlPage2" class="navbar5-page22 thq-body-large">
                      <slot name="page2">
                        <!--Default content for page2-->
                        <div class="navbar5-fragment1">
                          <span class="navbar5-text1">Page Two</span>
                        </div>
                      </slot>
                    </a>
                  </div>
                </div>
                <div class="navbar5-menu-item7">
                  <div class="navbar5-content7">
                    <a :href="linkUrlPage3" class="navbar5-page32 thq-body-large">
                      <slot name="page3">
                        <!--Default content for page3-->
                        <div class="navbar5-fragment3">
                          <span class="navbar5-text3">Page Three</span>
                        </div>
                      </slot>
                    </a>
                  </div>
                </div>
                <div class="navbar5-menu-item8">
                  <div class="navbar5-content8">
                    <a :href="linkUrlPage4" class="navbar5-page42 thq-body-large">
                      <slot name="page4">
                        <!--Default content for page4-->
                        <div class="navbar5-fragment7">
                          <span class="navbar5-text7">Page Four</span>
                        </div>
                      </slot>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="navbar5-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" class="thq-icon-x-small">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="navbar5-icon24 thq-icon-x-small"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="navbar5-icon26 thq-icon-x-small"
          >
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <div
      @click="link5DropdownVisible = false"
      v-if="link5DropdownVisible"
      class="navbar5-container9"
    ></div>
  </header>
</template>

<script>
export default {
  name: 'Navbar5',
  props: {
    logoAlt: {
      type: String,
      default: "China's Intangible Cultural Heritage",
    },
    linkUrlPage4: {
      type: String,
      default: 'https://www.teleporthq.io',
    },
    linkUrlPage3: {
      type: String,
      default: 'https://www.teleporthq.io',
    },
    link1Url: {
      type: String,
      default: 'https://www.teleporthq.io',
    },
    linkUrlPage2: {
      type: String,
      default: 'https://www.teleporthq.io',
    },
    link2Url: {
      type: String,
      default: 'https://www.teleporthq.io',
    },
    logoSrc: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
    },
    linkUrlPage1: {
      type: String,
      default: 'https://www.teleporthq.io',
    },
    link3Url: {
      type: String,
      default: 'https://www.teleporthq.io',
    },
  },
  data() {
    return {
      link5DropdownVisible: false,
      link5AccordionOpen: false,
    }
  },
}
</script>

<style scoped>
.navbar5-container1 {
  width: 100%;
  display: flex;
  z-index: 100;
  position: relative;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
}
 
.navbar5-navbar-interactive {
  width: 100%;
  display: flex;
  z-index: 100;
  align-items: center;
  padding-top: var(--dl-layout-space-twounits);
  padding-left: var(--dl-layout-space-threeunits);
  padding-right: var(--dl-layout-space-threeunits);
  padding-bottom: var(--dl-layout-space-twounits);
  justify-content: space-between;
}
 
.navbar5-image1 {
  height: 3rem;
}
 
.navbar5-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
 
.navbar5-links1 {
  gap: var(--dl-layout-space-twounits);
  flex: 1;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.navbar5-container2 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.navbar5-link4-dropdown-trigger {
  gap: 4px;
  cursor: pointer;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.navbar5-icon-container1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.navbar5-container3 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.navbar5-icon10 {
  width: 24px;
  height: 24px;
}
 
.navbar5-container4 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.navbar5-icon12 {
  width: 24px;
  height: 24px;
}
 
.navbar5-container5 {
  top: 30px;
  right: 0px;
  display: flex;
  padding: var(--dl-layout-space-oneandhalfunits);
  z-index: 100;
  position: absolute;
  align-items: flex-start;
  animation-name: fadeInDown;
  flex-direction: column;
  animation-delay: 0s;
  background-color: var(--dl-color-theme-neutral-light);
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.navbar5-menu-item1 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.navbar5-content1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.navbar5-page11 {
  white-space: nowrap;
}
 
.navbar5-menu-item2 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.navbar5-content2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.navbar5-page21 {
  white-space: nowrap;
}
 
.navbar5-menu-item3 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.navbar5-content3 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.navbar5-page31 {
  white-space: nowrap;
}
 
.navbar5-menu-item4 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.navbar5-content4 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.navbar5-page41 {
  white-space: nowrap;
}
 
.navbar5-burger-menu {
  display: none;
}
 
.navbar5-icon14 {
  width: var(--dl-layout-size-xsmall);
  height: var(--dl-layout-size-xsmall);
}
 
.navbar5-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-layout-space-twounits);
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dl-color-theme-neutral-light);
}
 
.navbar5-nav {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
 
.navbar5-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-layout-space-threeunits);
  justify-content: space-between;
}
 
.navbar5-logo {
  height: 2rem;
}
 
.navbar5-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
 
.navbar5-icon16 {
  width: var(--dl-layout-size-xsmall);
  height: var(--dl-layout-size-xsmall);
}
 
.navbar5-links2 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
 
.navbar5-link4-accordion {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.navbar5-trigger {
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
 
.navbar5-icon-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.navbar5-container6 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.navbar5-icon18 {
  width: 24px;
  height: 24px;
}
 
.navbar5-container7 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
 
.navbar5-icon20 {
  width: 24px;
  height: 24px;
}
 
.navbar5-container8 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-layout-space-unit);
  padding-left: var(--dl-layout-space-oneandhalfunits);
  flex-direction: column;
}
 
.navbar5-menu-item5 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: stretch;
  flex-shrink: 0;
  flex-direction: column;
}
 
.navbar5-content5 {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
 
.navbar5-page12 {
  white-space: nowrap;
}
 
.navbar5-menu-item6 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: stretch;
  flex-shrink: 0;
  flex-direction: column;
}
 
.navbar5-content6 {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
 
.navbar5-page22 {
  white-space: nowrap;
}
 
.navbar5-menu-item7 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: stretch;
  flex-shrink: 0;
  flex-direction: column;
}
 
.navbar5-content7 {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
 
.navbar5-page32 {
  white-space: nowrap;
}
 
.navbar5-menu-item8 {
  gap: 12px;
  cursor: pointer;
  display: flex;
  padding: 8px 0;
  align-self: stretch;
  align-items: stretch;
  flex-shrink: 0;
  flex-direction: column;
}
 
.navbar5-content8 {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
 
.navbar5-page42 {
  white-space: nowrap;
}
 
.navbar5-icon-group {
  gap: var(--dl-layout-space-twounits);
  display: flex;
}
 
.navbar5-icon24 {
  height: var(--dl-layout-size-xsmall);
}
 
.navbar5-icon26 {
  height: var(--dl-layout-size-xsmall);
}
 
.navbar5-container9 {
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
}
 
.navbar5-fragment1 {
  display: contents;
}
 
.navbar5-text1 {
  display: inline-block;
}
 
.navbar5-fragment2 {
  display: contents;
}
 
.navbar5-text2 {
  display: inline-block;
}
 
.navbar5-fragment3 {
  display: contents;
}
 
.navbar5-text3 {
  display: inline-block;
}
 
.navbar5-fragment4 {
  display: contents;
}
 
.navbar5-text4 {
  display: inline-block;
}
 
.navbar5-fragment5 {
  display: contents;
}
 
.navbar5-text5 {
  display: inline-block;
}
 
.navbar5-fragment6 {
  display: contents;
}
 
.navbar5-text6 {
  display: inline-block;
}
 
.navbar5-fragment7 {
  display: contents;
}
 
.navbar5-text7 {
  display: inline-block;
}
 
.navbar5-fragment8 {
  display: contents;
}
 
.navbar5-text8 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .navbar5-navbar-interactive {
    padding-left: var(--dl-layout-space-twounits);
    padding-right: var(--dl-layout-space-twounits);
  }
  .navbar5-desktop-menu {
    display: none;
  }
  .navbar5-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
 
@media(max-width: 479px) {
  .navbar5-navbar-interactive {
    padding: var(--dl-layout-space-unit);
  }
  .navbar5-mobile-menu {
    padding: var(--dl-layout-space-unit);
  }
}
</style>
