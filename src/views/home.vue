<template>
  <div class="home-container">
    <app-navbar8
      rootClassName="navbar8root-class-name"
    >
    </app-navbar8>
    <app-hero17
      image1Src= '/images/feiyi14.jpg'
    >
    </app-hero17>

    <app-cta26>
    </app-cta26>
    <heritage-list>
    </heritage-list>
    <app-features24>
      <template v-slot:feature1Title>
        <div class="home-fragment33">
          <span class="home-text33">民间文学</span>
        </div>
      </template>
      <template v-slot:button1>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'民间文学'" />
      </template>
      <template v-slot:feature2Title>
        <div class="home-fragment34">
          <span class="home-text34">民间音乐</span>
        </div>
      </template>

      <template v-slot:button2>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'传统音乐'" />
      </template>
      <template v-slot:feature3Title>
        <div class="home-fragment35">
          <span class="home-text35">民间舞蹈</span>
        </div>
      </template>
      <template v-slot:button3>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'传统舞蹈'" />
      </template>
      <template v-slot:feature3Title1>
        <div class="home-fragment36"><span class="home-text36">曲艺</span></div>
      </template>
      <template v-slot:feature3Title2>
        <div class="home-fragment37">
          <span class="home-text37">传统戏剧</span>
        </div>
      </template>
      <template v-slot:button4>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'传统戏剧'" />
      </template>
      <template v-slot:feature1Description>
        <div class="home-fragment38">
          <span class="home-text38">
            民间文学是人民群众世代相传的口头传统，包括神话、传说、史诗、歌谣等，承载着中华民族的文化记忆和集体智慧，是民族文化基因的重要载体。
          </span>
        </div>
      </template>

      <template v-slot:feature2Description>
        <div class="home-fragment39">
          <span class="home-text39">
            民间音乐源于劳动生活，以独特的旋律、节奏和演唱形式展现地域风情，如劳动号子、山歌、小调等，是中华民族情感表达的艺术结晶。
          </span>
        </div>
      </template>
      <template v-slot:feature3Description>
        <div class="home-fragment40">
          <span class="home-text40">
           民间舞蹈与生产劳动、岁时节令、信仰仪式密切相关，以丰富的肢体语言和服饰道具，生动展现各民族的生活习俗与精神追求。
          </span>
        </div>
      </template>
      <template v-slot:feature3Description1>
        <div class="home-fragment41">
          <span class="home-text41">
           传统戏剧融合唱、念、做、打等表演形式，以程式化的艺术语言演绎历史故事与世俗百态，体现了中国戏曲的独特美学体系。
          </span>
        </div>
      </template>
      <template v-slot:feature3Description2>
        <div class="home-fragment42">
          <span class="home-text42">
            曲艺是以说唱为主的叙事表演艺术，形式多样，如评书、鼓书、弹词等，凭借语言魅力和音乐节奏，传承民间智慧与道德教化。
          </span>
        </div>
      </template>
      <template v-slot:button5>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'曲艺'" />
      </template>
    </app-features24>
    <app-features25>
      <template v-slot:feature1Title>
        <div class="home-fragment43">
          <span class="home-text43">杂技与竞技</span>
        </div>
      </template>
      <template v-slot:button6>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'传统体育、游艺与杂技'" />
      </template>
      <template v-slot:feature2Title>
        <div class="home-fragment44">
          <span class="home-text44">
            <span class="home-text46">民间美术</span>
          </span>
        </div>
      </template>
      <template v-slot:button7>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'传统美术'" />
      </template>
      <template v-slot:feature3Title>
        <div class="home-fragment45">
          <span class="home-text47">传统手工技艺</span>
        </div>
      </template>
      <template v-slot:button8>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'传统技艺'" />
      </template>


      <template v-slot:feature3Title1>
        <div class="home-fragment46"><span class="home-text48">民俗</span></div>
      </template>
      <template v-slot:feature3Title2>
        <div class="home-fragment47">
          <span class="home-text49">传统医药</span>
        </div>
      </template>

      <template v-slot:button9>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'传统医药'" />
      </template>
      <template v-slot:feature1Description>
        <div class="home-fragment48">
          <span class="home-text50">
            杂技与竞技以高超的身体技巧和器械操演为核心，兼具惊险性、观赏性和竞技性，展现了中华民族的勇敢精神与艺术创造力。
          </span>
        </div>
      </template>

      <template v-slot:feature2Description>
        <div class="home-fragment49">
          <span class="home-text51">
           民间美术通过绘画、雕塑、剪刻等视觉形式，表现吉祥寓意和审美情趣，如年画、剪纸、泥塑等，是乡土文化的重要表现形式。
          </span>
        </div>
      </template>
      <template v-slot:feature3Description>
        <div class="home-fragment50">
          <span class="home-text52">
          传统手工技艺以手工劳动和天然材料为基础，如陶瓷、织染、锻造等，凝结世代匠人的智慧，体现了人与自然和谐共生的工艺哲学。
          </span>
        </div>
      </template>
      <template v-slot:feature3Description1>
        <div class="home-fragment51">
          <span class="home-text53">

             民俗是民众在长期生活中形成的风尚习俗，涵盖节庆、礼仪、信仰等，维系着社区认同与文化传承，是民族文化多样性的生动体现。
          </span>
        </div>
      </template>
      <template v-slot:feature3Description2>
        <div class="home-fragment52">
          <span class="home-text54">
        传统医药以整体观和辨证论治为核心，包括针灸、推拿、方剂等，是中华民族数千年来防病治病的经验总结，具有独特的理论体系和临床价值。
          </span>
        </div>
      </template>
      <template v-slot:button10>
        <!-- 使用 ViewMoreButton 组件并传递 category -->
        <ViewMoreButton :category="'民俗'" />
      </template>
    </app-features25>
    <PianoTabs>
    </PianoTabs>
    <app-footer4>
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
import ViewMoreButton from '../components/ViewMoreButton.vue';
import HeritageList  from "../components/heritage-list.vue";
import PianoTabs from '../components/skills.vue'

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
    ViewMoreButton,
    HeritageList,
    PianoTabs,
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
.heritage-box {
  margin-top: 12px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f0f8ff;
  text-align: center;
}

.heritage-box p {
  margin: 0 0 10px;
  color: #333;
  font-size: 14px;
}

.heritage-link {
  display: inline-block;
  color: #0078d4;
  text-decoration: none;
  font-weight: bold;
}

.heritage-link:hover {
  text-decoration: underline;
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
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
  display: inline-block;  display: inline-block;
}
 
.home-fragment34 {
  display: contents;
}
 
.home-text34 {
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
  display: inline-block;
  display: inline-block;
}
 
.home-fragment35 {
  display: contents;
}
 
.home-text35 {
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
  display: inline-block;
  display: inline-block;
}
 
.home-fragment36 {
  display: contents;
}
 
.home-text36 {
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
  display: inline-block;
}
 
.home-fragment37 {
  display: contents;
}
 
.home-text37 {
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
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
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
  display: inline-block;
}
 
.home-fragment44 {
  display: contents;
}
 
.home-text44 {
  display: inline-block;
}
 
.home-text46 {
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
  display: inline-block;

}
 
.home-fragment45 {
  display: contents;
}
 
.home-text47 {
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
  display: inline-block;
}
 
.home-fragment46 {
  display: contents;
}
 
.home-text48 {
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
  display: inline-block;
}
 
.home-fragment47 {
  display: contents;
}
 
.home-text49 {
  color: #5b3921;
  font-weight: bold;
  font-family: "Noto Serif SC", serif;
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
