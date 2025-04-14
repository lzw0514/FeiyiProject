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
                <div><span>知识问答</span></div>
              </slot>
            </a>
        
            <router-link to="/ai-explore" class="navbar8-link5-dropdown-trigger thq-body-small thq-link">
              <slot name="link5">
                <div><span>AI探索</span></div>
              </slot>
            </router-link>

          </nav>
          <div v-if="!isLoggedIn">
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
          <div v-else class="user-menu">
            <img :src="avatar" alt="用户头像" class="avatar" @mouseover="showDropdown = true" @mouseleave="hideDropdown">
            <ul v-show="showDropdown" class="dropdown-menu" @mouseover="showDropdown = true" @mouseleave="hideDropdown">
              <li><router-link to="/profile">个人主页</router-link></li>
              <li><router-link to="/favorites">收藏项目</router-link></li>
              <li @click="logout">退出登录</li>
            </ul>
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
        default: '/knowledge',
      },
      link4Url: {
        type: String,
        default: '/map',
      },
      link5Url: {
        type: String,
        default: '/ai-explore',
      },
      page1ImageAlt: {
        type: String,
        default: 'image',
      },
    
    },
    computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    },

    avatar() {
      return 'images/touxiang.png' ||localStorage.getItem('avatar');
    }
    },
    data() {
      return {
        showDropdown: false
      }
    },
    methods: {
    hideDropdown() {
      setTimeout(() => { this.showDropdown = false }, 8000); // 延迟关闭
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('avatar');
      window.location.reload();
    }
    }
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
    background-color:rgb(251, 251, 251);
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
   
 
   
  .navbar8-desktop-menu {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
   
  .navbar8-links1 {

    gap: 4rem;;
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: var(--dl-layout-space-twounits);
    flex-direction: row;
    justify-content: flex-start;
  }
   

  
  .navbar8-icon-container1 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
   
 
   
  .navbar8-icon10 {
    width: 24px;
    height: 24px;
  }
 
  .navbar8-icon12 {
    width: 24px;
    height: 24px;
  }

  .navbar8-buttons1 {
  display: flex;
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
.user-menu {
  position: relative;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  list-style: none;
  padding: 0;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background: #f0f0f0;
}
</style>
