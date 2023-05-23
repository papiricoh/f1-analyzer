<script setup>

</script>

<script>

export default {
  props: {
    
  },
  data() {
    return {
        current_lap: 1,
        pit_stop: { ideal_lap: 2, latest_lap: 8, rejoin_pos: 2 }
    };
  },
  watch: {
    
  },
  methods: {
    
  },
  computed: {

  }
};
</script>
<template>
  <div class="strategy_dashboard">
    <div class="grid_container pit_guide_container">
        <div class="pit_window_header">PIT WINDOW</div>
        <div v-if="current_lap >= pit_stop.ideal_lap && pit_stop.latest_lap >= current_lap" class="pit_window_status pit_window_status_blue">OPEN</div>
        <div v-else class="pit_window_status pit_window_status_red">CLOSED</div>
        <div style="border-top: 1px solid white; width: 70%; align-self: center;"></div>
        <div class="estimated_laps">Laps {{pit_stop.ideal_lap}} - {{pit_stop.latest_lap}}</div>
    </div>
  </div>
</template>

<style scoped>
.estimated_laps {
    color: white;
    text-align: center;
    font-size: 1.5rem;
}
.pit_window_status_blue {
    color: rgb(43, 196, 223);
    text-align: center;
}
.pit_window_status_red {
    color: red;
    text-align: center;
}
.pit_window_status {
    margin-top: 1.4rem;
    font-size: 3rem;
}
.pit_window_header {
    text-align: center;
    color: white;
    font-size: 1.4rem;
}
.grid_container {
    background-color: #03071e;
    border-radius: .3rem;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.335);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: .6rem;
}
.pit_guide_container {
    grid-column: 1/2;
    grid-row: 1/2;
    justify-content: stretch;
    gap: 1.6rem;
}
.strategy_dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 60rem;
    gap: 1rem;
}
</style>