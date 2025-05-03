<template>
  <footer
      class="footer4-footer7 thq-section-padding"
      v-bind:class="rootClassName"
  >
    <div class="footer4-max-width thq-section-max-width">
      <div class="footer4-content">
        <div class="footer4-logo">
          <!-- 你的logo SVG -->
        </div>
      </div>
      <div class="footer4-credits">
        <div class="thq-divider-horizontal"></div>
        <div class="footer4-links-container">
          <span class="footer4-text">非遗网</span>
          <RouterLink to="/about" class="footer4-link">关于我们</RouterLink>
          <RouterLink to="/contact" class="footer4-link">联系我们</RouterLink>
          <RouterLink to="/privacy" class="footer4-link">隐私与政策</RouterLink>
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
  height: auto;
  padding: 20px 0;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}

.footer4-max-width {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.footer4-content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.footer4-credits {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.footer4-links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px; /* 调整这个值来控制间距 */
  flex-wrap: wrap;
  padding: 10px 0;
}

.footer4-text, .footer4-link {
  color: var(--dl-color-theme-neutral-dark);
  text-decoration: none;
  font-size: 14px;
  white-space: nowrap;
}

.footer4-link:hover {
  text-decoration: underline;
}

.thq-divider-horizontal {
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 10px 0;
}

@media (max-width: 767px) {
  .footer4-links-container {
    gap: 16px;
    flex-direction: column;
  }
}
</style>