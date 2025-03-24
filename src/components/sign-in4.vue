<template>
  <div class="sign-in4-container1 thq-section-padding">
    <img
      :alt="image1Alt"
      :src="image1Src"
      class="sign-in4-sign-up-image thq-img-ratio-16-9"
    />
    <div class="sign-in4-container2">
      <img :alt="imageAlt" :src="imageSrc" class="sign-in4-image" />
    </div>
    <div class="sign-in4-max-width thq-section-max-width thq-section-padding">
      <div class="sign-in4-form1">
        <h2 class="sign-in4-text1 thq-heading-2">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="sign-in4-fragment2">
              <span class="sign-in4-text7">欢迎登陆中国非遗网</span>
            </div>
          </slot>
        </h2>
        <div class="sign-in4-email">
          <label for="thq-sign-in-4-email" class="thq-body-large">用户名</label>
          <input
            type="email"
            id="thq-sign-in-4-email"
            required="true"
            placeholder="请输入用户名"
            class="sign-in4-textinput1 thq-body-large thq-input"
          />
        </div>
        <form class="sign-in4-form2">
          <div class="sign-in4-password">
            <div class="sign-in4-container3">
              <label for="thq-sign-in-4-password" class="thq-body-large">
                密码
              </label>
              <div class="sign-in4-hide-password">
                <svg viewBox="0 0 1024 1024" class="sign-in4-icon1">
                  <path
                    d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"
                  ></path>
                </svg>
                <span class="thq-body-small">隐藏</span>
              </div>
            </div>
            <input
              type="password"
              id="thq-sign-in-4-password"
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
        </form>
        <button type="submit" class="sign-in4-button thq-button-filled">
          <span class="sign-in4-text5 thq-body-small">
            <slot name="action1">
              <!--Default content for action1-->
              <div class="sign-in4-fragment1">
                <span class="sign-in4-text6">登录</span>
              </div>
            </slot>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn4',
  props: {
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1723982155771-c5555cc15538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjgyODA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    imageSrc: {
      type: String,
      default:
        '/images/%C3%A7%C2%99%C2%BB%C3%A5%C2%BD%C2%95%C3%A7%C2%95%C2%8C%C3%A9%C2%9D%C2%A2-1500w.jpg',
    },
    image1Alt: {
      type: String,
      default: 'Chinese heritage sign in image',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
  },
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
  text-decoration:  underline none;
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
