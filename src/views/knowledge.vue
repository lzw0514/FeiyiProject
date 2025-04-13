<template>
    <div class="page-container">
      <app-navbar8 link1Url="/" link2Url="/1">
      </app-navbar8>
      <knowledgeQuiz>
      </knowledgeQuiz>
      <app-footer4>
      </app-footer4>
    </div>
</template>
  
<script>
import AppNavbar8 from '../components/navbar8'
import AppFooter4 from '../components/footer4'
import knowledgeQuiz from '../components/question.vue'
  
export default {
    name: 'Page',
    props: {},
    components: {
      AppNavbar8,
      knowledgeQuiz,
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