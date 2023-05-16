<script setup>
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
    };
  },
  methods: {
    
  }
};
</script>

<!--<div>{{ telemetry[car_index].m_engineRPM }}</div>
  <div class="loading_container">
    <div :style="'width: ' + (( telemetry[car_index].m_engineRPM / 15000 ) * 100).toFixed(0) + '%;'" class="loading_body"></div>
  </div>-->

<template>
  <div class="car_grid">
    <div class="car_container">
      <img src="https://www.svgrepo.com/show/110709/f1-car.svg" alt="">
    </div>
  </div>
</template>
