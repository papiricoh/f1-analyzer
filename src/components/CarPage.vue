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
      <div style="text-align: center;" class="title">CAR DATA</div>
      <div class="rpm_container">
        <div>
          <div class="rpm">
            <div style="text-align: center;">{{ 13000 }} rpm</div>
              <div class="loading_container">
                <div :style="'width: ' + (( 13000 / 15000 ) * 100).toFixed(0) + '%;'" class="loading_body"></div>
              </div>
          </div>
          <div class="rpm">
            <div style="text-align: center;">{{ 230 }} km/h</div>
              <div class="loading_container">
                <div :style="'width: ' + (( 230 / 400 ) * 100).toFixed(0) + '%;'" class="loading_body"></div>
              </div>
          </div>
        </div>
        <div>
          <div class="rpm">
            <!--<div>{{ telemetry[car_index].m_engineRPM }}</div>
              <div class="loading_container">
                <div :style="'width: ' + (( telemetry[car_index].m_engineRPM / 15000 ) * 100).toFixed(0) + '%;'" class="loading_body"></div>
              </div>-->
            <div style="text-align: center;">Gear: {{ 5 }}</div>
              <div class="loading_container">
                <div :style="'width: ' + (( 5 / 8 ) * 100).toFixed(0) + '%;'" class="loading_body"></div>
              </div>
          </div>
          <div class="rpm">
            <div style="text-align: center;">Brake: {{ 40 }}%</div>
              <div class="loading_container">
                <div :style="'width: ' + (.4 * 100).toFixed(0) + '%;'" class="loading_body"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="car_container">

    </div>
  </div>
</template>
