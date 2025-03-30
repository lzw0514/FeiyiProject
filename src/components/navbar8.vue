<template>
    <header class="navbar8-container1" v-bind:class="rootClassName">
      <header data-thq="thq-navbar" class="navbar8-navbar-interactive">
        <img :alt="logoAlt" :src="logoSrc" class="navbar8-image1" />
        <div data-thq="thq-navbar-nav" class="navbar8-desktop-menu">
          <nav class="navbar8-links1">
            <a :href="link1Url" class="navbar8-link11 thq-body-small thq-link">
              <slot name="link1">
                <div><span>首页</span></div>
              </slot>
            </a>
            <a :href="link2Url" class="thq-body-small thq-link">
              <slot name="link2">
                <div><span>非遗百科</span></div>
              </slot>
            </a>
            <a :href="link3Url" target="_blank" rel="noreferrer noopener" class="navbar8-link31 thq-body-small thq-link">
              <slot name="link3">
                <div><span>地图探索</span></div>
              </slot>
            </a>
            <a :href="link4Url" target="_blank" rel="noreferrer noopener" class="navbar8-link4 thq-body-small thq-link">
              <slot name="link4">
                <div class="navbar8-fragment15">
                  <span class="navbar8-text17">非遗商城</span>
                </div>
              </slot>
            </a>
            <div @click="link5DropdownVisible = !link5DropdownVisible" class="navbar8-link5-dropdown-trigger">
              <span class="thq-body-small thq-link">
                <slot name="link5">
                  <div><span>AI探索</span></div>
                </slot>
              </span>
              <div class="navbar8-icon-container1">
                <div v-if="link5DropdownVisible" class="navbar8-container2">
                  <svg viewBox="0 0 1024 1024" class="navbar8-icon10">
                    <path d="M298 426h428l-214 214z"></path>
                  </svg>
                </div>
                <div v-if="!link5DropdownVisible" class="navbar8-container3">
                  <svg viewBox="0 0 1024 1024" class="navbar8-icon12">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </nav>
          <div class="navbar8-buttons1">
            <button class="navbar8-action11 thq-button-animated thq-button-filled">
              <router-link to="/page1" class="navbar8-link6">
                <slot name="action11">
                  <div class="navbar8-fragment25">
                    <span class="navbar8-text27">登录</span>
                  </div>
                </slot>
              </router-link>
            </button>
            <button class="navbar8-action12 thq-button-animated thq-button-filled">
              <router-link to="/register" class="navbar8-link7">
                <slot name="action12">
                  <div class="navbar8-fragment26">
                    <span class="navbar8-text28">注册</span>
                  </div>
                </slot>
              </router-link>
            </button>
          </div>
        </div>
      </header>
    </header>
</template>
  
  <script>
  export default {
    name: 'Navbar8',
    props: {
      link1Url: {
        type: String,
        default: '/',
      },
      link2Url: {
        type: String,
        default: '/1',
      },
      link3Url: {
        type: String,
        default: '/map',
      },
      link4Url: {
        type: String,
        default: '/map',
      },
      page1ImageAlt: {
        type: String,
        default: 'image',
      },

    },
    data() {
      return {
        link5AccordionOpen: false,
        link5DropdownVisible: false,
      }
    },
  }
  </script>
  
  <style scoped>
  .navbar8-container1 {
    top: 0;
    width: 100%;
    display: flex;
    z-index: 1000;
    position: sticky;
    justify-content: center;
    background-color: var(--dl-color-theme-neutral-light);
  }
   
  .navbar8-navbar-interactive {
    width: 100%;
    display: flex;
    z-index: 100;
    max-width: var(--dl-layout-size-maxwidth);
    align-items: center;
    padding-top: var(--dl-layout-space-oneandhalfunits);
    padding-left: var(--dl-layout-space-threeunits);
    padding-right: var(--dl-layout-space-threeunits);
    padding-bottom: var(--dl-layout-space-oneandhalfunits);
    justify-content: space-between;
  }
   
  .navbar8-image1 {
    height: 3rem;
  }
   
  .navbar8-desktop-menu {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
   
  .navbar8-links1 {
    gap: var(--dl-layout-space-twounits);
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: var(--dl-layout-space-twounits);
    flex-direction: row;
    justify-content: flex-start;
  }
   
  .navbar8-link11 {
    text-decoration: none;
  }
   
  .navbar8-link31 {
    text-decoration: none;
  }
   
  .navbar8-link4 {
    text-decoration: none;
  }
   
  .navbar8-link5-dropdown-trigger {
    gap: 4px;
    cursor: pointer;
    display: flex;
    align-self: stretch;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
   
  .navbar8-icon-container1 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
   
  .navbar8-container2 {
    display: flex;
    align-items: center;
    animation-name: rotateInDownLeft;
    flex-direction: row;
    animation-delay: 0s;
    justify-content: flex-end;
    animation-duration: 500ms;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-timing-function: ease;
  }
   
  .navbar8-icon10 {
    width: 24px;
    height: 24px;
  }
   
  .navbar8-container3 {
    display: flex;
    align-items: center;
    animation-name: rotateInDownRight;
    flex-direction: row;
    animation-delay: 0s;
    justify-content: flex-end;
    animation-duration: 500ms;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-timing-function: ease;
  }
   
  .navbar8-icon12 {
    width: 24px;
    height: 24px;
  }
   
  /* .navbar8-buttons1 {
    gap: var(--dl-layout-space-twounits);
    display: flex;
    align-items: center;
    flex-direction: row;
  }
   
  .navbar8-action11 {
    display: flex;
    flex-direction: row;
  } */
  .navbar8-buttons1 {
  display: flex;
  gap: 0; /* Remove the gap */
  align-items: center;
  flex-direction: row;
}

.navbar8-action11,
.navbar8-action12 {
  border: 2px solid #e06106;
  border-radius: 0;
  padding: 10px 20px;
  background-color: white;
  color: rgb(211, 84, 0);
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  z-index: 1; /* Ensure the buttons are on top */
}

.navbar8-action11 {
  margin-right: -2px; /* Overlap the buttons by adjusting the margin */
}

.navbar8-action11:hover,
.navbar8-action12:hover {
  background-color: rgb(227, 95, 30);
  color: white;
}
  .navbar8-link6 {
    text-decoration: none;
  }
   
  .navbar8-burger-menu {
    display: none;
  }
   
  .navbar8-icon14 {
    width: var(--dl-layout-size-xsmall);
    height: var(--dl-layout-size-xsmall);
  }
   
  .navbar8-mobile-menu {
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
   
  .navbar8-nav {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
   
  .navbar8-top {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: var(--dl-layout-space-threeunits);
    justify-content: space-between;
  }
   
  .navbar8-logo {
    height: 3rem;
  }
   
  .navbar8-close-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
   
  .navbar8-icon16 {
    width: var(--dl-layout-size-xsmall);
    height: var(--dl-layout-size-xsmall);
  }
   
  .navbar8-links2 {
    gap: var(--dl-layout-space-unit);
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    align-self: flex-start;
    flex-direction: column;
  }
   
  .navbar8-link12 {
    text-decoration: none;
  }
   
  .navbar8-link32 {
    text-decoration: none;
  }
   
  .navbar8-link4-accordion {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
   
  .navbar8-trigger {
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
   
  .navbar8-icon-container2 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
   
  .navbar8-container4 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
   
  .navbar8-icon18 {
    width: 24px;
    height: 24px;
  }
   
  .navbar8-container5 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
   
  .navbar8-icon20 {
    width: 24px;
    height: 24px;
  }
   
  .navbar8-container6 {
    width: 100%;
    display: grid;
    grid-gap: var(--dl-layout-space-halfunit);
    grid-template-columns: 1fr;
  }
   
  .navbar8-menu-item1 {
    gap: var(--dl-layout-space-unit);
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: var(--dl-layout-space-oneandhalfunits);
    align-self: stretch;
    align-items: center;
    flex-shrink: 0;
  }
   
  .navbar8-page1-image1 {
    width: 50px;
    height: 50px;
  }
   
  .navbar8-content1 {
    width: 340px;
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-shrink: 0;
    flex-direction: column;
  }
   
  .navbar8-page11 {
    font-style: normal;
    font-weight: 600;
  }
   
  .navbar8-menu-item2 {
    gap: var(--dl-layout-space-unit);
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: var(--dl-layout-space-oneandhalfunits);
    align-self: stretch;
    align-items: center;
    flex-shrink: 0;
  }
   
  .navbar8-page2-image1 {
    width: 50px;
    height: 50px;
  }
   
  .navbar8-content2 {
    width: 340px;
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-shrink: 0;
    flex-direction: column;
  }
   
  .navbar8-page21 {
    font-style: normal;
    font-weight: 600;
  }
   
  .navbar8-menu-item3 {
    gap: var(--dl-layout-space-unit);
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: var(--dl-layout-space-oneandhalfunits);
    align-self: stretch;
    align-items: center;
    flex-shrink: 0;
  }
   
  .navbar8-page3-image1 {
    width: 50px;
    height: 50px;
  }
   
  .navbar8-content3 {
    width: 340px;
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-shrink: 0;
    flex-direction: column;
  }
   
  .navbar8-page31 {
    font-style: normal;
    font-weight: 600;
  }
   
  .navbar8-menu-item4 {
    gap: var(--dl-layout-space-unit);
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: var(--dl-layout-space-oneandhalfunits);
    align-self: stretch;
    align-items: center;
    flex-shrink: 0;
  }
   
  .navbar8-page4-image1 {
    width: 50px;
    height: 50px;
  }
   
  .navbar8-content4 {
    width: 340px;
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-shrink: 0;
    flex-direction: column;
  }
   
  .navbar8-page41 {
    font-style: normal;
    font-weight: 600;
  }
   
  .navbar8-buttons2 {
    gap: var(--dl-layout-space-twounits);
    display: flex;
    margin-top: var(--dl-layout-space-twounits);
    align-items: center;
    flex-direction: row;
  }
   
  .navbar8-icon-group {
    gap: var(--dl-layout-space-twounits);
    display: flex;
  }
   
  .navbar8-container7 {
    top: 100%;
    left: 0px;
    width: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    animation-name: fadeInDownBig;
    animation-delay: 0s;
    justify-content: center;
    background-color: var(--dl-color-theme-neutral-light);
    animation-duration: 300ms;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-timing-function: ease;
  }
   
  .navbar8-link5-menu-list {
    width: 100%;
    display: grid;
    padding: var(--dl-layout-space-oneandhalfunits);
    grid-gap: var(--dl-layout-space-halfunit);
    max-width: var(--dl-layout-size-maxwidth);
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
   
  .navbar8-menu-item5 {
    gap: var(--dl-layout-space-unit);
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: var(--dl-layout-space-oneandhalfunits);
    align-self: stretch;
    align-items: center;
    text-decoration: none;
  }
   
  .navbar8-page1-image2 {
    width: 30px;
    height: 30px;
  }
   
  .navbar8-content5 {
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-direction: column;
  }
   
  .navbar8-page12 {
    font-style: normal;
    font-weight: 600;
  }
   
  .navbar8-menu-item6 {
    gap: var(--dl-layout-space-unit);
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: var(--dl-layout-space-oneandhalfunits);
    align-self: stretch;
    align-items: center;
    text-decoration: none;
  }
   
  .navbar8-page2-image2 {
    width: 30px;
    height: 30px;
  }
   
  .navbar8-content6 {
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-direction: column;
  }
   
  .navbar8-page22 {
    font-style: normal;
    font-weight: 600;
  }
   
  .navbar8-menu-item7 {
    gap: var(--dl-layout-space-unit);
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: var(--dl-layout-space-oneandhalfunits);
    align-self: stretch;
    align-items: center;
    text-decoration: none;
  }
   
  .navbar8-page3-image2 {
    width: 30px;
    height: 30px;
  }
   
  .navbar8-content7 {
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-direction: column;
  }
   
  .navbar8-page32 {
    font-style: normal;
    font-weight: 600;
  }
   
  .navbar8-menu-item8 {
    gap: var(--dl-layout-space-unit);
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: var(--dl-layout-space-oneandhalfunits);
    align-self: stretch;
    align-items: center;
    text-decoration: none;
  }
   
  .navbar8-page4-image2 {
    width: 30px;
    height: 30px;
  }
   
  .navbar8-content8 {
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-direction: column;
  }
   
  .navbar8-page42 {
    font-style: normal;
    font-weight: 600;
  }
   
  .navbar8-container8 {
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    align-items: flex-start;
    flex-direction: column;
  }
   
  .navbar8-fragment10 {
    display: contents;
  }
   
  .navbar8-text12 {
    display: inline-block;
  }
   
  .navbar8-fragment11 {
    display: contents;
  }
   
  .navbar8-text13 {
    display: inline-block;
  }
   
  .navbar8-fragment12 {
    display: contents;
  }
   
  .navbar8-text14 {
    display: inline-block;
  }
   
  .navbar8-fragment13 {
    display: contents;
  }
   
  .navbar8-text15 {
    display: inline-block;
  }
   
  .navbar8-fragment14 {
    display: contents;
  }
   
  .navbar8-text16 {
    display: inline-block;
  }
   
  .navbar8-fragment15 {
    display: contents;
  }
   
  .navbar8-text17 {
    display: inline-block;
  }
   
  .navbar8-fragment16 {
    display: contents;
  }
   
  .navbar8-text18 {
    display: inline-block;
  }
   
  .navbar8-fragment17 {
    display: contents;
  }
   
  .navbar8-text19 {
    display: inline-block;
  }
   
  .navbar8-fragment18 {
    display: contents;
  }
   
  .navbar8-text20 {
    display: inline-block;
  }
   
  .navbar8-fragment19 {
    display: contents;
  }
   
  .navbar8-text21 {
    display: inline-block;
  }
   
  .navbar8-fragment20 {
    display: contents;
  }
   
  .navbar8-text22 {
    display: inline-block;
  }
   
  .navbar8-fragment21 {
    display: contents;
  }
   
  .navbar8-text23 {
    display: inline-block;
  }
   
  .navbar8-fragment22 {
    display: contents;
  }
   
  .navbar8-text24 {
    display: inline-block;
  }
   
  .navbar8-fragment23 {
    display: contents;
  }
   
  .navbar8-text25 {
    display: inline-block;
  }
   
  .navbar8-fragment24 {
    display: contents;
  }
   
  .navbar8-text26 {
    display: inline-block;
  }
   
  .navbar8-fragment25 {
    display: contents;
  }
   
  .navbar8-text27 {
    display: inline-block;
  }
   
  .navbar8root-class-name {
    top: 0px;
    fill: var(--dl-color-theme-neutral-dark);
    left: 0px;
    color: var(--dl-color-theme-neutral-dark);
    width: 100%;
    margin: auto;
    align-self: flex-start;
  }
   
  @media(max-width: 767px) {
    .navbar8-navbar-interactive {
      padding-left: var(--dl-layout-space-twounits);
      padding-right: var(--dl-layout-space-twounits);
    }
    .navbar8-desktop-menu {
      display: none;
    }
    .navbar8-burger-menu {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .navbar8-mobile-menu {
      padding-top: var(--dl-layout-space-oneandhalfunits);
      padding-bottom: var(--dl-layout-space-oneandhalfunits);
    }
    .navbar8-container6 {
      grid-gap: 0;
    }
    .navbar8-link5-menu-list {
      display: none;
    }
  }
   
  @media(max-width: 479px) {
    .navbar8-navbar-interactive {
      padding: var(--dl-layout-space-unit);
    }
    .navbar8-mobile-menu {
      padding: var(--dl-layout-space-unit);
    }
  }
  </style>
  