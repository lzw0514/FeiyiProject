<template>
  <div class="features1-layout251 thq-section-padding">
    <div class="features1-max-width thq-section-max-width">
      <div class="thq-flex-row features1-section-title">
        <div class="features1-column thq-flex-column">
          <span class="thq-body-small">
            <slot name="slogan">
              <!--Default content for slogan-->
              <div class="features1-fragment18">
                <span class="features1-text21">
                  Preserving the Past, Celebrating the Present, Ensuring the
                  Future
                </span>
              </div>
            </slot>
          </span>
          <h2 class="thq-heading-2 features1-text11">
            <slot name="sectionTitle">
              <!--Default content for sectionTitle-->
              <div class="features1-fragment17">
                <span class="features1-text20">
                  Discover China&apos;s Intangible Cultural Heritage
                </span>
              </div>
            </slot>
          </h2>
        </div>
        <span class="thq-body-small">
          <slot name="sectionDescription">
            <!--Default content for sectionDescription-->
            <div class="features1-fragment20">
              <span class="features1-text23">
                Explore the rich tapestry of China&apos;s intangible cultural
                heritage recognized by UNESCO, from traditional crafts to
                performing arts.
              </span>
            </div>
          </slot>
        </span>
      </div>
      <div class="features1-content1">
        <div class="features1-row thq-flex-row">
          <div class="features1-feature1 thq-flex-column">
            <img
              :alt="feature1ImageAlt"
              :src="feature1ImageSrc"
              class="thq-img-ratio-4-3 features1-feature1-image"
            />
            <div class="features1-content2 thq-flex-column">
              <h3 class="thq-heading-3">
                <slot name="feature1Title">
                  <!--Default content for feature1Title-->
                  <div class="features1-fragment19">
                    <span class="features1-text22">Traditional Crafts</span>
                  </div>
                </slot>
              </h3>
              <span class="thq-body-small">
                <slot name="feature1Description">
                  <!--Default content for feature1Description-->
                  <div class="features1-fragment14">
                    <span class="features1-text17">
                      Learn about the intricate craftsmanship behind traditional
                      Chinese crafts and their cultural significance.
                    </span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
          <div class="features1-feature2 thq-flex-column">
            <img
              :alt="feature2ImageAlt"
              :src="feature2ImageSrc"
              class="thq-img-ratio-4-3 features1-feature2-image"
            />
            <div class="features1-content3 thq-flex-column">
              <h3 class="thq-heading-3">
                <slot name="feature2Title">
                  <!--Default content for feature2Title-->
                  <div class="features1-fragment15">
                    <span class="features1-text18">Performing Arts</span>
                  </div>
                </slot>
              </h3>
              <span class="thq-body-small">
                <slot name="feature2Description">
                  <!--Default content for feature2Description-->
                  <div class="features1-fragment11">
                    <span class="features1-text14">
                      Immerse yourself in the vibrant world of traditional Chinese
                      opera, music, and dance forms.
                    </span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
          <div class="features1-feature3 thq-flex-column">
            <img
              :alt="feature3ImageAlt"
              :src="feature3ImageSrc"
              class="thq-img-ratio-4-3 features1-feature3-image"
            />
            <div class="features1-content4 thq-flex-column">
              <h3 class="thq-heading-3">
                <slot name="feature3Title">
                  <!--Default content for feature3Title-->
                  <div class="features1-fragment12">
                    <span class="features1-text15">
                      Calligraphy and Practices
                    </span>
                  </div>
                </slot>
              </h3>
              <span class="thq-body-small">
                <slot name="feature3Description">
                  <!--Default content for feature3Description-->
                  <div class="features1-fragment16">
                    <span class="features1-text19">
                      Discover the art of calligraphy and other traditional
                      practices that embody China&apos;s cultural heritage.
                    </span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="features1-actions">
        <button class="thq-button-filled features1-button1">
          <span class="thq-body-small">
            <slot name="mainAction">
              <!--Default content for mainAction-->
              <div class="features1-fragment10">
                <span class="features1-text13">Explore Heritage Sites</span>
              </div>
            </slot>
          </span>
        </button>
        <button class="thq-button-outline features1-button2">
          <span class="thq-body-small">
            <slot name="secondaryAction">
              <!--Default content for secondaryAction-->
              <div class="features1-fragment13">
                <span class="features1-text16">
                  Support Preservation Initiatives
                </span>
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
  name: 'Features1',
  props: {
    feature3ImageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1559305985-89ee17b825ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature1ImageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1728287109396-74d6bf417d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature1ImageAlt: {
      type: String,
      default: 'Traditional Chinese Crafts',
    },
    feature3ImageAlt: {
      type: String,
      default: 'Chinese Calligraphy Masterpiece',
    },
    feature2ImageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1667517258948-6ab20758498a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature2ImageAlt: {
      type: String,
      default: 'Traditional Chinese Opera Performance',
    },
  },
}
</script>

<style scoped>
.features1-layout251 {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.features1-max-width {
  gap: var(--dl-layout-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.features1-column {
  gap: var(--dl-layout-space-halfunit);
  align-items: flex-start;
  flex-shrink: 0;
}
 
.features1-content1 {
  gap: 48px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.features1-row {
  align-items: flex-start;
}
 
.features1-feature1 {
  flex: 1;
}
 
.features1-content2 {
  align-self: stretch;
  align-items: flex-start;
}
 
.features1-feature2 {
  flex: 1;
}
 
.features1-content3 {
  align-self: stretch;
  align-items: flex-start;
}
 
.features1-feature3 {
  flex: 1;
}
 
.features1-content4 {
  align-self: stretch;
  align-items: flex-start;
}
 
.features1-actions {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.features1-fragment10 {
  display: contents;
}
 
.features1-text13 {
  display: inline-block;
}
 
.features1-fragment11 {
  display: contents;
}
 
.features1-text14 {
  display: inline-block;
}
 
.features1-fragment12 {
  display: contents;
}
 
.features1-text15 {
  display: inline-block;
}
 
.features1-fragment13 {
  display: contents;
}
 
.features1-text16 {
  display: inline-block;
}
 
.features1-fragment14 {
  display: contents;
}
 
.features1-text17 {
  display: inline-block;
}
 
.features1-fragment15 {
  display: contents;
}
 
.features1-text18 {
  display: inline-block;
}
 
.features1-fragment16 {
  display: contents;
}
 
.features1-text19 {
  display: inline-block;
}
 
.features1-fragment17 {
  display: contents;
}
 
.features1-text20 {
  display: inline-block;
}
 
.features1-fragment18 {
  display: contents;
}
 
.features1-text21 {
  display: inline-block;
}
 
.features1-fragment19 {
  display: contents;
}
 
.features1-text22 {
  display: inline-block;
}
 
.features1-fragment20 {
  display: contents;
}
 
.features1-text23 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .features1-section-title {
    align-items: flex-start;
    flex-direction: column;
  }
  .features1-feature1-image {
    height: 260px;
  }
  .features1-feature2-image {
    height: 260px;
  }
  .features1-feature3-image {
    height: 260px;
  }
}
 
@media(max-width: 767px) {
  .features1-column {
    width: 100%;
  }
  .features1-text11 {
    text-align: center;
  }
  .features1-row {
    flex-direction: column;
  }
  .features1-feature1-image {
    width: 100%;
  }
  .features1-feature2 {
    width: auto;
  }
  .features1-feature2-image {
    width: 100%;
  }
  .features1-feature3 {
    width: auto;
  }
  .features1-actions {
    flex-wrap: wrap;
  }
}
 
@media(max-width: 479px) {
  .features1-actions {
    width: 100%;
    flex-direction: column;
  }
  .features1-button1 {
    width: 100%;
  }
  .features1-button2 {
    width: 100%;
  }
}
</style>
