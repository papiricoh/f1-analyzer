<script setup lang="ts">
</script>

<script lang="ts">

export default {
  data() {
    return {
        car: { speed: 230.3, rpm: 10532, gear: 5}
    };
  },
  methods: {
    calculateRpm() {
        return (( this.car.rpm / 15000 ) * 100).toFixed(0);
    }
  }
};
</script>


<template>
  <div class="car_grid">
    <div class="car_container">
        <div style="text-align: center;" class="title">CAR DATA</div>
        <div class="rpm_container">
            <div class="rpm">
                <div class="loading_container">
                    <div :style="'width: ' + calculateRpm() + '%;'" class="loading_body"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="car_container">

    </div>
  </div>
</template>
