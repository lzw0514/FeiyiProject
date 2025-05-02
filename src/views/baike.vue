<template>
  <div class="page-container">
    <app-navbar8 >
    </app-navbar8>
    <ArticleManage></ArticleManage>
    <app-footer4>
    </app-footer4>
  </div>
</template>

<script>
import AppNavbar8 from '../components/navbar8'
import AppFooter4 from '../components/footer4'
import ArticleManage from '../components/ArticleManage.vue';

export default {
  name: 'Page',
  props: {},
  components: {
    AppNavbar8,
    ArticleManage,
    AppFooter4,
  },
  metaInfo: {
    title: 'Page - Spry Adorable Lyrebird',
    meta: [
      {
        property: 'og:title',
        content: 'Page - Spry Adorable Lyrebird',
      },
    ],
  },
}
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
 
</style>