<template>
  <div class="hero8-header26 thq-section-padding">
    <div class="hero8-max-width thq-section-max-width thq-flex-column">
      <div class="hero8-column">
        <div class="hero8-content">
          <h1 class="hero8-text1 thq-heading-1">
            <slot name="heading1">
              <!--Default content for heading1-->
              <div class="hero8-fragment2">
                <span class="hero8-text6">
                  Preserving China&apos;s Cultural Legacy
                </span>
              </div>
            </slot>
          </h1>
          <p class="hero8-text2 thq-body-large">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="hero8-fragment1">
                <span class="hero8-text5">
                  Explore the rich tapestry of China&apos;s intangible cultural
                  heritage
                </span>
              </div>
            </slot>
          </p>
          <div class="hero8-actions">
            <button class="thq-button-filled hero8-button1">
              <span class="thq-body-small">
                <slot name="action1">
                  <!--Default content for action1-->
                  <div class="hero8-fragment4">
                    <span class="hero8-text8">Discover More</span>
                  </div>
                </slot>
              </span>
            </button>
            <button class="thq-button-outline hero8-button2">
              <span class="thq-body-small">
                <slot name="action2">
                  <!--Default content for action2-->
                  <div class="hero8-fragment3">
                    <span class="hero8-text7">Learn More</span>
                  </div>
                </slot>
              </span>
            </button>
          </div>
        </div>
      </div>
      <img :alt="image1Alt" :src="image1Src" class="thq-img-ratio-16-9" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero8',
  props: {
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1622701893201-9bc9eb616690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjY0OTExNHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image1Alt: {
      type: String,
      default: 'Traditional Chinese crafts',
    },
  },
}
</script>

<style scoped>
.hero8-header26 {
  gap: var(--dl-layout-space-twounits);
}
 
.hero8-max-width {
  align-self: center;
}
 
.hero8-column {
  gap: var(--dl-layout-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.hero8-content {
  gap: var(--dl-layout-space-oneandhalfunits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.hero8-text1 {
  text-align: center;
}
 
.hero8-text2 {
  text-align: center;
}
 
.hero8-actions {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: flex-start;
}
 
.hero8-fragment1 {
  display: contents;
}
 
.hero8-text5 {
  display: inline-block;
}
 
.hero8-fragment2 {
  display: contents;
}
 
.hero8-text6 {
  display: inline-block;
}
 
.hero8-fragment3 {
  display: contents;
}
 
.hero8-text7 {
  display: inline-block;
}
 
.hero8-fragment4 {
  display: contents;
}
 
.hero8-text8 {
  display: inline-block;
}
 
@media(max-width: 479px) {
  .hero8-actions {
    width: 100%;
    flex-direction: column;
  }
  .hero8-button1 {
    width: 100%;
  }
  .hero8-button2 {
    width: 100%;
  }
}
</style>
