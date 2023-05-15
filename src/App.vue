<script setup lang="ts">
import CarPage from './components/CarPage.vue'
</script>

<script lang="ts">
import { ipcRenderer } from 'electron';

export default {
  data() {
    return {
      page: 'car',
      motionData: null
    };
  },
  mounted() {
    ipcRenderer.on('motion-data', (event, data) => {
      this.motionData = data;
    });
  },
  beforeDestroy() {
    ipcRenderer.removeAllListeners('motion-data');
  }
};
</script>


<template>
  <div class="main">
    <header>
      <div class="header_button" @click="page = 'car'">CAR</div>
      <div class="header_button" @click="page = 'standings'">STANDINGS</div>
      <img height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png" alt="">
      <div class="header_button" @click="page = 'strategy'">STRATEGY</div>
      <div class="header_button" @click="page = 'config'">CONFIGURATION</div>
    </header>
    <div class="page">
      <CarPage v-if="page == 'car'"></CarPage>
    </div>
  </div>
</template>
