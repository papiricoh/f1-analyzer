<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<script lang="ts">
import { ipcRenderer } from 'electron';

export default {
  data() {
    return {
      motionData: null
    };
  },
  mounted() {
    ipcRenderer.on('motion-data', (event, data) => {
      this.motionData = data;
    });
  },
  beforeDestroy() {
    ipcRenderer.removeAllListeners('motion-data');
  }
};
</script>


<template>
  <div>

  </div>
</template>
