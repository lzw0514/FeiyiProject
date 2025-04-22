<template xmlns:margin-top="http://www.w3.org/1999/xhtml">
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
          <p v-if="usernameError" class="error-message">{{ usernameError }}</p>
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
          <p v-if="emailError" class="error-message">{{ emailError }}</p>
        </div>
        <form class="sign-up-form2" @submit.prevent="register">
          <div class="sign-up-password">
            <label for="password" class="thq-body-large">密码</label>
          </div>
          <input
              v-model="password"
              type="password"
              id="password"
              required="true"
              placeholder="请输入密码"
              class="sign-up-textinput1 thq-body-large thq-input"
          />
          <p v-if="passwordError" class="error-message">{{ passwordError }}</p>

          <div class="sign-up-password">
            <label for="confirmPassword" class="thq-body-large">确认密码</label>
          </div>
          <input
              v-model="confirmPassword"
              type="password"
              id="confirmPassword"
              required="true"
              placeholder="请确认密码"
              class="sign-up-textinput1 thq-body-large thq-input"
          />
          <p v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</p>

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
      usernameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
      image1Src: '/images/denglu.jpg',
      image1Alt: 'Chinese heritage sign up image',
      imageSrc: '/images/denglu.jpg',
      imageAlt: 'image',
    }
  },

  methods: {
    validateForm() {
      let valid = true;

      // Validate username
      if (this.username.length < 3 || this.username.length > 20) {
        this.usernameError = '用户名长度应在3到20个字符之间';
        valid = false;
      } else {
        this.usernameError = '';
      }

      // Validate email
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(this.email)) {
        this.emailError = '请输入有效的邮箱地址';
        valid = false;
      } else {
        this.emailError = '';
      }

      // Validate password
      if (this.password.length < 6) {
        this.passwordError = '密码长度至少为6个字符';
        valid = false;
      } else {
        this.passwordError = '';
      }

      // Validate confirm password
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = '密码和确认密码不一致';
        valid = false;
      } else {
        this.confirmPasswordError = '';
      }

      return valid;
    },
    async register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = '密码和确认密码不匹配';
        return;
      }

      try {
        const response = await axios.post('/user/register', {
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
    margin-top: 20px;
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
  