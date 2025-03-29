<template>
    <div>
      <h1>非遗地图探索</h1>
      <LeafletMap />
    </div>
  </template>
  
  <script>
  import LeafletMap from '../components/LeafletMap.vue';
  
  export default {
    name: 'MapPage',
    components: {
      LeafletMap
    }
  };
  </script>
  