<script setup>

</script>

<script>

export default {
  props: {
    
  },
  data() {
    return {
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

    </div>
  </div>
</template>

<style scoped>
.pit_guide_container {
    grid-column: 1/2;
    grid-row: 1/2;
}
.grid_container {
    background-color: #03071e;
    border-radius: .3rem;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.335);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.strategy_dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 60rem;
    gap: 1rem;
}
</style>