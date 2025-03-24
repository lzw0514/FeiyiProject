<template>
  <div
    class="contact-form3-contact9 thq-section-padding"
    v-bind:class="rootClassName"
  >
    <div class="contact-form3-max-width thq-flex-row thq-section-max-width"></div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm3',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.contact-form3-contact9 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
 
.contact-form3-max-width {
  border: 2px dashed rgba(120, 120, 120, 0.4);
}
 
@media(max-width: 991px) {
  .contact-form3-max-width {
    flex-direction: column;
  }
}
</style>
