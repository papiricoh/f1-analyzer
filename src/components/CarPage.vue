<script setup>
import EngineItem from './EngineItem.vue';
</script>

<script>

export default {
  props: {
    telemetry: {
      type: Array,
      required: true
    },
    car_index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      car: { speed: 230.3, rpm: 10532, gear: 5},
      engine: { gearbox: 23.2, MGU_K: 62.2, CE: 83.3, ES: 32.2, ICE: 54.3, MGU_H: 2.2, TC: 82.6 }
    };
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
          <div class="engine_label" :style="checkColorCss(engine.MGU_K)">MGU-K: {{ engine.MGU_K }}%</div>
          <div class="engine_label" :style="checkColorCss(engine.ES)">ES: {{ engine.ES }}%</div>
          <div class="engine_label" :style="checkColorCss(engine.CE)">CE: {{ engine.CE }}%</div>
          <div class="engine_label" :style="checkColorCss(engine.ICE)">ICE: {{ engine.ICE }}%</div>
          <div class="engine_label" :style="checkColorCss(engine.MGU_H)">MGU-H: {{ engine.MGU_H }}%</div>
          <div class="engine_label" :style="checkColorCss(engine.TC)">TC: {{ engine.TC }}%</div>
          <div class="engine_label" :style="checkColorCss(engine.gearbox)">Gearbox: {{ engine.gearbox }}%</div>
        </div>
      </div>
    </div>
    <div class="car_container">
      <img height="300" src="/car.svg" alt="">
    </div>
  </div>
</template>

<style scoped>
.engine_label {
  
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