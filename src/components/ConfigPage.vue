<script setup>

</script>

<script>

export default {
    props: {
        config: Object
    },
    data() {
        return {
            my_team_on: false,
            mph: false,
            my_team_name: "",
        };
    },
    mounted() {
        this.my_team_on = this.config.my_team.allowed
        this.mph = this.config.mph
    },
    methods: {
        updateConfig(new_config) {
            this.$emit('updateConfig', new_config);
        },
        submit() {
            let config = { 
                my_team: { custom_team_name: "Custom Team", allowed: false },
            };
            let my_team_name_p = "";
            if(this.my_team_name != "") {
                my_team_name_p = this.my_team_name;
            }else {
                my_team_name_p = this.config.my_team.custom_team_name;
            }
            config.my_team.custom_team_name = my_team_name_p;
            config.my_team.allowed = this.my_team_on;
            config.mph = this.mph;
            this.updateConfig(config);
        },
        pageStandings() {
            this.$emit('pageStandings');
        }
    }
};
</script>


<template>
    <div class="standings_page config_page">
        <div class="config_title">CONFIGURATION</div>
        <div class="config_body">
            <div class="config_body_row">
                <div class="config_name">My Team mode:</div>
                <div class="button" @click="my_team_on = false" v-if="my_team_on" >ON</div>
                <div class="button" @click="my_team_on = true" v-else>OFF</div>
            </div>
            <div class="config_body_row">
                <div class="config_name">My Team name:</div>
                <input type="text" :placeholder="config.my_team.custom_team_name" v-model="my_team_name">
            </div>
            <div class="config_body_row">
                <div class="config_name">Milles per hour mode (MPH):</div>
                <div class="button" @click="mph = false" v-if="mph" >ON</div>
                <div class="button" @click="mph = true" v-else>OFF</div>
            </div>
        </div>
        <div @click="submit(), pageStandings()" class="submit_button">
            Submit
        </div>
    </div>
</template>

<style scoped>
.submit_button {
    border: 1px solid #6a040f;
    border-radius: .4rem;
    background-color: transparent;
    color: white;
    cursor: pointer;
    padding: .6rem 2rem;
    transition: .4s;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
    width: 80%;
    align-self: center;
    margin-top: 14rem;
}
input {
    border: 1px solid #6a040f;
    border-radius: .4rem;
    padding: .4rem 1rem;
    background-color: transparent;
    color: white;
    outline: 0;
}
.button {
    border: 1px solid #6a040f;
    border-radius: .4rem;
    background-color: transparent;
    color: white;
    cursor: pointer;
    padding: .6rem 2rem;
    transition: .4s;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
}
.button:hover, .submit_button:hover {
    border: 1px solid #cecece;
    background-color: #6a040f;
    transition: .4s;
}
.button:active, .submit_button:active {
    border: 1px solid #6a040f;
    background-color: transparent;
    transition: .4s;
}
.config_body_row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.config_body {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: .4rem;
}
.config_title {
    font-size: x-large;
    text-align: center;
}
.config_page {
    margin: 2rem 20%;
    background-color: #03071e;
    border-radius: .4rem;
    color: white;
    padding: 1rem;
    min-height: 28rem;
}
</style>