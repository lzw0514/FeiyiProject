<template>
  <div class="thq-section-padding">
    <div class="features24-container2 thq-section-max-width">
      <div class="features24-image-container">
        <img :alt="feature1ImgAlt" :src="feature1ImgSrc" v-if="activeTab === 0"
          class="features24-image1 thq-img-ratio-16-9" />
        <img :alt="feature2ImgAlt" :src="feature2ImgSrc" v-if="activeTab === 1"
          class="features24-image2 thq-img-ratio-16-9" />
        <img :alt="feature3ImgAlt" :src="feature3ImgSrc" v-if="activeTab === 2"
          class="features24-image3 thq-img-ratio-16-9" />
        <img :alt="feature3ImgAlt2" :src="feature3ImgSrc2" v-if="activeTab === 3"
          class="features24-image4 thq-img-ratio-16-9" />
        <img :alt="feature3ImgAlt1" :src="feature3ImgSrc1" v-if="activeTab === 4"
          class="features24-image5 thq-img-ratio-16-9" />
      </div>
      <div class="features24-tabs-menu">
        <div @click="activeTab = 0" class="features24-tab-horizontal1">
          <div class="features24-divider-container1">
            <div v-if="activeTab === 0" class="features24-container3"></div>
          </div>
          <div class="features24-content1"  style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="thq-heading-2" style="margin: 0;">
              <slot name="feature1Title">
                <!--Default content for feature1Title-->
                <div class="features24-fragment14">
                  <span class="features24-text14">民间文学</span>
                </div>
              </slot>
            </h2>
            <slot name="button1"></slot>
            </div>
            <span class="thq-body-small">
              <slot name="feature1Description">
                <!--Default content for feature1Description-->
                <div class="features24-fragment15">
                  <span class="features24-text15">
                    Explore the colorful costumes and captivating performances of
                    traditional Chinese opera.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 1" class="features24-tab-horizontal2">
          <div class="features24-divider-container2">
            <div v-if="activeTab === 1" class="features24-container4"></div>
          </div>
          <div class="features24-content2"  style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="thq-heading-2" style="margin: 0;">
              <slot name="feature2Title">
                <!--Default content for feature2Title-->
                <div class="features24-fragment17">
                  <span class="features24-text17">民间音乐</span>
                </div>
              </slot>
            </h2>
            <slot name="button2"></slot>
            </div>
            <span class="thq-body-small">
              <slot name="feature2Description">
                <!--Default content for feature2Description-->
                <div class="features24-fragment19">
                  <span class="features24-text19">
                    Discover the vibrant world of Chinese traditional music and
                    its regional variations.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 2" class="features24-tab-horizontal3">
          <div class="features24-divider-container3">
            <div v-if="activeTab === 2" class="features24-container5"></div>
          </div>
          <div class="features24-content3"  style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="thq-heading-2" style="margin: 0;">
              <slot name="feature3Title">
                <!--Default content for feature3Title-->
                <div class="features24-fragment13">
                  <span class="features24-text13">民间舞蹈</span>
                </div>
              </slot>
            </h2>
            <slot name="button3"></slot>
              </div>
            <span class="thq-body-small">
              <slot name="feature3Description">
                <!--Default content for feature3Description-->
                <div class="features24-fragment10">
                  <span class="features24-text10">
                    Learn about the intricate art of Chinese calligraphy and its
                    historical significance.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 3" class="features24-tab-horizontal4">
          <div class="features24-divider-container4">
            <div v-if="activeTab === 3" class="features24-container6"></div>
          </div>
          <div class="features24-content4"  style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="thq-heading-2" style="margin: 0;">
              <slot name="feature3Title2">
                <!--Default content for feature3Title2-->
                <div class="features24-fragment16">
                  <span class="features24-text16">传统戏剧</span>
                </div>
              </slot>
            </h2>
            <slot name="button4"></slot>
            </div>
            <span class="thq-body-small">
              <slot name="feature3Description2">
                <!--Default content for feature3Description2-->
                <div class="features24-fragment11">
                  <span class="features24-text11">
                    Learn about the intricate art of Chinese calligraphy and its
                    historical significance.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 4" class="features24-tab-horizontal5">
          <div class="features24-divider-container5">
            <div v-if="activeTab === 4" class="features24-container7"></div>
          </div>
          <div class="features24-content5"  style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="thq-heading-2" style="margin: 0;">
              <slot name="feature3Title1">
                <!--Default content for feature3Title1-->
                <div class="features24-fragment18">
                  <span class="features24-text18">曲艺</span>
                </div>
              </slot>
            </h2>
            <slot name="button5"></slot>
            </div>
            <span class="thq-body-small">
              <slot name="feature3Description1">
                <!--Default content for feature3Description1-->
                <div class="features24-fragment12">
                  <span class="features24-text12">
                    Learn about the intricate art of Chinese calligraphy and its
                    historical significance.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features24',
  props: {
    feature1ImgAlt: {
      type: String,
      default: 'Image of traditional Chinese opera performance',
    },
    feature2ImgAlt: {
      type: String,
      default: 'Image of traditional Chinese musical instruments',
    },
    feature2ImgSrc: {
      type: String,
      default:
          '/images/yinyue.jpg',
    },
    feature3ImgSrc1: {
      type: String,
      default:
          '/images/quyi.jpg',
    },
    feature3ImgAlt: {
      type: String,
      default: 'Image of Chinese calligraphy brushes and ink',
    },
    feature3ImgAlt1: {
      type: String,
      default: 'Image of Chinese calligraphy brushes and ink',
    },
    feature1ImgSrc: {
      type: String,
      default:
          '/images/wenxue.jpg',
    },
    feature3ImgSrc: {
      type: String,
      default:
          '/images/wudao.jpg',
    },
    feature3ImgAlt2: {
      type: String,
      default: 'Image of Chinese calligraphy brushes and ink',
    },
    feature3ImgSrc2: {
      type: String,
      default:
          '/images/feiyi10.jpg',
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>

<style scoped>
.features24-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-layout-space-fiveunits);
  position: relative;
  grid-template-columns: 1fr 1fr;
}

.features24-image-container {
  height: 100%;
  display: flex;
  position: relative;
}

.features24-image1 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features24-image2 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features24-image3 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features24-image4 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features24-image5 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features24-tabs-menu {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.features24-tab-horizontal1 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features24-divider-container1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features24-container3 {
  width: 2px;
  align-self: stretch;
  border-color: var(--dl-color-theme-neutral-dark);
  border-width: 1px;
  border-radius: var(--dl-layout-radius-radius4);
  animation-name: none;
  animation-delay: 0s;
  background-color: var(--dl-color-theme-neutral-dark);
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features24-content1 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features24-tab-horizontal2 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features24-divider-container2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features24-container4 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features24-content2 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features24-tab-horizontal3 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features24-divider-container3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features24-container5 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features24-content3 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features24-tab-horizontal4 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features24-divider-container4 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features24-container6 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features24-content4 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features24-tab-horizontal5 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features24-divider-container5 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features24-container7 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features24-content5 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.features24-fragment10 {
  display: contents;
}

.features24-text10 {
  display: inline-block;
}

.features24-fragment11 {
  display: contents;
}

.features24-text11 {
  display: inline-block;
}

.features24-fragment12 {
  display: contents;
}

.features24-text12 {
  display: inline-block;
}

.features24-fragment13 {
  display: contents;
}

.features24-text13 {
  display: inline-block;
}

.features24-fragment14 {
  display: contents;
}

.features24-text14 {
  display: inline-block;
}

.features24-fragment15 {
  display: contents;
}

.features24-text15 {
  display: inline-block;
}

.features24-fragment16 {
  display: contents;
}

.features24-text16 {
  display: inline-block;
}

.features24-fragment17 {
  display: contents;
}

.features24-text17 {
  display: inline-block;
}

.features24-fragment18 {
  display: contents;
}

.features24-text18 {
  display: inline-block;
}

.features24-fragment19 {
  display: contents;
}

.features24-text19 {
  display: inline-block;
}

@media(max-width: 991px) {
  .features24-container2 {
    grid-gap: var(--dl-layout-space-twounits);
    grid-template-columns: 1fr;
  }
}
</style>
