<template>
  <div class="page-container">
    <app-navbar8>
    </app-navbar8>
    <Ranking></Ranking>

  </div>
</template>

<script>
import AppNavbar8 from '../components/navbar8'
import AppFooter4 from '../components/footer4'
import Ranking from '../components/ranking.vue'


export default {
  name: 'Rank',
  props: {},
  components: {
    AppNavbar8,
    Ranking,
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