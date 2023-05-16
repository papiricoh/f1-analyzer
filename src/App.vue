<script setup>
import CarPage from './components/CarPage.vue';
import StandingsPage from './components/StandingsPage.vue';
</script>

<script>
import { ipcRenderer } from 'electron';

export default {
  data() {
    return {
      page: 'car',
      motionData: null,
      car_index: 0,
    };
  },
  created() {
    ipcRenderer.on('motion-data', (event, data) => {
      this.motionData = data.m_carTelemetryData;
      this.car_index = data.m_header.m_playerCarIndex;
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
      <div class="header_button" @click="page = 'config'">CONFIG</div>
    </header>
    <div class="page">
      <CarPage :car_index="car_index" :telemetry="motionData" v-if="page == 'car'"></CarPage>
      <StandingsPage v-if="page == 'standings'"></StandingsPage>
    </div>
  </div>
</template>
