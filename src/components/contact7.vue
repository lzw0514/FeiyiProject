<template>
  <div class="contact7-container1 thq-section-padding">
    <div class="contact7-max-width thq-section-max-width">
      <div class="contact7-content1 thq-flex-row">
        <div class="contact7-content2">
          <h2 class="thq-heading-2">
            <slot name="heading1">
              <!--Default content for heading1-->
              <div class="contact7-fragment3">
                <span class="contact7-text18">Locations</span>
              </div>
            </slot>
          </h2>
          <p class="thq-body-large">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="contact7-fragment4">
                <span class="contact7-text19">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </span>
              </div>
            </slot>
          </p>
        </div>
      </div>
      <div class="contact7-content3 thq-flex-row">
        <div class="contact7-container2">
          <img
            :alt="location1ImgAlt"
            :src="location1ImgSrc"
            class="contact7-image1 thq-img-ratio-16-9"
          />
          <h3 class="contact7-text12 thq-heading-3">
            <slot name="location1">
              <!--Default content for location1-->
              <div class="contact7-fragment1">
                <span class="contact7-text16">Bucharest</span>
              </div>
            </slot>
          </h3>
          <p class="thq-body-large">
            <slot name="location1Description">
              <!--Default content for location1Description-->
              <div class="contact7-fragment2">
                <span class="contact7-text17">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </span>
              </div>
            </slot>
          </p>
          <div class="contact7-container3">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="thq-button-flat thq-body-small"
            >
              Get directions
            </a>
          </div>
        </div>
        <div class="contact7-container4">
          <img
            :alt="location2ImgAlt"
            :src="location2ImgSrc"
            class="contact7-image2 thq-img-ratio-16-9"
          />
          <h3 class="contact7-text14 thq-heading-3">
            <slot name="location2">
              <!--Default content for location2-->
              <div class="contact7-fragment6">
                <span class="contact7-text21">Cluj - Napoca</span>
              </div>
            </slot>
          </h3>
          <p class="thq-body-large">
            <slot name="location2Description">
              <!--Default content for location2Description-->
              <div class="contact7-fragment5">
                <span class="contact7-text20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </span>
              </div>
            </slot>
          </p>
          <div class="contact7-container5">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="thq-button-flat thq-body-small"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact7',
  props: {
    location2ImgAlt: {
      type: String,
      default: 'image2Alt',
    },
    location2ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1618826524225-439b385bb1c3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNsdWp8ZW58MHx8fHwxNzIxMTQ0NTI0fDA&ixlib=rb-4.0.3&w=1400',
    },
    location1ImgAlt: {
      type: String,
      default: 'image1Alt',
    },
    location1ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1574616979112-f9f52d3747f8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGJ1Y2hhcmVzdHxlbnwwfHx8fDE3MjExNDQ1MTR8MA&ixlib=rb-4.0.3&w=1400',
    },
  },
}
</script>

<style scoped>
.contact7-container1 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact7-max-width {
  align-self: center;
}
 
.contact7-content1 {
  width: 100%;
  margin-bottom: var(--dl-layout-space-threeunits);
  justify-content: center;
}
 
.contact7-content2 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact7-content3 {
  width: 100%;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
 
.contact7-container2 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.contact7-image1 {
  object-fit: cover;
}
 
.contact7-text12 {
  text-align: center;
}
 
.contact7-container3 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
 
.contact7-container4 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.contact7-image2 {
  object-fit: cover;
}
 
.contact7-text14 {
  text-align: center;
}
 
.contact7-container5 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
 
.contact7-fragment1 {
  display: contents;
}
 
.contact7-text16 {
  display: inline-block;
}
 
.contact7-fragment2 {
  display: contents;
}
 
.contact7-text17 {
  display: inline-block;
}
 
.contact7-fragment3 {
  display: contents;
}
 
.contact7-text18 {
  display: inline-block;
}
 
.contact7-fragment4 {
  display: contents;
}
 
.contact7-text19 {
  display: inline-block;
}
 
.contact7-fragment5 {
  display: contents;
}
 
.contact7-text20 {
  display: inline-block;
}
 
.contact7-fragment6 {
  display: contents;
}
 
.contact7-text21 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .contact7-content3 {
    align-items: center;
    flex-direction: column;
  }
}
 
@media(max-width: 767px) {
  .contact7-content1 {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
  .contact7-image1 {
    width: 100%;
  }
  .contact7-image2 {
    width: 100%;
  }
}
</style>
