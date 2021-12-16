<template>
    <div class="container">
        <Datepicker v-model="date" @update:modelValue="updateDate()"></Datepicker>
        <div class="jumbotron">
            <h1 class="display-3">{{ apod.title }}</h1>
            <p class="lead">{{ apod.date }}</p>
            <hr class="my-2" />
            <img
                v-if="apod.media_type === 'image'"
                v-bind:src="apod.url"
                v-bind:alt="apod.title"
                class="d-block mx-auto mb-3"
            />
            <YouTube
                class="d-block mx-auto mb-3"
                v-if="apod.media_type === 'video'"
                :src="apod.url"
                @ready="onReady"
                ref="youtube"
            />
            <p>{{ apod.explanation }}</p>
            <p class="lead">
                <a
                    v-if="apod.media_type === 'image'"
                    class="btn btn-primary btn-lg"
                    :href="apod.hdurl"
                    role="button"
                >Download Image</a>
            </p>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import YouTube from 'vue3-youtube'

export default {
    setup() {
        return {}
    },
    data() {
        return {
            apod: {},
            date: new Date()
        }
    },
    created() {
        console.log('Apod created');
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.apod = data;
            })
            .catch(error => console.error(error));
    },
    components: {
        Datepicker, YouTube
    },
    methods: {
        updateDate() {
            console.log(this.date);
            // this.date to string with format yyyy-mm-dd
            fetch(`https://api.nasa.gov/planetary/apod?date=${this.date.toISOString().split('T')[0]}&api_key=DEMO_KEY`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.apod = data;
                })
                .catch(error => console.error(error));
        }
    }
}
</script>

<style lang="scss" scoped>
</style>