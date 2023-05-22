<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
        
    };
  },
  methods: {
    closeNotification() {
        this.$emit('closeNotification');
    }
  }
};
</script>

<template>
    <div>
        <div class="notification_body">
            <img class="notification_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fédération_Internationale_de_l%27Automobile_wordmark.svg/800px-Fédération_Internationale_de_l%27Automobile_wordmark.svg.png" alt="">
            <div class="race_control_container">
                <div class="race_control">RACE CONTROL</div>
            </div>
            <div class="main_text">

            </div>
        </div>
    </div>
</template>

<style scoped>
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