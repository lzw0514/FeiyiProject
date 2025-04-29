<template>
  <div class="thq-section-padding">
    <div class="features25-container2 thq-section-max-width">
      <div class="features25-tabs-menu">
        <div @click="activeTab = 0" class="features25-tab-horizontal1">
          <div class="features25-divider-container1">
            <div v-if="activeTab === 0" class="features25-container3"></div>
          </div>
          <div class="features25-content1"  style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="thq-heading-2" style="margin: 0;">
              <slot name="feature1Title">
                <!--Default content for feature1Title-->
                <div class="features25-fragment11">
                  <span class="features25-text11">杂技与竞技</span>
                </div>
              </slot>
            </h2>
            <slot name="button6"></slot>
            </div>
            <span class="thq-body-small">
              <slot name="feature1Description">
                <!--Default content for feature1Description-->
                <div class="features25-fragment17">
                  <span class="features25-text19">
                    Learn about the rich history and significance of China&apos;s
                    intangible cultural heritage.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 1" class="features25-tab-horizontal2">
          <div class="features25-divider-container2">
            <div v-if="activeTab === 1" class="features25-container4"></div>
          </div>
          <div class="features25-content2"  style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="features25-feature2-title thq-heading-2" style="margin: 0;">
              <slot name="feature2Title">
                <!--Default content for feature2Title-->
                <div class="features25-fragment13">
                  <span class="features25-text13">
                    <span>民间</span>
                    <span class="features25-text15">美术</span>
                  </span>
                </div>
              </slot>
            </h2>
            <slot name="button7"></slot>
            </div>
            <span class="thq-body-small">
              <slot name="feature2Description">
                <!--Default content for feature2Description-->
                <div class="features25-fragment16">
                  <span class="features25-text18">
                    Discover the dedicated individuals who are carrying on the
                    traditions of China&apos;s intangible cultural heritage.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 2" class="features25-tab-horizontal3">
          <div class="features25-divider-container3">
            <div v-if="activeTab === 2" class="features25-container5"></div>
          </div>
          <div class="features25-content3" style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="thq-heading-2" style="margin: 0;">
              <slot name="feature3Title">
                <!--Default content for feature3Title-->
                <div class="features25-fragment12">
                  <span class="features25-text12">传统手工技艺</span>
                </div>
              </slot>
            </h2>
            <slot name="button8"></slot>
            </div>
            <span class="thq-body-small">
              <slot name="feature3Description">
                <!--Default content for feature3Description-->
                <div class="features25-fragment19">
                  <span class="features25-text21">
                    Explore the initiatives and projects aimed at preserving and
                    promoting China&apos;s intangible cultural heritage.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 3" class="features25-tab-horizontal4">
          <div class="features25-divider-container4">
            <div v-if="activeTab === 3" class="features25-container6"></div>
          </div>
          <div class="features25-content4" style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h2 class="thq-heading-2" style="margin: 0;">
                <slot name="feature3Title2">
                  <!--Default content for feature3Title2-->
                  <div class="features25-fragment14">
                    <span class="features25-text16">传统医药</span>
                  </div>
                </slot>
              </h2>
              <slot name="button9"></slot>
            </div>

            <span class="thq-body-small">
      <slot name="feature3Description2">
        <!--Default content for feature3Description2-->
        <div class="features25-fragment10">
          <span class="features25-text10">
            Explore the initiatives and projects aimed at preserving and
            promoting China&apos;s intangible cultural heritage.
          </span>
        </div>
      </slot>
    </span>
          </div>
        </div>

        <div @click="activeTab = 4" class="features25-tab-horizontal5">
          <div class="features25-divider-container5">
            <div v-if="activeTab === 4" class="features25-container7"></div>
          </div>
          <div class="features25-content5" style="display: flex; flex-direction: column; gap: 8px;">
            <!-- 新增一个 flex 容器包裹标题和按钮 -->
            <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="thq-heading-2" style="margin: 0;">
              <slot name="feature3Title1">
                <!--Default content for feature3Title1-->
                <div class="features25-fragment15">
                  <span class="features25-text17">民俗</span>
                </div>
              </slot>
            </h2>
            <slot name="button10"></slot>
            </div>
            <span class="thq-body-small">
              <slot name="feature3Description1">
                <!--Default content for feature3Description1-->
                <div class="features25-fragment18">
                  <span class="features25-text20">
                    Explore the initiatives and projects aimed at preserving and
                    promoting China&apos;s intangible cultural heritage.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
      </div>
      <div class="features25-image-container">
        <img :alt="feature1ImgAlt" :src="feature1ImgSrc" v-if="activeTab === 0"
          class="features25-image1 thq-img-ratio-16-9" />
        <img :alt="feature2ImgAlt" :src="feature2ImgSrc" v-if="activeTab === 1"
          class="features25-image2 thq-img-ratio-16-9" />
        <img :alt="feature3ImgAlt" :src="feature3ImgSrc" v-if="activeTab === 2"
          class="features25-image3 thq-img-ratio-16-9" />
        <img :alt="feature3ImgAlt2" :src="feature3ImgSrc2" v-if="activeTab === 3"
          class="features25-image4 thq-img-ratio-16-9" />
        <img :alt="feature3ImgAlt1" :src="feature3ImgSrc1" v-if="activeTab === 4"
          class="features25-image5 thq-img-ratio-16-9" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features25',
  props: {
    feature1ImgAlt: {
      type: String,
      default: 'Image depicting various forms of intangible cultural heritage',
    },
    feature3ImgSrc1: {
      type: String,
      default:
          '/images/feiyi17.jpg',
    },
    feature1ImgSrc: {
      type: String,
      default:
          '/images/feiyi12.jpg',
    },
    feature3ImgAlt1: {
      type: String,
      default: 'Image illustrating preservation activities',
    },
    feature2ImgAlt: {
      type: String,
      default: 'Image showing intangible cultural heritage practitioners',
    },
    feature3ImgSrc: {
      type: String,
      default:
          '/images/feiyi19.jpg',
    },
    feature3ImgAlt: {
      type: String,
      default: 'Image illustrating preservation activities',
    },
    feature2ImgSrc: {
      type: String,
      default:
          '/images/feiyi4.jpg',
    },
    feature3ImgAlt2: {
      type: String,
      default: 'Image illustrating preservation activities',
    },
    feature3ImgSrc2: {
      type: String,
      default:
          '/images/yiyao.jpg',
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
.features25-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-layout-space-fiveunits);
  position: relative;
  grid-template-columns: 1fr 1fr;
}

.features25-tabs-menu {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.features25-tab-horizontal1 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features25-divider-container1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features25-container3 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features25-content1 {
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

.features25-tab-horizontal2 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features25-divider-container2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features25-container4 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features25-content2 {
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

.features25-feature2-title {
  align-self: flex-start;
  animation-name: none;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features25-tab-horizontal3 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features25-divider-container3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features25-container5 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features25-content3 {
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

.features25-tab-horizontal4 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features25-divider-container4 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features25-container6 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features25-content4 {
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

.features25-tab-horizontal5 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}

.features25-divider-container5 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}

.features25-container7 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}

.features25-content5 {
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

.features25-image-container {
  height: 100%;
  display: flex;
  position: relative;
}

.features25-image1 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features25-image2 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features25-image3 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features25-image4 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features25-image5 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}

.features25-fragment10 {
  display: contents;
}

.features25-text10 {
  display: inline-block;
}

.features25-fragment11 {
  display: contents;
}

.features25-text11 {
  display: inline-block;
}

.features25-fragment12 {
  display: contents;
}

.features25-text12 {
  display: inline-block;
}

.features25-fragment13 {
  display: contents;
}

.features25-text13 {
  display: inline-block;
}

.features25-text15 {
  color: var(--dl-color-theme-neutral-dark);
}

.features25-fragment14 {
  display: contents;
}

.features25-text16 {
  display: inline-block;
}

.features25-fragment15 {
  display: contents;
}

.features25-text17 {
  display: inline-block;
}

.features25-fragment16 {
  display: contents;
}

.features25-text18 {
  display: inline-block;
}

.features25-fragment17 {
  display: contents;
}

.features25-text19 {
  display: inline-block;
}

.features25-fragment18 {
  display: contents;
}

.features25-text20 {
  display: inline-block;
}

.features25-fragment19 {
  display: contents;
}

.features25-text21 {
  display: inline-block;
}

@media(max-width: 991px) {
  .features25-container2 {
    grid-gap: var(--dl-layout-space-twounits);
    grid-template-columns: 1fr;
  }

  .features25-tabs-menu {
    order: 2;
  }
}
</style>
