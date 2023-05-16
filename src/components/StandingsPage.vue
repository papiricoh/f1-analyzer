<script>

export default {
  props: {
  },
  data() {
    return {
        fastest_lap: { name: 'Perez', time: '1:22:322', S1: 56.2, S2: 42.3, S3: 62.31 },
        cars: [
            { pos: 1, name: 'Alonso', tyres: 'soft', tyre_age: 7, fastest_lap: '1:23:231', S1: 56.2, S2: 42.3, S3: 62.31, last_lap: '1:23:321' },
        ],
    };
  },
  methods: {
    renderTyre(tyre) {
        if(tyre == 'soft') {
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/F1_tire_Pirelli_PZero_Red.svg/1024px-F1_tire_Pirelli_PZero_Red.svg.png?20190705122326';
        }
    }
  }
};
</script>

<template>
    <div>
        <div class="standings_table_container">
            <div class="table_row">
                <div>POS</div>
                <div>NAME</div>
                <div>TYRES</div>
                <div>FASTEST LAP</div>
                <div>S1</div>
                <div>S2</div>
                <div>S3</div>
                <div>LAST LAP</div>
            </div>
            <div v-for="car in cars" class="table_row">
                <div>{{car.pos}}</div>
                <div>{{car.name}}</div>
                <div>
                    <img height="30" :src="renderTyre(car.tyres)" alt="">
                    <div class="tyre_age">{{car.tyre_age}}</div>
                </div>
                <div>{{car.fastest_lap}}</div>
                <div>{{car.S1}}</div>
                <div>{{car.S2}}</div>
                <div>{{car.S3}}</div>
                <div>{{car.last_lap}}</div>
            </div>
        </div>
    </div>
</template>