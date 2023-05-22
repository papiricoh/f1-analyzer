<script>
export default {
  props: {
    data: Object,
    default: { type: 'yellow_flag', text: 'Yellow flag in sector 3: Versapen\'s Crash into turn 14'}
  },
  data() {
    return {
        animation_on_progress: false,
    };
  },
  methods: {
    triggerAnimation() {
      this.animation_on_progress = true
      setTimeout(() => {
        this.animation_on_progress = false
      }, 1500)
    },
    closeNotification() {
        this.$emit('closeNotification');
    }
  }
};
</script>

<template>
    <div>
        <div class="notification_body on_animation">
            <img class="notification_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fédération_Internationale_de_l%27Automobile_wordmark.svg/800px-Fédération_Internationale_de_l%27Automobile_wordmark.svg.png" alt="">
            <div class="race_control_container">
                <div class="race_control">RACE CONTROL</div>
            </div>
            <div class="main_text">
              {{ data.text }} 
            </div>
        </div>
    </div>
</template>

<style scoped>
.on_animation {
  animation: display 1.5s;
}
@keyframes display {
  0% {
    width: 42rem;
    transform: translateY(-200px);
  }
  100% {
    width: 86rem;
    transform: translateY(0);
  }
}
.notification_body {
    background-color: #03071eca;
    height: 10rem;
    width: 86rem;
    margin: 2rem;
    margin-top: 8rem;
    transition: .4s;
    z-index: 5;
    display: flex;
    align-items: center;
    border-bottom-right-radius: 2rem;
}
.notification_body > * {
    color: white;
}
.main_text {
  font-size: 1.4rem;
  padding: 1rem;
}
.race_control {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c51818;
    font-size: 2rem;
    width: 100%;
    height: 60%;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-top: 0;
    border-bottom: 0;
    font-weight: bolder;
    width: 258px;
}
.notification_logo {
    margin: 2rem;
    width: 80px;
}
.race_control_container {
    background-color: #03071e;
    width: 20rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>