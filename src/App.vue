<script setup>
import CarPage from './components/CarPage.vue';
import StandingsPage from './components/StandingsPage.vue';
import Notification from './components/Notification.vue';
import ConfigPage from './components/ConfigPage.vue';
import StrategyPage from './components/StrategyPage.vue';
import FinalStandings from './components/FinalStandings.vue';
</script>

<script>
import { ipcRenderer } from 'electron';

export default {
  data() {
    return {
      page: 'standings',
      telemetryData: null,
      participantsData: null,
      lapData: null,
      car_index: 0,
      carStatus: null,
      lapPlayerIndex: 0,
      player_motionData: null,
      num_cars: 0,
      car_damage: null,
      last_event: { code: null, details: null },
      config: {
        my_team: { custom_team_name: "Custom Team", allowed: false },
        mph: false,
      },
      
      final_standings_on: true,

      notification_on: false,
      notification_data: { type: 'yellow_flag', text: 'Yellow flag in sector 3: Versapen\'s Crash into turn 14'},
    };
  },
  created() {
    ipcRenderer.on('telemetry-data', (event, data) => {
      this.telemetryData = data.m_carTelemetryData;
      this.car_index = data.m_header.m_playerCarIndex;
    });
    ipcRenderer.on('motion-data', (event, data) => {
      this.player_motionData = data.m_carMotionData[this.car_index];
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
    ipcRenderer.on('carDamage-data', (event, data) => {
      this.car_damage = data.m_carDamageData;
    });
    ipcRenderer.on('event-data', (event, data) => {
      this.last_event = { code: data.m_eventStringCode, details: data.m_eventDetails };
      this.inicialiceNotification(this.last_event);
    });
  },
  beforeDestroy() {
    ipcRenderer.removeAllListeners('motion-data');
    ipcRenderer.removeAllListeners('participants-data');
    ipcRenderer.removeAllListeners('lapData-data');
  },
  methods: {
    inicialiceNotification(event) {
      if(event.code == 'CHQF') {
        this.notification_data = { type: 'checked_flag', text: 'End of the race'};
        this.showNotificationWithTimer();
      }else if(event.code == 'DRSE') {
        this.notification_data = { type: 'drs_on', text: 'DRS Active'};
        this.showNotificationWithTimer();
      }else if(event.code == 'DRSD') {
        this.notification_data = { type: 'drs_off', text: 'DRS Disabled'};
        this.showNotificationWithTimer();
      }else if(event.code == 'TMPT') {
        this.notification_data = { type: 'teammate_in_pits', text: 'Team mate in pits'};
        this.showNotificationWithTimer();
      }else if(event.code == 'RTMT') {
        this.notification_data = { type: 'retirement', text: this.participantsData[event.data.vehicleIdx].m_name  + ' has retired'};
        this.showNotificationWithTimer();
      }
    },
    showNotificationWithTimer() {
      this.notification_on = true;
      let counter = 6;

      const timer = setInterval(() => {
        counter--;
        if (counter === 0) {
          clearInterval(timer);
          this.notification_on = false;
        }
      }, 1000);
    },
    closeNotification() {
      this.notification_on = false;
    },
    updateConfig(config) {
      this.config = config;
    },
    pageStandings() {
      this.page = 'standings';
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
      <CarPage :player_motionData="player_motionData" :mph="config.mph" :car_damage="car_damage" :car_index="car_index" :telemetry="telemetryData" v-if="page == 'car'"></CarPage>
      <StandingsPage :my_team="config.my_team" :num_cars="num_cars" :carStatus="carStatus" :lapData="lapData" :car_index="lapPlayerIndex" :participantsData="participantsData" v-if="page == 'standings'"></StandingsPage>
      <ConfigPage @pageStandings="pageStandings" @updateConfig="updateConfig" :config="config" v-if="page == 'config'"></ConfigPage>
      <StrategyPage v-if="page == 'strategy'"></StrategyPage>
    </div>
    <Notification @closeNotification="closeNotification" :data="notification_data" class="notification" v-if="notification_on"></Notification>
    <FinalStandings v-if="final_standings_on"></FinalStandings>
  </div>
</template>
