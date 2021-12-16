<template>
    <div class="container">
        <ApodDatePicker @on-update-date="updateDate($event)"></ApodDatePicker>
        <ShowApod :my-apod="apod"></ShowApod>
    </div>
</template>

<script>
import ShowApod from './ShowApod.vue';
import ApodDatePicker from './ApodDatePicker.vue';

export default {
    setup() {
        return {}
    },
    data() {
        return {
            apod: {},
            date: undefined
        }
    },
    created() {
        console.log('Apod created');
        this.date = new Date();
    },
    components: {
        ShowApod, ApodDatePicker
    },
    methods: {
        updateDate(date) {
            this.date = date;
        }
    },
    watch:{
        date: function(newDate){
            console.log(newDate);
            // date to string with format yyyy-mm-dd
            fetch(`https://api.nasa.gov/planetary/apod?date=${newDate.toISOString().split('T')[0]}&api_key=DEMO_KEY`)
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