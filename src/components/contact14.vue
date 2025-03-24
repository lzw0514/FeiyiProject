<template>
  <div class="contact14-contact20 thq-section-padding">
    <div class="contact14-max-width thq-section-max-width">
      <div class="contact14-content1">
        <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
          <path
            d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
          ></path>
        </svg>
        <div class="contact14-contact-info1">
          <div class="contact14-content2">
            <h3 class="contact14-text10 thq-heading-3">
              <slot name="heading1">
                <!--Default content for heading1-->
                <div class="contact14-fragment11">
                  <span class="contact14-text18">Email</span>
                </div>
              </slot>
            </h3>
            <p class="contact14-text11 thq-body-large">
              <slot name="content1">
                <!--Default content for content1-->
                <div class="contact14-fragment13">
                  <span class="contact14-text20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </div>
              </slot>
            </p>
          </div>
          <span class="contact14-email1 thq-body-small">
            <slot name="email1">
              <!--Default content for email1-->
              <div class="contact14-fragment16">
                <span class="contact14-text23">hello@teleporthq.io</span>
              </div>
            </slot>
          </span>
        </div>
      </div>
      <div class="contact14-content3">
        <svg viewBox="0 0 1024 1024" class="contact14-icon3">
          <path
            d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
          ></path>
        </svg>
        <div class="contact14-contact-info2">
          <div class="contact14-content5">
            <h3 class="contact14-text12 thq-heading-3">
              <slot name="heading2">
                <!--Default content for heading2-->
                <div class="contact14-fragment10">
                  <span class="contact14-text17">Live Chat</span>
                </div>
              </slot>
            </h3>
            <p class="contact14-text13 thq-body-large">
              <slot name="content2">
                <!--Default content for content2-->
                <div class="contact14-fragment14">
                  <span class="contact14-text21">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </div>
              </slot>
            </p>
          </div>
          <span class="contact14-email2 thq-body-small">
            <slot name="link1">
              <!--Default content for link1-->
              <div class="contact14-fragment17">
                <span class="contact14-text24">Start new chat</span>
              </div>
            </slot>
          </span>
        </div>
      </div>
      <div class="contact14-content6">
        <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
          <path
            d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
          ></path>
        </svg>
        <div class="contact14-contact-info3">
          <div class="contact14-content7">
            <h3 class="contact14-text14 thq-heading-3">
              <slot name="heading3">
                <!--Default content for heading3-->
                <div class="contact14-fragment18">
                  <span class="contact14-text25">Phone</span>
                </div>
              </slot>
            </h3>
            <p class="contact14-text15 thq-body-large">
              <slot name="content3">
                <!--Default content for content3-->
                <div class="contact14-fragment15">
                  <span class="contact14-text22">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </div>
              </slot>
            </p>
          </div>
          <span class="contact14-phone thq-body-small">
            <slot name="phone1">
              <!--Default content for phone1-->
              <div class="contact14-fragment20">
                <span class="contact14-text27">+1 (555) 000-0000</span>
              </div>
            </slot>
          </span>
        </div>
      </div>
      <div class="contact14-content8">
        <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
          <path
            d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
          ></path>
        </svg>
        <div class="contact14-contact-info4">
          <div class="contact14-content9">
            <h3 class="contact14-text16 thq-heading-3">
              <slot name="heading4">
                <!--Default content for heading4-->
                <div class="contact14-fragment12">
                  <span class="contact14-text19">Office</span>
                </div>
              </slot>
            </h3>
            <p class="contact14-content4 thq-body-large">
              <slot name="content4">
                <!--Default content for content4-->
                <div class="contact14-fragment19">
                  <span class="contact14-text26">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </div>
              </slot>
            </p>
          </div>
          <span class="contact14-address thq-body-small">
            <slot name="address1">
              <!--Default content for address1-->
              <div class="contact14-fragment21">
                <span class="contact14-text28">456 Test Ave, Bucharest</span>
              </div>
            </slot>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact14',
  props: {},
}
</script>

<style scoped>
.contact14-contact20 {
  gap: var(--dl-layout-space-threeunits);
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
}
 
.contact14-max-width {
  gap: var(--dl-layout-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.contact14-content1 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.contact14-contact-info1 {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact14-content2 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact14-text10 {
  align-self: stretch;
  text-align: center;
}
 
.contact14-text11 {
  text-align: center;
}
 
.contact14-email1 {
  text-align: center;
}
 
.contact14-content3 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.contact14-icon3 {
  width: var(--dl-layout-size-small);
  height: var(--dl-layout-size-small);
}
 
.contact14-contact-info2 {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact14-content5 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact14-text12 {
  align-self: stretch;
  text-align: center;
}
 
.contact14-text13 {
  text-align: center;
}
 
.contact14-email2 {
  text-align: center;
}
 
.contact14-content6 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.contact14-contact-info3 {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact14-content7 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact14-text14 {
  align-self: stretch;
  text-align: center;
}
 
.contact14-text15 {
  text-align: center;
}
 
.contact14-phone {
  text-align: center;
}
 
.contact14-content8 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.contact14-contact-info4 {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact14-content9 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact14-text16 {
  align-self: stretch;
  text-align: center;
}
 
.contact14-content4 {
  text-align: center;
}
 
.contact14-address {
  text-align: center;
}
 
.contact14-fragment10 {
  display: contents;
}
 
.contact14-text17 {
  display: inline-block;
}
 
.contact14-fragment11 {
  display: contents;
}
 
.contact14-text18 {
  display: inline-block;
}
 
.contact14-fragment12 {
  display: contents;
}
 
.contact14-text19 {
  display: inline-block;
}
 
.contact14-fragment13 {
  display: contents;
}
 
.contact14-text20 {
  display: inline-block;
}
 
.contact14-fragment14 {
  display: contents;
}
 
.contact14-text21 {
  display: inline-block;
}
 
.contact14-fragment15 {
  display: contents;
}
 
.contact14-text22 {
  display: inline-block;
}
 
.contact14-fragment16 {
  display: contents;
}
 
.contact14-text23 {
  display: inline-block;
}
 
.contact14-fragment17 {
  display: contents;
}
 
.contact14-text24 {
  display: inline-block;
}
 
.contact14-fragment18 {
  display: contents;
}
 
.contact14-text25 {
  display: inline-block;
}
 
.contact14-fragment19 {
  display: contents;
}
 
.contact14-text26 {
  display: inline-block;
}
 
.contact14-fragment20 {
  display: contents;
}
 
.contact14-text27 {
  display: inline-block;
}
 
.contact14-fragment21 {
  display: contents;
}
 
.contact14-text28 {
  display: inline-block;
}
 
@media(max-width: 767px) {
  .contact14-max-width {
    flex-direction: column;
  }
}
</style>
