<script>

export default {
  props: {
    finalStandings: Object
  },
  data() {
    return {
        player_id: 0,

        drivers: [
            { pos: 1, name: "HAMILTON", nationality: "british", team: "Mercedes", time: 2201000, points: 28 },
            { pos: 2, name: "RUSSELL", nationality: "british", team: "Mercedes", time: 2201200, points: 16 },
            { pos: 3, name: "LECLERC", nationality: "british", team: "Mercedes", time: 2201500, points: 8 },
            { pos: 4, name: "HAMILTON", nationality: "british", team: "Mercedes", time: 2202200, points: 7 },
            { pos: 5, name: "RUSSELL", nationality: "british", team: "Mercedes", time: 2205200, points: 6 },
            { pos: 6, name: "LECLERC", nationality: "british", team: "Mercedes", time: 2206200, points: 5 },
            { pos: 7, name: "HAMILTON", nationality: "british", team: "Mercedes", time: 2210200, points: 4 },
            { pos: 8, name: "RUSSELL", nationality: "british", team: "Mercedes", time: 2212200, points: 3 },
            { pos: 9, name: "LECLERC", nationality: "british", team: "Mercedes", time: 2214200, points: 2 },
            { pos: 10, name: "LECLERC", nationality: "british", team: "Mercedes", time: 2215200, points: 1 },
        ],

        fastest_lap: { time: 12000, name: "LECLERC" },
    };
  },
  watch: {
    finalStandings: function(newVal, oldVal) {
        
    },
  },
  methods: {
    closeFinalStandings() {
        this.$emit('closeFinalStandings');
    }
  }
};
</script>

<template>
    <div class="transparent_container">
        <div class="container_border">
            <div class="main_container">
                <div class="final_standings_table">
                    <div class="f_standings_title">
                        <div class="standings_main_title">RACE RESULT</div>
                        <div @click="closeFinalStandings" class="x_button">X</div>
                    </div>
                    <div class="f_standings_row" v-for="driver, index in drivers">
                        <div class="position">{{driver.pos}}</div>
                        <div class="driver_name">{{driver.name}}</div>
                        <div class="driver_team">{{driver.team}}</div>
                        <div v-if="index == 0" class="driver_time">{{new Date(driver.time).toISOString().slice(12, -1)}}</div>
                        <div v-else class="driver_time">+{{new Date(driver.time - drivers[0].time).toISOString().slice(15, -1)}}</div>
                        <div class="driver_points">+{{driver.points}}</div>
                    </div>
                    <div class="f_footer">
                        Fastest Lap: {{ fastest_lap.name }} - {{ new Date(fastest_lap.time).toISOString().slice(12, -1) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.f_footer {
    color: white;
    display: flex;
    align-items: center;
    padding: 1rem;
    font-size: 1.8rem;
}
.x_button {
    border: 1px solid white;
    border-radius: 1rem;
    padding: 1rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;
    cursor: pointer;
}
.x_button:hover {
    color: black;
    background-color: white;
    transition: .4s;
}
.f_footer {
    height: 4rem;
    background-color: black;
    border-bottom-right-radius: 1rem;
}
.driver_name, .driver_team, .driver_time, .driver_points {
    font-size: 2rem;
    font-weight: bold;
    color: white;
}
.driver_team, .driver_time {
    font-weight: 400;
}
.position {
    width: 3rem;
    height: 3rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.7rem;
    border-radius: .1rem;
    border-bottom-right-radius: 1rem;
}
.f_standings_row {
    display: grid;
    grid-template-columns: 1fr 4fr 4fr 4fr 2fr;
    margin-top: .6rem;
    margin-bottom: .6rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
.standings_main_title {
    font-size: 4rem;
    color: white;
}
.f_standings_title {
    background-color: black;
    border-top-right-radius: 1rem;
    height: 9rem;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
}
.final_standings_table {
    width: 96%;
    min-height: 20rem;
    margin: 1rem;
    border-top: 2px solid #d30202;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.718);
}
.main_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    align-items: center;
}
.container_border {
    width: 90%;
    height: 90%;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
.transparent_container {
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10;
    justify-content: center;
    align-items: center;
}
</style>