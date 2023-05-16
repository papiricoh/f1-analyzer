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
        //TODO SEND TO APP.vue -> CLOSE NOTIFICATION
        this.$emit('closeNotification');
    }
  }
};
</script>

<template>
    <div>
        <div class="notification_body">
            <div class="notification_header">
                <div v-if="data.type == 'yellow_flag'" class="notification_title yellow_flag_title"><font-awesome-icon style="font-size: 3rem;" icon="fa-solid fa-flag" /> YELLOW FLAG</div>
                <div v-else class="notification_title">{{data.type}}</div>
                <button @click="closeNotification()"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
            </div>
            <div class="notification_text">
                {{ data.text }}
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    border: 1px solid white;
    background-color: transparent;
    cursor: pointer;
    border-radius: .2rem;
    color: white;
    padding: 1rem;
    box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.403);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .4s;
}

button:hover {
    background-color: white;
    color: black;
    transition: .4s;
}

button:active {
    background-color: transparent;
    color: white;
    transition: .4s;
}

.notification_title {
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}
.yellow_flag_title {
    color: rgb(216, 202, 0);
}
</style>