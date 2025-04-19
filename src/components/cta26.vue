<template>
  <div class="thq-section-padding">
    <div class="thq-section-max-width">
      <div class="cta26-accent2-bg">
        <div class="cta26-accent1-bg">
          <div class="cta26-container2">
            <div class="cta26-content">
              <span class="thq-heading-2">
                <slot name="heading1">
                  <!--Default content for heading1-->
                  <div class="cta26-fragment2">
                    <span class="cta26-text5">走进中国非物质文化遗产</span>
                  </div>
                </slot>
              </span>
              <p class="cta26-text2 thq-body-large">
                <slot name="content1">
                  <!--Default content for content1-->
                  <div class="cta26-fragment1">
                    <span class="cta26-text4">
                      走进中国非物质文化遗产，探寻千年技艺，感受文化之韵，传承匠心之美，让传统在现代焕发新的光彩
                    </span>
                  </div>
                </slot>
              </p>
            </div>
            <div class="cta26-actions">
              <router-link to="/encyclopedia" class="cta26-navlink thq-button-filled">
                <span>
                  <slot name="action1">
                    <!--Default content for action1-->
                    <div class="cta26-fragment3">
                      <span class="cta26-text6">了解更多</span>
                    </div>
                  </slot>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA26',
  props: {},
}
</script>

<style scoped>
.cta26-accent2-bg {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
  align-self: stretch;
  transition: 0.3s;
  align-items: center;
  border-radius: var(--dl-layout-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: var(--dl-color-theme-accent2);
}
 
.cta26-accent2-bg:hover {
  transform: scale3d(1.1,1.1,1.1);
}
 
.cta26-accent1-bg {
  width: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
  align-items: center;
  border-radius: var(--dl-layout-radius-cardradius);
  justify-content: space-between;
  transform-style: preserve-3d;
  background-color: var(--dl-color-theme-accent1);
}
 
.cta26-container2 {
  gap: var(--dl-layout-space-threeunits);
  width: 100%;
  display: flex;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-layout-space-sixunits);
  padding-left: var(--dl-layout-space-fourunits);
  border-radius: var(--dl-layout-radius-cardradius);
  padding-right: var(--dl-layout-space-fourunits);
  padding-bottom: var(--dl-layout-space-sixunits);
}
 
.cta26-container2:hover {
  color: var(--dl-color-theme-neutral-light);
  background-color: var(--dl-color-theme-neutral-dark);
}
 
.cta26-content {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
 
.cta26-text2 {
  color: #8a3705;
}
 
.cta26-actions {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
 
.cta26-navlink {
  text-decoration: none;
}
 
.cta26-fragment1 {
  display: contents;
}
 
.cta26-text4 {
  display: inline-block;
}
 
.cta26-fragment2 {
  display: contents;
}
 
.cta26-text5 {
  color: #b13e06;
  display: inline-block;
}
 
.cta26-fragment3 {
  display: contents;
}
 
.cta26-text6 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .cta26-container2 {
    gap: var(--dl-layout-space-oneandhalfunits);
    flex-direction: column;
    justify-content: flex-start;
  }
}
 
@media(max-width: 479px) {
  .cta26-actions {
    flex-wrap: wrap;
    align-self: stretch;
    justify-content: center;
  }
  .cta26-navlink {
    flex: 1;
  }
}
</style>
