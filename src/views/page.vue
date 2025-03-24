<template>
  <div class="page-container">
    <app-navbar8 link1Url="/" link2Url="/1">
      <template v-slot:link1>
        <div class="page-fragment10"><span class="page-text10">首页</span></div>
      </template>
      <template v-slot:link2>
        <div class="page-fragment11">
          <span class="page-text11">非遗百科</span>
        </div>
      </template>
      <template v-slot:link3>
        <div class="page-fragment12">
          <span class="page-text12">地图探索</span>
        </div>
      </template>
      <template v-slot:link4>
        <div class="page-fragment13"><span class="page-text13">AI探索</span></div>
      </template>
      <template v-slot:page1>
        <div class="page-fragment14"><span class="page-text14">Home</span></div>
      </template>
      <template v-slot:page2>
        <div class="page-fragment15">
          <span class="page-text15">Introduction</span>
        </div>
      </template>
      <template v-slot:page3>
        <div class="page-fragment16">
          <span class="page-text16">Cultural Heritage Inheritors</span>
        </div>
      </template>
      <template v-slot:page4>
        <div class="page-fragment17">
          <span class="page-text17">Contact</span>
        </div>
      </template>
      <template v-slot:link31>
        <div class="page-fragment18">
          <span class="page-text18">非遗商城</span>
        </div>
      </template>
      <template v-slot:action1>
        <div class="page-fragment19"><span class="page-text19">登录</span></div>
      </template>
      <template v-slot:action2>
        <div class="page-fragment20">
          <span class="page-text20">Secondary Action</span>
        </div>
      </template>
      <template v-slot:page1Description>
        <div class="page-fragment21">
          <span class="page-text21">Page One Description</span>
        </div>
      </template>
      <template v-slot:page2Description>
        <div class="page-fragment22">
          <span class="page-text22">Page Two Description</span>
        </div>
      </template>
      <template v-slot:page3Description>
        <div class="page-fragment23">
          <span class="page-text23">Page Three Description</span>
        </div>
      </template>
      <template v-slot:page4Description>
        <div class="page-fragment24">
          <span class="page-text24">Page Four Description</span>
        </div>
      </template>
      <template v-slot:action11>
        <div class="page-fragment25"><span class="page-text25">注册</span></div>
      </template>
    </app-navbar8>
    <app-footer4>
      <template v-slot:link1>
        <div class="page-fragment26">
          <span class="page-text26">关于我们</span>
        </div>
      </template>
      <template v-slot:link2>
        <div class="page-fragment27">
          <span class="page-text27">联系我们</span>
        </div>
      </template>
      <template v-slot:link5>
        <div class="page-fragment28">
          <span class="page-text28">隐私与政策</span>
        </div>
      </template>
      <template v-slot:termsLink>
        <div class="page-fragment29">
          <span class="page-text29">Terms and Conditions</span>
        </div>
      </template>
      <template v-slot:cookiesLink>
        <div class="page-fragment30">
          <span class="page-text30">Cookies Policy</span>
        </div>
      </template>
      <template v-slot:privacyLink>
        <div class="page-fragment31">
          <span class="page-text31">Privacy Policy</span>
        </div>
      </template>
    </app-footer4>
  </div>
</template>

<script>
import AppNavbar8 from '../components/navbar8'
import AppFooter4 from '../components/footer4'

export default {
  name: 'Page',
  props: {},
  components: {
    AppNavbar8,
    AppFooter4,
  },
  metaInfo: {
    title: 'Page - Spry Adorable Lyrebird',
    meta: [
      {
        property: 'og:title',
        content: 'Page - Spry Adorable Lyrebird',
      },
    ],
  },
}
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
 
.page-fragment10 {
  display: contents;
}
 
.page-text10 {
  display: inline-block;
}
 
.page-fragment11 {
  display: contents;
}
 
.page-text11 {
  display: inline-block;
}
 
.page-fragment12 {
  display: contents;
}
 
.page-text12 {
  display: inline-block;
}
 
.page-fragment13 {
  display: contents;
}
 
.page-text13 {
  display: inline-block;
}
 
.page-fragment14 {
  display: contents;
}
 
.page-text14 {
  display: inline-block;
}
 
.page-fragment15 {
  display: contents;
}
 
.page-text15 {
  display: inline-block;
}
 
.page-fragment16 {
  display: contents;
}
 
.page-text16 {
  display: inline-block;
}
 
.page-fragment17 {
  display: contents;
}
 
.page-text17 {
  display: inline-block;
}
 
.page-fragment18 {
  display: contents;
}
 
.page-text18 {
  display: inline-block;
}
 
.page-fragment19 {
  display: contents;
}
 
.page-text19 {
  display: inline-block;
}
 
.page-fragment20 {
  display: contents;
}
 
.page-text20 {
  display: inline-block;
}
 
.page-fragment21 {
  display: contents;
}
 
.page-text21 {
  display: inline-block;
}
 
.page-fragment22 {
  display: contents;
}
 
.page-text22 {
  display: inline-block;
}
 
.page-fragment23 {
  display: contents;
}
 
.page-text23 {
  display: inline-block;
}
 
.page-fragment24 {
  display: contents;
}
 
.page-text24 {
  display: inline-block;
}
 
.page-fragment25 {
  display: contents;
}
 
.page-text25 {
  display: inline-block;
}
 
.page-fragment26 {
  display: contents;
}
 
.page-text26 {
  display: inline-block;
}
 
.page-fragment27 {
  display: contents;
}
 
.page-text27 {
  display: inline-block;
}
 
.page-fragment28 {
  display: contents;
}
 
.page-text28 {
  display: inline-block;
}
 
.page-fragment29 {
  display: contents;
}
 
.page-text29 {
  display: inline-block;
}
 
.page-fragment30 {
  display: contents;
}
 
.page-text30 {
  display: inline-block;
}
 
.page-fragment31 {
  display: contents;
}
 
.page-text31 {
  display: inline-block;
}
</style>
