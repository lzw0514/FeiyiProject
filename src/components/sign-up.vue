<template>
    <div class="sign-up-container1 thq-section-padding">
      <img :alt="image1Alt" :src="image1Src" class="sign-up-sign-up-image thq-img-ratio-16-9" />
      <div class="sign-up-container2">
        <img :alt="imageAlt" :src="imageSrc" class="sign-up-image" />
      </div>
      <div class="sign-up-max-width thq-section-max-width thq-section-padding">
        <div class="sign-up-form1">
          <h2 class="sign-up-text1 thq-heading-2">
            <div class="sign-up-fragment2">
              <span class="sign-up-text7">欢迎注册中国非遗网</span>
            </div>
          </h2>
          <div class="sign-up-email">
            <label for="username" class="thq-body-large">用户名</label>
            <input
              v-model="username"
              type="text"
              id="username"
              required="true"
              placeholder="请输入用户名"
              class="sign-up-textinput1 thq-body-large thq-input"
            />
          </div>
          <div class="sign-up-email">
            <label for="email" class="thq-body-large">邮箱</label>
            <input
              v-model="email"
              type="email"
              id="email"
              required="true"
              placeholder="请输入邮箱"
              class="sign-up-textinput1 thq-body-large thq-input"
            />
          </div>
          <form class="sign-up-form2" @submit.prevent="register">
            <div class="sign-up-password">
              <label for="password" class="thq-body-large">密码</label>
              <input
                v-model="password"
                type="password"
                id="password"
                required="true"
                placeholder="请输入密码"
                class="sign-up-textinput2 thq-body-large thq-input"
              />
            </div>
            <div class="sign-up-password">
              <label for="confirmPassword" class="thq-body-large">确认密码</label>
              <input
                v-model="confirmPassword"
                type="password"
                id="confirmPassword"
                required="true"
                placeholder="请确认密码"
                class="sign-up-textinput2 thq-body-large thq-input"
              />
            </div>
            <button type="submit" class="sign-up-button thq-button-filled">
              <span class="sign-up-text5 thq-body-small">注册</span>
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
    name: 'SignUp',
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
        image1Src: 'https://images.unsplash.com/photo-1723982155771-c5555cc15538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjgyODA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
        image1Alt: 'Chinese heritage sign up image',
        imageSrc: '/images/%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%A7%C2%95%C2%8C%C3%A9%C2%9D%C2%A2-1500w.jpg',
        imageAlt: 'image'
      }
    },
    methods: {
      async register() {
        if (this.password !== this.confirmPassword) {
          this.errorMessage = '密码和确认密码不匹配';
          return;
        }
  
        try {
          const response = await axios.post('http://localhost:8081/user/register', {
            username: this.username,
            email: this.email,
            password: this.password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          if (response.data.code === 1) {
            this.$router.push('/page1');  // 注册成功后跳转到登录页面
          } else {
            this.errorMessage = response.data.message || '注册失败';
          }
        } catch (error) {
          this.errorMessage = '注册失败，请稍后再试';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .sign-up-container1 {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  
  .sign-up-sign-up-image {
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    bottom: 0px;
    height: 100%;
    position: absolute;
  }
  
  .sign-up-container2 {
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
  
  .sign-up-image {
    width: 100%;
    height: 733px;
    object-fit: cover;
  }
  
  .sign-up-max-width {
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
  
  .sign-up-form1 {
    /* gap: var(--dl-layout-space-twounits); */
    gap:3px;
    width: 100%;
    height: 439px;
    display: flex;
    align-self: center;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-end;
  }
  
  .sign-up-text1 {
    align-self: center;
  }
  
  .sign-up-email {
    gap: var(--dl-layout-space-halfunit);
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
    flex-direction: column;
  }
  
  .sign-up-textinput1 {
    width: 100%;
    height: 41px;
    border-color: var(--dl-color-theme-primary1);
    background-color: transparent;
  }
  
  .sign-up-form2 {
    /* gap: var(--dl-layout-space-unit); */
    gap:3px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  
  .sign-up-password {
    gap: var(--dl-layout-space-halfunit);
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  
  .sign-up-button {
    width: 100%;
    align-self: center;
  }
  
  .sign-up-text5 {
    text-align: center;
  }
  
  .sign-up-fragment1 {
    display: contents;
  }
  
  .sign-up-text6 {
    display: inline-block;
  }
  
  .sign-up-fragment2 {
    display: contents;
  }
  
  .sign-up-text7 {
    display: inline-block;
  }
  
  @media(max-width: 479px) {
    .sign-up-button {
      width: 100%;
    }
  }
  </style>
  