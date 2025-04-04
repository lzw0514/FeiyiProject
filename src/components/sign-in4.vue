<template>
  <div class="sign-in4-container1 thq-section-padding">
    <img :alt="image1Alt" :src="image1Src" class="sign-in4-sign-up-image thq-img-ratio-16-9" />
    <div class="sign-in4-container2">
      <img :alt="imageAlt" :src="imageSrc" class="sign-in4-image" />
    </div>
    <div class="sign-in4-max-width thq-section-max-width thq-section-padding">
      <div class="sign-in4-form1">
        <h2 class="sign-in4-text1 thq-heading-2">
          <div class="sign-in4-fragment2">
            <span class="sign-in4-text7">欢迎登录中国非遗网</span>
          </div>
        </h2>
        <div class="sign-in4-email">
          <label for="username" class="thq-body-large">用户名</label>
          <input
            v-model="username"
            type="text"
            id="username"
            required="true"
            placeholder="请输入用户名"
            class="sign-in4-textinput1 thq-body-large thq-input"
          />
        </div>
        <form class="sign-in4-form2" @submit.prevent="login">
          <div class="sign-in4-password">
            <div class="sign-in4-container3">
              <label for="password" class="thq-body-large">密码</label>
            </div>
            <input
              v-model="password"
              type="password"
              id="password"
              required="true"
              placeholder="请输入密码"
              class="sign-in4-textinput2 thq-body-large thq-input"
            />
            <div class="sign-in4-container4">
              <a
                href="https://teleporthq.io/"
                target="_blank"
                rel="noreferrer noopener"
                class="sign-in4-link thq-body-small"
              >
                忘记密码
              </a>
            </div>
          </div>
          <button type="submit" class="sign-in4-button thq-button-filled">
            <span class="sign-in4-text5 thq-body-small">登录</span>
          </button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignIn4',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      image1Src: 'https://images.unsplash.com/photo-1723982155771-c5555cc15538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjgyODA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
      image1Alt: 'Chinese heritage sign in image',
      imageSrc: '/images/%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%A7%C2%95%C2%8C%C3%A9%C2%9D%C2%A2-1500w.jpg',
      imageAlt: 'image'
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8081/user/login', {
          username: this.username,
          password: this.password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (response.data.code === 1) {
          localStorage.setItem('token', response.data.data);
          localStorage.setItem('username', response.data.data.username);
          localStorage.setItem('avatar', response.data.data.avatar); // 头像存入
          console.log('当前 avater:', response.data.data.avatar);
          console.log('本地存储的 token:', localStorage.getItem('token'));
          this.$router.push('/');
        } else {
          this.errorMessage = response.data.message || '登录失败';
        }
      } catch (error) {
        this.errorMessage = '登录失败，请检查用户名或密码';
      }
    }
  }
}
</script>

<style scoped>
.sign-in4-container1 {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
 
.sign-in4-sign-up-image {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 0px;
  height: 100%;
  position: absolute;
}
 
.sign-in4-container2 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 0px;
  height: 723px;
  display: flex;
  z-index: 10;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgba(0,0,0,0.4);
}
 
.sign-in4-image {
  width: 100%;
  height: 733px;
  object-fit: cover;
}
 
.sign-in4-max-width {
  gap: var(--dl-layout-space-twounits);
  width: 540px;
  height: 513px;
  display: flex;
  z-index: 100;
  align-items: center;
  border-radius: var(--dl-layout-radius-cardradius);
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
}
 
.sign-in4-form1 {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  height: 439px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
}
 
.sign-in4-text1 {
  align-self: center;
}
 
.sign-in4-email {
  gap: var(--dl-layout-space-halfunit);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.sign-in4-textinput1 {
  width: 100%;
  height: 41px;
  border-color: var(--dl-color-theme-primary1);
  background-color: transparent;
}
 
.sign-in4-form2 {
  gap: var(--dl-layout-space-unit);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}
 
.sign-in4-password {
  gap: var(--dl-layout-space-halfunit);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.sign-in4-container3 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
 
.sign-in4-hide-password {
  gap: var(--dl-layout-space-halfunit);
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-shrink: 1;
  justify-content: center;
}
 
.sign-in4-icon1 {
  fill: var(--dl-color-theme-neutral-dark);
  width: 24px;
  height: 24px;
}
 
.sign-in4-textinput2 {
  width: 100%;
  border-color: var(--dl-color-theme-primary1);
  background-color: transparent;
}
 
.sign-in4-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-end;
}
 
.sign-in4-link {
  text-decoration:  none;
}
 
.sign-in4-button {
  width: 100%;
  align-self: center;
}
 
.sign-in4-text5 {
  text-align: center;
}
 
.sign-in4-fragment1 {
  display: contents;
}
 
.sign-in4-text6 {
  display: inline-block;
}
 
.sign-in4-fragment2 {
  display: contents;
}
 
.sign-in4-text7 {
  display: inline-block;
}
 
@media(max-width: 479px) {
  .sign-in4-button {
    width: 100%;
  }
}
</style>
