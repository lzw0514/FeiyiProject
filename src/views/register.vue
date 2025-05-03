<template>
    <div class="page1-container">
      <app-navbar8 >

      </app-navbar8>
      <SignUp style="margin-bottom: 60px;">
      </SignUp>
      <app-footer4>
      </app-footer4>
    </div>
  </template>
  
  <script>
  import AppNavbar8 from '../components/navbar8'
  import SignIn4 from '../components/sign-in4'
  import AppFooter4 from '../components/footer4'

import SignUp from '../components/sign-up.vue';

  
  export default {
    name: 'Register',
    props: {},
    components: {
      AppNavbar8,
      SignUp,
      AppFooter4,
    },
    metaInfo: {
      title: 'Page1 - Spry Adorable Lyrebird',
      meta: [
        {
          property: 'og:title',
          content: 'Page1 - Spry Adorable Lyrebird',
        },
      ],
    },
  }
  </script>
  
  <style scoped>
  .page1-container {
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
  }
   

  </style>
  