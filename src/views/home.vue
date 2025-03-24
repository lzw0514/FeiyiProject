<template>
  <div class="home-container">
    <app-navbar8
      link1Url="/"
      link2Url="/1"
      rootClassName="navbar8root-class-name"
    >
      <template v-slot:link1>
        <div class="home-fragment10"><span class="home-text10">首页</span></div>
      </template>
      <template v-slot:link2>
        <div class="home-fragment11">
          <span class="home-text11">非遗百科</span>
        </div>
      </template>
      <template v-slot:link3>
        <div class="home-fragment12">
          <span class="home-text12">地图探索</span>
        </div>
      </template>
      <template v-slot:link4>
        <div class="home-fragment13"><span class="home-text13">AI推荐</span></div>
      </template>
      <template v-slot:page1>
        <div class="home-fragment14"><span class="home-text14">Home</span></div>
      </template>
      <template v-slot:page2>
        <div class="home-fragment15">
          <span class="home-text15">Introduction</span>
        </div>
      </template>
      <template v-slot:page3>
        <div class="home-fragment16">
          <span class="home-text16">Cultural Heritage Inheritors</span>
        </div>
      </template>
      <template v-slot:page4>
        <div class="home-fragment17">
          <span class="home-text17">Contact</span>
        </div>
      </template>
      <template v-slot:link31>
        <div class="home-fragment18">
          <span class="home-text18">非遗商城</span>
        </div>
      </template>
      <template v-slot:action1>
        <div class="home-fragment19"><span class="home-text19">登录</span></div>
      </template>
      <template v-slot:action2>
        <div class="home-fragment20">
          <span class="home-text20">Secondary Action</span>
        </div>
      </template>
      <template v-slot:page1Description>
        <div class="home-fragment21">
          <span class="home-text21">Page One Description</span>
        </div>
      </template>
      <template v-slot:page2Description>
        <div class="home-fragment22">
          <span class="home-text22">Page Two Description</span>
        </div>
      </template>
      <template v-slot:page3Description>
        <div class="home-fragment23">
          <span class="home-text23">Page Three Description</span>
        </div>
      </template>
      <template v-slot:page4Description>
        <div class="home-fragment24">
          <span class="home-text24">Page Four Description</span>
        </div>
      </template>
      <template v-slot:action11>
        <div class="home-fragment25"><span class="home-text25">注册</span></div>
      </template>
    </app-navbar8>
    <app-hero17
      image1Src="https://images.unsplash.com/photo-1598473032727-60824657847e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHwlRTQlQkMlQTAlRTclQkIlOUYlRTYlOTYlODclRTUlOEMlOTZ8ZW58MHx8fHwxNzQyNjQ2ODUyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
    >
      <template v-slot:action1>
        <div class="home-fragment26">
          <span class="home-text26">Learn More</span>
        </div>
      </template>
      <template v-slot:action2>
        <div class="home-fragment27">
          <span class="home-text27">Explore Heritage Sites</span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment28">
          <span class="home-text28">
            Explore the rich tapestry of China&apos;s intangible cultural
            heritage, from traditional crafts to performing arts, passed down
            through generations.
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment29">
          <span class="home-text29">「匠心铸就千年韵，非遗焕发新生光」</span>
        </div>
      </template>
    </app-hero17>
    <app-cta26>
      <template v-slot:action1>
        <div class="home-fragment30">
          <span class="home-text30">了解更多</span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment31">
          <span class="home-text31">
            走进中国非物质文化遗产，探寻千年技艺，感受文化之韵，传承匠心之美，让传统在现代焕发新的光彩
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment32">
          <span class="home-text32">走进中国非物质文化遗产</span>
        </div>
      </template>
    </app-cta26>
    <app-features24>
      <template v-slot:feature1Title>
        <div class="home-fragment33">
          <span class="home-text33">民间文学</span>
        </div>
      </template>
      <template v-slot:feature2Title>
        <div class="home-fragment34">
          <span class="home-text34">民间音乐</span>
        </div>
      </template>
      <template v-slot:feature3Title>
        <div class="home-fragment35">
          <span class="home-text35">民间舞蹈</span>
        </div>
      </template>
      <template v-slot:feature3Title1>
        <div class="home-fragment36"><span class="home-text36">曲艺</span></div>
      </template>
      <template v-slot:feature3Title2>
        <div class="home-fragment37">
          <span class="home-text37">传统戏剧</span>
        </div>
      </template>
      <template v-slot:feature1Description>
        <div class="home-fragment38">
          <span class="home-text38">
            Explore the colorful costumes and captivating performances of
            traditional Chinese opera.
          </span>
        </div>
      </template>
      <template v-slot:feature2Description>
        <div class="home-fragment39">
          <span class="home-text39">
            Discover the vibrant world of Chinese traditional music and its
            regional variations.
          </span>
        </div>
      </template>
      <template v-slot:feature3Description>
        <div class="home-fragment40">
          <span class="home-text40">
            Learn about the intricate art of Chinese calligraphy and its
            historical significance.
          </span>
        </div>
      </template>
      <template v-slot:feature3Description1>
        <div class="home-fragment41">
          <span class="home-text41">
            Learn about the intricate art of Chinese calligraphy and its
            historical significance.
          </span>
        </div>
      </template>
      <template v-slot:feature3Description2>
        <div class="home-fragment42">
          <span class="home-text42">
            Learn about the intricate art of Chinese calligraphy and its
            historical significance.
          </span>
        </div>
      </template>
    </app-features24>
    <app-features25>
      <template v-slot:feature1Title>
        <div class="home-fragment43">
          <span class="home-text43">杂技与竞技</span>
        </div>
      </template>
      <template v-slot:feature2Title>
        <div class="home-fragment44">
          <span class="home-text44">
            <span>民间</span>
            <span class="home-text46">美术</span>
          </span>
        </div>
      </template>
      <template v-slot:feature3Title>
        <div class="home-fragment45">
          <span class="home-text47">传统手工技艺</span>
        </div>
      </template>
      <template v-slot:feature3Title1>
        <div class="home-fragment46"><span class="home-text48">民俗</span></div>
      </template>
      <template v-slot:feature3Title2>
        <div class="home-fragment47">
          <span class="home-text49">传统医药</span>
        </div>
      </template>
      <template v-slot:feature1Description>
        <div class="home-fragment48">
          <span class="home-text50">
            Learn about the rich history and significance of China&apos;s
            intangible cultural heritage.
          </span>
        </div>
      </template>
      <template v-slot:feature2Description>
        <div class="home-fragment49">
          <span class="home-text51">
            Discover the dedicated individuals who are carrying on the traditions
            of China&apos;s intangible cultural heritage.
          </span>
        </div>
      </template>
      <template v-slot:feature3Description>
        <div class="home-fragment50">
          <span class="home-text52">
            Explore the initiatives and projects aimed at preserving and promoting
            China&apos;s intangible cultural heritage.
          </span>
        </div>
      </template>
      <template v-slot:feature3Description1>
        <div class="home-fragment51">
          <span class="home-text53">
            Explore the initiatives and projects aimed at preserving and promoting
            China&apos;s intangible cultural heritage.
          </span>
        </div>
      </template>
      <template v-slot:feature3Description2>
        <div class="home-fragment52">
          <span class="home-text54">
            Explore the initiatives and projects aimed at preserving and promoting
            China&apos;s intangible cultural heritage.
          </span>
        </div>
      </template>
    </app-features25>
    <app-footer4>
      <template v-slot:link1>
        <div class="home-fragment53">
          <span class="home-text55">关于我们</span>
        </div>
      </template>
      <template v-slot:link2>
        <div class="home-fragment54">
          <span class="home-text56">联系我们</span>
        </div>
      </template>
      <template v-slot:link5>
        <div class="home-fragment55">
          <span class="home-text57">隐私与政策</span>
        </div>
      </template>
      <template v-slot:termsLink>
        <div class="home-fragment56">
          <span class="home-text58">Terms and Conditions</span>
        </div>
      </template>
      <template v-slot:cookiesLink>
        <div class="home-fragment57">
          <span class="home-text59">Cookies Policy</span>
        </div>
      </template>
      <template v-slot:privacyLink>
        <div class="home-fragment58">
          <span class="home-text60">Privacy Policy</span>
        </div>
      </template>
    </app-footer4>
  </div>
</template>

<script>
import AppNavbar8 from '../components/navbar8'
import AppHero17 from '../components/hero17'
import AppCta26 from '../components/cta26'
import AppFeatures24 from '../components/features24'
import AppFeatures25 from '../components/features25'
import AppFooter4 from '../components/footer4'

export default {
  name: 'Home',
  props: {},
  components: {
    AppNavbar8,
    AppHero17,
    AppCta26,
    AppFeatures24,
    AppFeatures25,
    AppFooter4,
  },
  metaInfo: {
    title: 'Spry Adorable Lyrebird',
    meta: [
      {
        property: 'og:title',
        content: 'Spry Adorable Lyrebird',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
 
.home-fragment10 {
  display: contents;
}
 
.home-text10 {
  display: inline-block;
  box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
}
 
.home-fragment11 {
  display: contents;
}
 
.home-text11 {
  display: inline-block;
}
 
.home-fragment12 {
  display: contents;
}
 
.home-text12 {
  display: inline-block;
}
 
.home-fragment13 {
  display: contents;
}
 
.home-text13 {
  display: inline-block;
}
 
.home-fragment14 {
  display: contents;
}
 
.home-text14 {
  display: inline-block;
}
 
.home-fragment15 {
  display: contents;
}
 
.home-text15 {
  display: inline-block;
}
 
.home-fragment16 {
  display: contents;
}
 
.home-text16 {
  display: inline-block;
}
 
.home-fragment17 {
  display: contents;
}
 
.home-text17 {
  display: inline-block;
}
 
.home-fragment18 {
  display: contents;
}
 
.home-text18 {
  display: inline-block;
}
 
.home-fragment19 {
  display: contents;
}
 
.home-text19 {
  display: inline-block;
}
 
.home-fragment20 {
  display: contents;
}
 
.home-text20 {
  display: inline-block;
}
 
.home-fragment21 {
  display: contents;
}
 
.home-text21 {
  display: inline-block;
}
 
.home-fragment22 {
  display: contents;
}
 
.home-text22 {
  display: inline-block;
}
 
.home-fragment23 {
  display: contents;
}
 
.home-text23 {
  display: inline-block;
}
 
.home-fragment24 {
  display: contents;
}
 
.home-text24 {
  display: inline-block;
}
 
.home-fragment25 {
  display: contents;
}
 
.home-text25 {
  display: inline-block;
}
 
.home-fragment26 {
  display: contents;
}
 
.home-text26 {
  display: inline-block;
}
 
.home-fragment27 {
  display: contents;
}
 
.home-text27 {
  display: inline-block;
}
 
.home-fragment28 {
  display: contents;
}
 
.home-text28 {
  display: inline-block;
}
 
.home-fragment29 {
  display: contents;
}
 
.home-text29 {
  display: inline-block;
}
 
.home-fragment30 {
  display: contents;
}
 
.home-text30 {
  display: inline-block;
}
 
.home-fragment31 {
  display: contents;
}
 
.home-text31 {
  display: inline-block;
}
 
.home-fragment32 {
  display: contents;
}
 
.home-text32 {
  color: #b13e06;
  display: inline-block;
}
 
.home-fragment33 {
  display: contents;
}
 
.home-text33 {
  display: inline-block;
}
 
.home-fragment34 {
  display: contents;
}
 
.home-text34 {
  display: inline-block;
}
 
.home-fragment35 {
  display: contents;
}
 
.home-text35 {
  display: inline-block;
}
 
.home-fragment36 {
  display: contents;
}
 
.home-text36 {
  display: inline-block;
}
 
.home-fragment37 {
  display: contents;
}
 
.home-text37 {
  display: inline-block;
}
 
.home-fragment38 {
  display: contents;
}
 
.home-text38 {
  display: inline-block;
}
 
.home-fragment39 {
  display: contents;
}
 
.home-text39 {
  display: inline-block;
}
 
.home-fragment40 {
  display: contents;
}
 
.home-text40 {
  display: inline-block;
}
 
.home-fragment41 {
  display: contents;
}
 
.home-text41 {
  display: inline-block;
}
 
.home-fragment42 {
  display: contents;
}
 
.home-text42 {
  display: inline-block;
}
 
.home-fragment43 {
  display: contents;
}
 
.home-text43 {
  display: inline-block;
}
 
.home-fragment44 {
  display: contents;
}
 
.home-text44 {
  display: inline-block;
}
 
.home-text46 {
  color: var(--dl-color-theme-neutral-dark);
}
 
.home-fragment45 {
  display: contents;
}
 
.home-text47 {
  display: inline-block;
}
 
.home-fragment46 {
  display: contents;
}
 
.home-text48 {
  display: inline-block;
}
 
.home-fragment47 {
  display: contents;
}
 
.home-text49 {
  display: inline-block;
}
 
.home-fragment48 {
  display: contents;
}
 
.home-text50 {
  display: inline-block;
}
 
.home-fragment49 {
  display: contents;
}
 
.home-text51 {
  display: inline-block;
}
 
.home-fragment50 {
  display: contents;
}
 
.home-text52 {
  display: inline-block;
}
 
.home-fragment51 {
  display: contents;
}
 
.home-text53 {
  display: inline-block;
}
 
.home-fragment52 {
  display: contents;
}
 
.home-text54 {
  display: inline-block;
}
 
.home-fragment53 {
  display: contents;
}
 
.home-text55 {
  display: inline-block;
}
 
.home-fragment54 {
  display: contents;
}
 
.home-text56 {
  display: inline-block;
}
 
.home-fragment55 {
  display: contents;
}
 
.home-text57 {
  display: inline-block;
}
 
.home-fragment56 {
  display: contents;
}
 
.home-text58 {
  display: inline-block;
}
 
.home-fragment57 {
  display: contents;
}
 
.home-text59 {
  display: inline-block;
}
 
.home-fragment58 {
  display: contents;
}
 
.home-text60 {
  display: inline-block;
}
</style>
