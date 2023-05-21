<script>
export default {
    props: {
        rpm: {
            type: Number,
            default: 3420
        }
    },
    data() {
        return {
            max_rpm: 13500,
        }
    },
    methods: {
        calculateRpm() {
            let percentage =  this.rpm / this.max_rpm;
            console.log(percentage);
            return percentage * 0.5;
        }
    }
};
</script>

<template>
    <div class="gauge">
        <div class="gauge__body"> 
            <div :style="'transform: rotate(' + calculateRpm() + 'turn);'" class="gauge__fill"></div>
            <div class="gauge__cover"></div>
            <div class="text">{{ rpm }} rpm</div>
        </div>
    </div>
</template>

<style scoped>
.text {
    align-self: center;
    position: absolute;
    color: white;
    z-index: 4;
    font-size: x-large;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
.gauge{
    width: 100%;
    max-width: 320px;  
    align-self: center;
}

/*  mak the height half its width */
.gauge__body{
    width: 100%;
    height: 0;
    padding-bottom: 50%; 
    background-color: #370617;
    position: relative;
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    overflow: hidden;
}

.gauge__fill{
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #990202;
    transform-origin: 50% 0%;
    transform: rotate(0.1turn);
    transition: transform 200ms ease-out;
}
  
.gauge__cover{
    width: 75%;
    height: 150%;
    background-color: #03071e;
    position: absolute;
    border-radius: 50%;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    /*  text*/
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25%;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 1.4rem;
}
</style>