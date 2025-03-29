<template>
    <div>
      <div class="controls">
        <select v-model="selectedCategory" @change="filterMarkers">
          <option value="">全部类别</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
      <div id="map" style="height: 500px;"></div>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        map: null,
        markers: [],
        heritageData: [],
        selectedCategory: "",
        categories: []
      };
    },
    mounted() {
      this.initMap();
      this.loadHeritageData();
    },
    methods: {
      initMap() {
        this.map = L.map('map').setView([35.8617, 104.1954], 5); // 默认中国中心点
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(this.map);
      }
    }
  };
  </script>
  
  <style>
  .controls {
    margin-bottom: 10px;
  }
  </style>
  