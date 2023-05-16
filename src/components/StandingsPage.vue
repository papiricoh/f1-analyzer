<script>

export default {
  props: {
  },
  data() {
    return {
        sesion_info: { track: "Miami", weather: 'Dry', temp: '32', type: 'race' },
        fastest_lap: { name: 'Perez', time: '1:22.322', S1: 56.2, S2: 42.3, S3: 62.31 },
        cars: [
            { pos: 1, name: 'Alonso', team: 'Aston Martin', tyres: 'medium', tyre_age: 22, fastest_lap: '1:23.231', gap: '0:0', S1: 56.2, S2: 42.3, S3: 62.31, last_lap: '1:23.321', speed_trap: 334 },
            { pos: 2, name: 'Perez', team: 'Red Bull', tyres: 'hard', tyre_age: 42, fastest_lap: '1:23.231', gap: '+0.234', S1: 56.2, S2: 42.3, S3: 62.31, last_lap: '1:23:321', speed_trap: 334 },
            { pos: 3, name: 'Sainz', team: 'Ferrari', tyres: 'soft', tyre_age: 2, fastest_lap: '1:23.231', gap: '+3.522', S1: 56.2, S2: 42.3, S3: 62.31, last_lap: '1:23.321', speed_trap: 334 },
            { pos: 4, name: 'Verstapen', team: 'Red Bull', tyres: 'wet', tyre_age: 22, fastest_lap: '1:23.231', gap: '+4.522', S1: 56.2, S2: 42.3, S3: 62.31, last_lap: '1:23.321', speed_trap: 334 },
            { pos: 5, name: 'Gasly', team: 'Alpine', tyres: 'intermediate', tyre_age: 12    , fastest_lap: '1:23.231', gap: '+5.522', S1: 56.2, S2: 42.3, S3: 62.31, last_lap: '1:23.321', speed_trap: 334 },
        ],
    };
  },
  methods: {
    renderTyre(tyre) {
        if(tyre == 'soft') {
            return '/tyres/soft.svg';
        }else if(tyre == 'medium') {
            return '/tyres/medium.svg';
        }else if(tyre == 'hard') {
            return '/tyres/hard.svg';
        }else if(tyre == 'intermediate') {
            return '/tyres/intermediate.svg';
        }else if(tyre == 'wet') {
            return '/tyres/wet.svg';
        }else {
            return '/tyres/soft.svg';
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
                <div>S1</div>
                <div>S2</div>
                <div>S3</div>
                <div>LAST LAP</div>
                <div>SPEED TRAP</div>
            </div>
            <div v-for="car in cars" class="table_row">
                <div>{{car.pos}}</div>
                <div>{{car.name}}</div>
                <div>{{car.team}}</div>
                <div>
                    <img height="30" :src="renderTyre(car.tyres)" alt="">
                    <div class="tyre_age">{{car.tyre_age}}</div>
                </div>
                <div>{{car.fastest_lap}}</div>
                <div v-if="car.pos != 1">{{car.gap}}</div>
                <div v-else> --:-- </div>
                <div>{{car.S1}}</div>
                <div>{{car.S2}}</div>
                <div>{{car.S3}}</div>
                <div>{{car.last_lap}}</div>
                <div>{{car.speed_trap}}</div>
            </div>
        </div>
    </div>
</template>