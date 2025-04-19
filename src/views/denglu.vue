<template>
  <div class="page1-container">
    <app-navbar8 >
      
    </app-navbar8>
    <sign-in4>
      <template v-slot:action1>
        <div class="page1-fragment26"><span class="page1-text26">登录</span></div>
      </template>
      <template v-slot:heading1>
        <div class="page1-fragment27">
          <span class="page1-text27">欢迎登陆中国非遗网</span>
        </div>
      </template>
    </sign-in4>
    <app-footer4 rootClassName="footer4root-class-name">
      <template v-slot:link1>
        <div class="page1-fragment28">
          <span class="page1-text28">关于我们</span>
        </div>
      </template>
      <template v-slot:link2>
        <div class="page1-fragment29">
          <span class="page1-text29">联系我们</span>
        </div>
      </template>
      <template v-slot:link5>
        <div class="page1-fragment30">
          <span class="page1-text30">隐私与政策</span>
        </div>
      </template>
      <template v-slot:termsLink>
        <div class="page1-fragment31">
          <span class="page1-text31">Terms and Conditions</span>
        </div>
      </template>
      <template v-slot:cookiesLink>
        <div class="page1-fragment32">
          <span class="page1-text32">Cookies Policy</span>
        </div>
      </template>
      <template v-slot:privacyLink>
        <div class="page1-fragment33">
          <span class="page1-text33">Privacy Policy</span>
        </div>
      </template>
    </app-footer4>
  </div>
</template>

<script>
import AppNavbar8 from '../components/navbar8'
import SignIn4 from '../components/sign-in4'
import AppFooter4 from '../components/footer4'

export default {
  name: 'Page1',
  props: {},
  components: {
    AppNavbar8,
    SignIn4,
    AppFooter4,
  },
  metaInfo: {
    title: 'Page1 - Spry Adorable Lyrebird',
    meta: [
      {
        property: 'og:title',
        content: 'Page1 - Spry Adorable Lyrebird',
      },
    ],
  },
}
</script>

<style scoped>
.page1-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
 
.page1-fragment10 {
  display: contents;
}
 
.page1-text10 {
  display: inline-block;
}
 
.page1-fragment11 {
  display: contents;
}
 
.page1-text11 {
  display: inline-block;
}
 
.page1-fragment12 {
  display: contents;
}
 
.page1-text12 {
  display: inline-block;
}
 
.page1-fragment13 {
  display: contents;
}
 
.page1-text13 {
  display: inline-block;
}
 
.page1-fragment14 {
  display: contents;
}
 
.page1-text14 {
  display: inline-block;
}
 
.page1-fragment15 {
  display: contents;
}
 
.page1-text15 {
  display: inline-block;
}
 
.page1-fragment16 {
  display: contents;
}
 
.page1-text16 {
  display: inline-block;
}
 
.page1-fragment17 {
  display: contents;
}
 
.page1-text17 {
  display: inline-block;
}
 
.page1-fragment18 {
  display: contents;
}
 
.page1-text18 {
  display: inline-block;
}
 
.page1-fragment19 {
  display: contents;
}
 
.page1-text19 {
  display: inline-block;
}
 
.page1-fragment20 {
  display: contents;
}
 
.page1-text20 {
  display: inline-block;
}
 
.page1-fragment21 {
  display: contents;
}
 
.page1-text21 {
  display: inline-block;
}
 
.page1-fragment22 {
  display: contents;
}
 
.page1-text22 {
  display: inline-block;
}
 
.page1-fragment23 {
  display: contents;
}
 
.page1-text23 {
  display: inline-block;
}
 
.page1-fragment24 {
  display: contents;
}
 
.page1-text24 {
  display: inline-block;
}
 
.page1-fragment25 {
  display: contents;
}
 
.page1-text25 {
  display: inline-block;
}
 
.page1-fragment26 {
  display: contents;
}
 
.page1-text26 {
  display: inline-block;
}
 
.page1-fragment27 {
  display: contents;
}
 
.page1-text27 {
  display: inline-block;
}
 
.page1-fragment28 {
  display: contents;
}
 
.page1-text28 {
  display: inline-block;
}
 
.page1-fragment29 {
  display: contents;
}
 
.page1-text29 {
  display: inline-block;
}
 
.page1-fragment30 {
  display: contents;
}
 
.page1-text30 {
  display: inline-block;
}
 
.page1-fragment31 {
  display: contents;
}
 
.page1-text31 {
  display: inline-block;
}
 
.page1-fragment32 {
  display: contents;
}
 
.page1-text32 {
  display: inline-block;
}
 
.page1-fragment33 {
  display: contents;
}
 
.page1-text33 {
  display: inline-block;
}
</style>
