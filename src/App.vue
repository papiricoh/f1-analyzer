<script setup>
import CarPage from './components/CarPage.vue';
import StandingsPage from './components/StandingsPage.vue';
import Notification from './components/Notification.vue';
</script>

<script>
import { ipcRenderer } from 'electron';

export default {
  data() {
    return {
      page: 'standings',
      motionData: null,
      participantsData: null,
      lapData: null,
      car_index: 0,
      carStatus: null,
      lapPlayerIndex: 0,
      num_cars: 0,
      
      notification_on: false,
      notification_data: { type: 'yellow_flag', text: 'Yellow flag in sector 3: Versapen\'s Crash into turn 14'},
    };
  },
  created() {
    ipcRenderer.on('motion-data', (event, data) => {
      this.motionData = data.m_carTelemetryData;
      this.car_index = data.m_header.m_playerCarIndex;
    });
    ipcRenderer.on('participants-data', (event, data) => {
      this.participantsData = data.m_participants;
      this.num_cars = data.m_numActiveCars;
    });
    ipcRenderer.on('lapData-data', (event, data) => {
      this.lapData = data.m_lapData;
      this.lapPlayerIndex = data.m_header.m_playerCarIndex;
    });
    ipcRenderer.on('carStatus-data', (event, data) => {
      this.carStatus = data;
    });
  },
  beforeDestroy() {
    ipcRenderer.removeAllListeners('motion-data');
    ipcRenderer.removeAllListeners('participants-data');
    ipcRenderer.removeAllListeners('lapData-data');
  },
  methods: {
    closeNotification() {
      this.notification_on = false;
    }
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
      <StandingsPage :num_cars="num_cars" :carStatus="carStatus" :lapData="lapData" :car_index="lapPlayerIndex" :participantsData="participantsData" v-if="page == 'standings'"></StandingsPage>
    </div>
    <Notification @closeNotification="closeNotification" :data="notification_data" class="notification" v-if="notification_on"></Notification>
  </div>
</template>
