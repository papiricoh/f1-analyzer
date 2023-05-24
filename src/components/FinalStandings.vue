<script>

export default {
  props: {
    
  },
  data() {
    return {
        drivers: [
            { pos: 1, name: "HAMILTON", nationality: "british", team: "Mercedes", time: 201000, points: 25 },
            { pos: 2, name: "RUSSELL", nationality: "british", team: "Mercedes", time: 201000, points: 25 },
            { pos: 3, name: "LECLERC", nationality: "british", team: "Mercedes", time: 201000, points: 25 },
        ]
    };
  },
  watch: {
    
  },
  methods: {
    
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
                    </div>
                    <div class="f_standings_row" v-for="driver in drivers">
                        <div class="position">{{driver.pos}}</div>
                        <div class="driver_name">{{driver.name}}</div>
                        <div class="driver_team">{{driver.team}}</div>
                        <div class="driver_time">{{new Date(driver.time).toISOString().slice(12, -1)}}</div>
                        <div class="driver_points">+{{driver.points}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    margin-top: .4rem;
    margin-bottom: .4rem;
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
}
.main_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.718);
    border-radius: 1rem;
    align-items: center;
}
.container_border {
    width: 90%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.385);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.548);
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