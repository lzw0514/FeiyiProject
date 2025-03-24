<template>
  <div class="stats2-container1 thq-section-padding">
    <div class="stats2-max-width thq-section-max-width">
      <div class="stats2-container2 thq-flex-column">
        <img
          :alt="image1Alt"
          :src="image1Src"
          class="thq-img-ratio-1-1 stats2-image"
        />
      </div>
      <div class="stats2-container3 thq-flex-column">
        <span class="thq-body-small">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="stats2-fragment19">
              <span class="stats2-text30">42</span>
            </div>
          </slot>
        </span>
        <h2 class="thq-heading-2">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="stats2-fragment12">
              <span class="stats2-text23">Cultural Heritage Statistics</span>
            </div>
          </slot>
        </h2>
        <p class="thq-body-large">
          <slot name="content2">
            <!--Default content for content2-->
            <div class="stats2-fragment17">
              <span class="stats2-text28">
                China has the highest number of UNESCO-recognized intangible
                cultural heritage elements in the world.
              </span>
            </div>
          </slot>
        </p>
        <div class="stats2-container4 thq-grid-2">
          <div class="stats2-container5">
            <h2 class="thq-heading-2">
              <slot name="stat1">
                <!--Default content for stat1-->
                <div class="stats2-fragment11">
                  <span class="stats2-text22">
                    Number of UNESCO-recognized intangible cultural heritage
                    elements in China
                  </span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat1Description">
                <!--Default content for stat1Description-->
                <div class="stats2-fragment20">
                  <span class="stats2-text31">
                    Significance of intangible cultural heritage in China
                  </span>
                </div>
              </slot>
            </span>
          </div>
          <div class="stats2-container6">
            <h2 class="thq-heading-2">
              <slot name="stat2">
                <!--Default content for stat2-->
                <div class="stats2-fragment10">
                  <span class="stats2-text21">128</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat2Description">
                <!--Default content for stat2Description-->
                <div class="stats2-fragment16">
                  <span class="stats2-text27">
                    Total number of intangible cultural heritage elements in China
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div class="stats2-container7 thq-grid-2">
          <div class="stats2-container8">
            <h2 class="thq-heading-2">
              <slot name="stat3">
                <!--Default content for stat3-->
                <div class="stats2-fragment13">
                  <span class="stats2-text24">
                    Number of traditional Chinese opera genres
                  </span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat3Description">
                <!--Default content for stat3Description-->
                <div class="stats2-fragment14">
                  <span class="stats2-text25">
                    Diversity of traditional Chinese opera genres
                  </span>
                </div>
              </slot>
            </span>
          </div>
          <div class="stats2-container9">
            <h2 class="thq-heading-2">
              <slot name="stat4">
                <!--Default content for stat4-->
                <div class="stats2-fragment15">
                  <span class="stats2-text26">
                    Number of calligraphy styles in China
                  </span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat4Description">
                <!--Default content for stat4Description-->
                <div class="stats2-fragment18">
                  <span class="stats2-text29">
                    Variety of calligraphy styles in Chinese cultural heritage
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
  name: 'Stats2',
  props: {
    image1Alt: {
      type: String,
      default: 'Traditional Chinese crafts',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1738322212738-40d684b36beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.stats2-container1 {
  width: 100%;
  flex-direction: column;
}
 
.stats2-max-width {
  gap: var(--dl-layout-space-fourunits);
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
}
 
.stats2-container2 {
  max-width: 50%;
}
 
.stats2-container3 {
  align-self: center;
  align-items: flex-start;
  margin-left: auto;
}
 
.stats2-container4 {
  width: 100%;
}
 
.stats2-container5 {
  width: 100%;
  height: 100%;
  align-items: flex-start;
}
 
.stats2-container6 {
  width: 100%;
  height: 100%;
  align-items: flex-start;
}
 
.stats2-container7 {
  width: 100%;
}
 
.stats2-container8 {
  width: 100%;
  height: 100%;
  align-items: flex-start;
}
 
.stats2-container9 {
  width: 100%;
  height: 100%;
  align-items: flex-start;
}
 
.stats2-fragment10 {
  display: contents;
}
 
.stats2-text21 {
  display: inline-block;
}
 
.stats2-fragment11 {
  display: contents;
}
 
.stats2-text22 {
  display: inline-block;
}
 
.stats2-fragment12 {
  display: contents;
}
 
.stats2-text23 {
  display: inline-block;
}
 
.stats2-fragment13 {
  display: contents;
}
 
.stats2-text24 {
  display: inline-block;
}
 
.stats2-fragment14 {
  display: contents;
}
 
.stats2-text25 {
  display: inline-block;
}
 
.stats2-fragment15 {
  display: contents;
}
 
.stats2-text26 {
  display: inline-block;
}
 
.stats2-fragment16 {
  display: contents;
}
 
.stats2-text27 {
  display: inline-block;
}
 
.stats2-fragment17 {
  display: contents;
}
 
.stats2-text28 {
  display: inline-block;
}
 
.stats2-fragment18 {
  display: contents;
}
 
.stats2-text29 {
  display: inline-block;
}
 
.stats2-fragment19 {
  display: contents;
}
 
.stats2-text30 {
  display: inline-block;
}
 
.stats2-fragment20 {
  display: contents;
}
 
.stats2-text31 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .stats2-max-width {
    gap: var(--dl-layout-space-twounits);
    align-items: flex-start;
    flex-direction: column;
  }
  .stats2-container2 {
    width: 100%;
    max-width: 100%;
  }
  .stats2-container3 {
    align-self: flex-start;
    margin-left: 0px;
  }
}
 
@media(max-width: 479px) {
  .stats2-image {
    width: 100%;
  }
}
</style>
