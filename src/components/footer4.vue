<template>
  <footer
    class="footer4-footer7 thq-section-padding"
    v-bind:class="rootClassName"
  >
    <div class="footer4-max-width thq-section-max-width">
      <div class="footer4-content">
        <div class="footer4-logo">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <path
              d="M19.455 26.444C17.636 28.222 15.817 30 12.182 30C8.545 30 4 27.333 4 22s4.545-8 8.182-8c5.454 0 8.182 3.556 11.818 8s6.364 8 11.818 8C39.455 30 44 27.333 44 22s-4.545-8-8.182-8c-3.636 0-6.363 2.667-7.272 3.556"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div class="footer4-links">
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            class="thq-body-small"
          >
   
          </a>
        </div>
      </div>
      <div class="footer4-credits">
        <div class="thq-divider-horizontal"></div>
        <div class="footer4-row">
          <div class="footer4-container">
            <span class="thq-body-small">非遗网</span>
          </div>
        
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer4',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.footer4-footer7 {
  width: 100%;
  height: 387px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
 
.footer4-max-width {
  gap: var(--dl-layout-space-threeunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.footer4-content {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.footer4-logo {
  gap: 24px;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  flex-direction: column;
}
 
.footer4-links {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-items: flex-start;
}
 
.footer4-credits {
  gap: var(--dl-layout-space-twounits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.footer4-row {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  justify-content: space-between;
}
 
.footer4-container {
  display: flex;
  align-items: flex-start;
}
 
.footer4-footer-links {
  gap: 24px;
  display: flex;
  align-items: flex-start;
}
 
.footer4-text11 {
  fill: var(--dl-color-theme-neutral-dark);
  color: var(--dl-color-theme-neutral-dark);
}
 
.footer4-fragment1 {
  display: contents;
}
 
.footer4-text14 {
  display: inline-block;
}
 
.footer4-fragment2 {
  display: contents;
}
 
.footer4-text15 {
  display: inline-block;
}
 
.footer4-fragment3 {
  display: contents;
}
 
.footer4-text16 {
  display: inline-block;
}
 
.footer4-fragment4 {
  display: contents;
}
 
.footer4-text17 {
  display: inline-block;
}
 
.footer4-fragment5 {
  display: contents;
}
 
.footer4-text18 {
  display: inline-block;
}
 
.footer4-fragment6 {
  display: contents;
}
 
.footer4-text19 {
  display: inline-block;
}
 
.footer4root-class-name {
  flex: 1;
}
 
@media(max-width: 767px) {
  .footer4-row {
    gap: var(--dl-layout-space-oneandhalfunits);
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
 
@media(max-width: 479px) {
  .footer4-max-width {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
  .footer4-links {
    flex-direction: column;
  }
  .footer4-footer-links {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
