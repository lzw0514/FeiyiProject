<template>
  <div class="sign-in4-container1 thq-section-padding">
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
              required
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
                required
                placeholder="请输入密码"
                class="sign-in4-textinput2 thq-body-large thq-input"
            />
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
      errorMessage: ''
    }
  },
  methods: {
    async login() {
      try {
        console.log('这是一个名字',this.username)
        const response = await axios.post('http://localhost:8080/user/login', {
          username: this.username,
          password: this.password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('这是一个回复',response)

        if (response.data.code === 0) {
          console.log('登录成功')
          localStorage.setItem('token', response.data.token) // 存储 Token
          this.$router.push('/') // 跳转到主页或其他页面
        } else {
          this.errorMessage = response.data.message || '登录失败'
        }
      } catch (error) {
        this.errorMessage = '登录失败，请检查用户名或密码'
      }
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
</style>
