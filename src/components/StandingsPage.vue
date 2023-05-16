<script>

export default {
  props: {
    participantsData: Array,
    car_index: Number,
    lapData: Array,
    carStatus: Object,
  },
  data() {
    return {
        sesion_info: { lap: 1, track: "Miami", weather: 'Dry', temp: '32', type: 'race' },
        fastest_lap: { name: 'Perez', time: '1:22.322', S1: 56.2, S2: 42.3, S3: 62.31 },
        drivers: [],
        cars: [],
        renderer_cars: [],
        render_index: 0,
    };
  },
  watch: { 
    participantsData: function(newVal, oldVal) {
        for (let index = 0; index < newVal.length; index++) {
            if(this.drivers[index] != null) {
                this.drivers[index] = { id: newVal[index].m_driverId, name: newVal[index].m_name, team: newVal[index].m_teamId};
            }else {
                this.drivers[index] = { id: newVal[index].m_driverId, name: newVal[index].m_name, team: newVal[index].m_teamId};
            }
        }
    },
    lapData: function(newVal, oldVal) {
        for (let index = 0; index < newVal.length - 2; index++) {
            if(this.cars[index] != null) {
                this.cars[index] = { pos: newVal[index].m_carPosition, name: this.drivers[index].name, team: this.drivers[index].team, tyres: this.cars[index].tyres, tyre_age: this.cars[index].tyre_age, fastest_lap: this.cars[index].fastest_lap, gap: 0, S1: newVal[index].m_sector1TimeInMS, S2: newVal[index].m_sector2TimeInMS, last_lap: newVal[index].m_lastLapTimeInMS, speed_trap: -1, current_lap: newVal[index].m_currentLapTimeInMS };
                if(newVal[index].m_lastLapTimeInMS != 0 && newVal[index].m_lastLapTimeInMS < this.cars[index].fastest_lap) {
                    this.cars[index].fastest_lap = newVal[index].m_lastLapTimeInMS;
                }
                if(newVal[index].m_carPosition == 1) {
                    this.sesion_info.lap = newVal[index].m_currentLapNum;
                }
            }else {
                this.cars[index] = { pos: newVal[index].m_carPosition, name: this.drivers[index].name, team: this.drivers[index].team, tyres: 16, tyre_age: 0, fastest_lap: 1000000000, gap: 0, S1: newVal[index].m_sector1TimeInMS, S2: newVal[index].m_sector2TimeInMS, last_lap: newVal[index].m_lastLapTimeInMS, speed_trap: -1, current_lap: newVal[index].m_currentLapTimeInMS };
            }
        }
        this.orderList();
    },
    carStatus: function(newVal, oldVal) {
        for (let index = 0; index < this.cars.length; index++) {
            this.cars[index].tyre = newVal.m_carStatusData[index].m_visualTyreCompound;
            this.cars[index].tyre_age = newVal.m_carStatusData[index].m_tyresAgeLaps;
        }
    },
  },
  methods: {
    orderList() {
        let new_list = Array.from(this.cars);
        let player_car = new_list[this.car_index];
        new_list.sort((a, b) => a.pos - b.pos);
        for (let index = 0; index < new_list.length; index++) {
            if(new_list[index] == player_car) {
                this.render_index = index;
            }
        }
        if(this.sesion_info.lap > 1) {
            for (let index = 1; index < new_list.length; index++) {
                new_list[index].gap = new_list[index - 1].current_lap - new_list[index].current_lap;
            }
        }
        this.renderer_cars = new_list;
    },
    isPlayerCss(car_pos) {
        if(car_pos == this.render_index) {
            return 'background-color: #6a040f;'
        }
    },
    renderTyre(tyre) {
        if(tyre == 16) {
            return '/tyres/soft.svg';
        }else if(tyre == 17) {
            return '/tyres/medium.svg';
        }else if(tyre == 18) {
            return '/tyres/hard.svg';
        }else if(tyre == 7) {
            return '/tyres/intermediate.svg';
        }else if(tyre == 8) {
            return '/tyres/wet.svg';
        }else {
            return '/tyres/soft.svg';
        }
    },
    renderTeam(team) {
        switch (team) {
            case 0:
                return 'Mercedes';
            case 1:
                return 'Ferrari';
            case 2:
                return 'Red Bull Racing';
            case 3:
                return 'Williams';
            case 4:
                return 'Aston Martin';
            case 5:
                return 'Alpine';
            case 6:
                return 'Alpha Tauri';
            case 7:
                return 'Haas';
            case 8:
                return 'McLaren';
            case 9:
                return 'Alfa Romeo';
            default:
                return 'Unknown team';
        }
    }
  }
};
</script>

<template>
    <div class="standings_page">
        <div class="sesion_info">
            <div>{{ sesion_info.track }} Grand Prix</div>
            <div>Type: {{ sesion_info.type }}</div>
            <div>Weather: {{ sesion_info.weather }}</div>
            <div>Temperature: {{ sesion_info.temp }}º</div>
            <div>Fastest lap: {{ fastest_lap.name }}  -  {{ fastest_lap.time }}</div>
        </div>
        <div class="standings_table_container">
            <div class="table_row">
                <div>POS</div>
                <div>NAME</div>
                <div>TEAM</div>
                <div>TYRES</div>
                <div>FASTEST LAP</div>
                <div>GAP</div>
                <div>CURRENT LAP</div>
                <div>S1</div>
                <div>S2</div>
                <div>LAST LAP</div>
                <div>SPEED TRAP</div>
            </div>
            <div v-for="(car, index) in renderer_cars" class="table_row" :style="isPlayerCss(index)">
                <div>{{car.pos}}</div>
                <div>{{car.name}}</div>
                <div>{{renderTeam(car.team)}}</div>
                <div>
                    <img height="30" :src="renderTyre(car.tyres)" alt="">
                    <div class="tyre_age">{{car.tyre_age}}</div>
                </div>
                <div v-if="car.fastest_lap == 1000000000">--:--</div>
                <div v-else>{{new Date(car.fastest_lap).toISOString().slice(15, -1)}}</div>
                <div v-if="car.pos != 1">{{new Date(car.gap).toISOString().slice(17, -1)}}</div>
                <div v-else> --:-- </div>
                <div>{{new Date(car.current_lap).toISOString().slice(15, -1)}}</div>
                <div>{{new Date(car.S1).toISOString().slice(15, -1)}}</div>
                <div>{{new Date(car.S2).toISOString().slice(15, -1)}}</div>
                <div>{{new Date(car.last_lap).toISOString().slice(15, -1)}}</div>
                <div>{{car.speed_trap}}</div>
            </div>
        </div>
    </div>
</template>