<script setup>
import EngineItem from './EngineItem.vue';
import CarItem from './CarItem.vue';
</script>

<script>

export default {
  props: {
    car_index: {
      type: Number,
    },
    telemetry: {
      type: Array,
    },
    car_damage: {
      type: Array,
    },
    mph: {
      type: Boolean,
    },
  },
  data() {
    return {
      car: { speed: 230.3, rpm: 10532, gear: 5, engTemp: 20},
      engine: { gearbox: 50, MGU_K: 50, CE: 50, ES: 50, ICE: 50, MGU_H: 50, TC: 50 },
      parts: { front_wing: { left: 50, right: 50 }, floor: 50, diffuser: 50, sidepod: 50, engine: 50, rear_wing: 50, wheels: { top_left: 50, top_right: 50, bottom_left: 50, bottom_right: 50 }, brakes: { top_left: 50, top_right: 50, bottom_left: 50, bottom_right: 50 } },
      tyres_wear: { top_left: 0, top_right: 50, bottom_left: 0, bottom_right: 0 }
    };
  },
  watch: { 
    telemetry: function(newVal, oldVal) {
        this.car.rpm = newVal[this.car_index].m_engineRPM;
        this.car.gear = newVal[this.car_index].m_gear;
        this.car.engTemp = newVal[this.car_index].m_engineTemperature;
        this.car.speed = newVal[this.car_index].m_speed;
    },
    car_damage: function(newVal, oldVal) {
        let player_engine = newVal[this.car_index];
        this.engine = { gearbox: player_engine.m_gearBoxDamage, MGU_K: player_engine.m_engineMGUKWear, CE: player_engine.m_engineCEWear, ES: player_engine.m_engineESWear, ICE: player_engine.m_engineICEWear, MGU_H: player_engine.m_engineMGUHWear, TC: player_engine.m_engineTCWear }
        this.parts = { front_wing: { left: player_engine.m_frontLeftWingDamage, right: player_engine.m_frontRightWingDamage }, floor: player_engine.m_floorDamage, diffuser: player_engine.m_diffuserDamage, sidepod: player_engine.m_sidepodDamage, engine: player_engine.m_engineDamage, rear_wing: player_engine.m_rearWingDamage, wheels: { top_left: player_engine.m_tyresDamage[2], top_right: player_engine.m_tyresDamage[3], bottom_left: player_engine.m_tyresDamage[0], bottom_right: player_engine.m_tyresDamage[1] }, brakes: { top_left: player_engine.m_brakesDamage[2], top_right: player_engine.m_brakesDamage[3], bottom_left: player_engine.m_brakesDamage[0], bottom_right: player_engine.m_brakesDamage[1] } }
        this.tyres_wear = { top_left: player_engine.m_tyresWear[2], top_right: player_engine.m_tyresWear[3], bottom_left: player_engine.m_tyresWear[0], bottom_right: player_engine.m_tyresWear[1] }
    },
  },
  methods: {
    checkColor(percentage) {
      if(percentage >= 75) {
        return 2;
      }else if (percentage >= 50) {
        return 1;
      }else {
        return 0;
      }
    },
    checkColorCss(percentage) {
      if(percentage >= 75) {
        return 'color: #b53939;';
      }else if (percentage >= 50) {
        return 'color: #b5a939;';
      }else {
        return 'color: #39B54A;';
      }
    },
  },
  computed: {
    generateColors() {
      let colors = {}
      colors.gearbox = this.checkColor(this.engine.gearbox);
      colors.MGU_K = this.checkColor(this.engine.MGU_K);
      colors.CE = this.checkColor(this.engine.CE);
      colors.ES = this.checkColor(this.engine.ES);
      colors.ICE = this.checkColor(this.engine.ICE);
      colors.MGU_H = this.checkColor(this.engine.MGU_H);
      colors.TC = this.checkColor(this.engine.TC);
      return colors;
    },
    generateCarColors() {
      let colors = { front_wing: { left: this.checkColor(this.parts.front_wing.left), right: this.checkColor(this.parts.front_wing.right) }, floor: this.checkColor(this.parts.floor), diffuser: this.checkColor(this.parts.diffuser), sidepod: this.checkColor(this.parts.sidepod), gearbox: this.checkColor(this.engine.gearbox), engine: this.checkColor(this.parts.engine), rear_wing: this.checkColor(this.parts.rear_wing), wheels: { top_left: this.checkColor(this.parts.wheels.top_left), top_right: this.checkColor(this.parts.wheels.top_right), bottom_left: this.checkColor(this.parts.wheels.bottom_left), bottom_right: this.checkColor(this.parts.wheels.bottom_right) }, brakes: { top_left: this.checkColor(this.parts.brakes.top_left), top_right: this.checkColor(this.parts.brakes.top_right), bottom_left: this.checkColor(this.parts.brakes.bottom_left), bottom_right: this.checkColor(this.parts.brakes.bottom_right) } }
      return colors;
    }
  }
};
</script>

<!--<div>{{ telemetry[car_index].m_engineRPM }}</div>
  <div class="loading_container">
    <div :style="'width: ' + (( telemetry[car_index].m_engineRPM / 15000 ) * 100).toFixed(0) + '%;'" class="loading_body"></div>
  </div>-->

<template>
  <div class="car_grid">
    <div class="car_container car_engine_container">
      <div class="engine_container">
        <EngineItem :colorStatus="generateColors"></EngineItem>
        <div class="engine_labels">
          <div class="engine_label" :style="checkColorCss(engine.MGU_K)">MGU-K: {{ engine.MGU_K }}% <font-awesome-icon v-if="engine.MGU_K >= 90" style="height: 1.4rem; color: #b53939;" icon="fa-solid fa-warning" /></div>
          <div class="engine_label" :style="checkColorCss(engine.ES)">ES: {{ engine.ES }}% <font-awesome-icon v-if="engine.ES >= 90" style="height: 1.4rem; color: #b53939;" icon="fa-solid fa-warning" /></div>
          <div class="engine_label" :style="checkColorCss(engine.CE)">CE: {{ engine.CE }}% <font-awesome-icon v-if="engine.CE >= 90" style="height: 1.4rem; color: #b53939;" icon="fa-solid fa-warning" /></div>
          <div class="engine_label" :style="checkColorCss(engine.ICE)">ICE: {{ engine.ICE }}% <font-awesome-icon v-if="engine.ICE >= 90" style="height: 1.4rem; color: #b53939;" icon="fa-solid fa-warning" /></div>
          <div class="engine_label" :style="checkColorCss(engine.MGU_H)">MGU-H: {{ engine.MGU_H }}% <font-awesome-icon v-if="engine.MGU_H >= 90" style="height: 1.4rem; color: #b53939;" icon="fa-solid fa-warning" /></div>
          <div class="engine_label" :style="checkColorCss(engine.TC)">TC: {{ engine.TC }}% <font-awesome-icon v-if="engine.TC >= 90" style="height: 1.4rem; color: #b53939;" icon="fa-solid fa-warning" /></div>
          <div class="engine_label" :style="checkColorCss(engine.gearbox)">Gearbox: {{ engine.gearbox }}% <font-awesome-icon v-if="engine.gearbox >= 90" style="height: 1.4rem; color: #b53939;" icon="fa-solid fa-warning" /></div>
        </div>
      </div>
      <div class="car_data"> <!-- Disable to work in other parts -->
        <div class="gear_container">
          <div v-if="car.gear == 1" class="gear_selected">1</div>
          <div v-else>1</div>
          <div v-if="car.gear == 2" class="gear_selected">2</div>
          <div v-else>2</div>
          <div v-if="car.gear == 3" class="gear_selected">3</div>
          <div v-else>3</div>
          <div v-if="car.gear == 4" class="gear_selected">4</div>
          <div v-else>4</div>
          <div v-if="car.gear == 5" class="gear_selected">5</div>
          <div v-else>5</div>
          <div v-if="car.gear == 6" class="gear_selected">6</div>
          <div v-else>6</div>
          <div v-if="car.gear == 7" class="gear_selected">7</div>
          <div v-else>7</div>
          <div v-if="car.gear == 8" class="gear_selected">8</div>
          <div v-else>8</div>
        </div>
        <div class="rpm_container">
          <div class="progressBar_container">
            <div class="progressBar" :style="'width: ' + (( car.rpm / 13500 ) * 100).toFixed(0) + '%;'"></div>
          </div>
          <div class="rpm_display" style="text-align: center;"> {{ car.rpm }} rpm</div>
        </div>
        <div class="engineTemp_container">
          <font-awesome-icon style="height: 2rem;" icon="fa-solid fa-temperature-2" />
          <div>{{ car.engTemp }}º</div>
          <font-awesome-icon v-if="car.engTemp > 120" style="height: 2rem; color: #b5a939;" icon="fa-solid fa-warning" />
        </div>
        <div v-if="mph" style="text-align: center;">{{ (car.speed * 0.622).toFixed(0) }} mph</div>
        <div v-else style="text-align: center;">{{ car.speed }} km/h</div>
      </div>
    </div>
    <div class="car_container big_container">
      <CarItem :colorStatus="generateCarColors"></CarItem>
      <div class="car_status_container">

      </div>
    </div>
  </div>
</template>

<style scoped>
.car_status_container {
  background-color: black;
  position: absolute;
  height: 52rem;
  width: 10rem;
}
.big_container {
  grid-column: 2/3;
  grid-row: 1/3;
}
.engine_label {
  display: flex;
  gap: .6rem;
  align-items: center;
}
.engineTemp_container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
}
.gear_selected {
  color: #d30202;
}
.gear_container {
  display: flex;
  gap: .4rem;
  justify-content: center;
  align-items: center;
}

.progressBar_container, .progressBar {
  background-color: #370617;
  height: 1rem;
  border-radius: .3rem;
}
.progressBar {
  background-color: #990202;
}
.rpm_container {
  display: flex;
  align-items: stretch;
  gap: .2rem;
  flex-direction: column;
}
.car_data {
  display: flex;
  flex-direction: column;
  width: 10rem;
  gap: 1rem;
}
.car_engine_container {
  flex-direction: row;
  justify-content: space-between;
}
.engine_labels {
  z-index: 1;
  height: 20rem;
  width: 12rem;
  position: relative;
  left: -2.5rem;
  top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.2rem;
}
.engine_container {
  display: flex;
}
</style>