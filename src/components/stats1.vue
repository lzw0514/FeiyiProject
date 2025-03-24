<template>
  <div class="thq-section-padding">
    <div class="stats1-max-width thq-section-max-width">
      <div class="stats1-container2 thq-flex-column">
        <span class="thq-body-small">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="stats1-fragment13">
              <span class="stats1-text24">Customer Feedback</span>
            </div>
          </slot>
        </span>
        <h2 class="thq-heading-2">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="stats1-fragment10">
              <span class="stats1-text21">
                Customer results presented in a fashion way
              </span>
            </div>
          </slot>
        </h2>
        <p class="thq-body-large">
          <slot name="content2">
            <!--Default content for content2-->
            <div class="stats1-fragment15">
              <span class="stats1-text26">
                Business improvements emphasized with numbers to increase
                creadibility
              </span>
            </div>
          </slot>
        </p>
        <div class="stats1-container3">
          <div class="stats1-container4">
            <h2 class="thq-heading-2">
              <slot name="stat1">
                <!--Default content for stat1-->
                <div class="stats1-fragment11">
                  <span class="stats1-text22">80%</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat1Description">
                <!--Default content for stat1Description-->
                <div class="stats1-fragment14">
                  <span class="stats1-text25">consectetur adipiscing elit,</span>
                </div>
              </slot>
            </span>
          </div>
          <div class="stats1-container5">
            <h2 class="thq-heading-2">
              <slot name="stat2">
                <!--Default content for stat2-->
                <div class="stats1-fragment20">
                  <span class="stats1-text31">90%</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat2Description">
                <!--Default content for stat2Description-->
                <div class="stats1-fragment19">
                  <span class="stats1-text30">consectetur adipiscing.</span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div class="stats1-container6">
          <div class="stats1-container7">
            <h2 class="thq-heading-2">
              <slot name="stat3">
                <!--Default content for stat3-->
                <div class="stats1-fragment16">
                  <span class="stats1-text27">95%</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat3Description">
                <!--Default content for stat3Description-->
                <div class="stats1-fragment17">
                  <span class="stats1-text28">consectetur adipiscing elit,</span>
                </div>
              </slot>
            </span>
          </div>
          <div class="stats1-container8">
            <h2 class="thq-heading-2">
              <slot name="stat4">
                <!--Default content for stat4-->
                <div class="stats1-fragment12">
                  <span class="stats1-text23">100%</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat4Description">
                <!--Default content for stat4Description-->
                <div class="stats1-fragment18">
                  <span class="stats1-text29">consectetur adipiscing.</span>
                </div>
              </slot>
            </span>
          </div>
        </div>
      </div>
      <div class="stats1-container9">
        <img
          :alt="image1Alt"
          :src="image1Src"
          class="thq-img-ratio-1-1 stats1-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats1',
  props: {
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1642595990436-60e8cddfb2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjgwMzM3NHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image1Alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.stats1-max-width {
  gap: var(--dl-layout-space-fourunits);
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
 
.stats1-container2 {
  align-self: center;
  align-items: flex-start;
}
 
.stats1-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
 
.stats1-container4 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.stats1-container5 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.stats1-container6 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
 
.stats1-container7 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.stats1-container8 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.stats1-container9 {
  max-width: 50%;
}
 
.stats1-fragment10 {
  display: contents;
}
 
.stats1-text21 {
  display: inline-block;
}
 
.stats1-fragment11 {
  display: contents;
}
 
.stats1-text22 {
  display: inline-block;
}
 
.stats1-fragment12 {
  display: contents;
}
 
.stats1-text23 {
  display: inline-block;
}
 
.stats1-fragment13 {
  display: contents;
}
 
.stats1-text24 {
  display: inline-block;
}
 
.stats1-fragment14 {
  display: contents;
}
 
.stats1-text25 {
  display: inline-block;
}
 
.stats1-fragment15 {
  display: contents;
}
 
.stats1-text26 {
  display: inline-block;
}
 
.stats1-fragment16 {
  display: contents;
}
 
.stats1-text27 {
  display: inline-block;
}
 
.stats1-fragment17 {
  display: contents;
}
 
.stats1-text28 {
  display: inline-block;
}
 
.stats1-fragment18 {
  display: contents;
}
 
.stats1-text29 {
  display: inline-block;
}
 
.stats1-fragment19 {
  display: contents;
}
 
.stats1-text30 {
  display: inline-block;
}
 
.stats1-fragment20 {
  display: contents;
}
 
.stats1-text31 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .stats1-max-width {
    gap: var(--dl-layout-space-twounits);
    flex-direction: column;
  }
  .stats1-container9 {
    width: 100%;
    max-width: 100%;
  }
}
 
@media(max-width: 479px) {
  .stats1-image {
    width: 100%;
  }
}
</style>
