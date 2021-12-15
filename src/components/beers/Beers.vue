
<template>
    <div class="container pt-5">
        <Slider v-model="range" v-bind:lazy="false" @update="updateRange()" />
        <div class="row">
            <div
                class="col-sm-12 col-md-6 col-lg-4 my-3"
                v-for="(beer, index) in showBeers"
                :key="index"
            >
                <div class="card h-100">
                    <img
                        class="card-img-top d-block mx-auto mt-3"
                        v-bind:src="beer.image_url"
                        alt
                        style="width: 50px"
                    />
                    <div class="card-body">
                        <h4 class="card-title">{{ beer.name }}</h4>
                        <h5>{{ beer.abv }}</h5>
                        <p class="card-text">{{ beer.tagline }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from '@vueform/slider';
import '@vueform/slider/themes/default.css';

export default {
    data() {
        return {
            beers: [],
            range: [3, 5]
        }
    },
    methods: {
        updateRange() {
            console.log(this.range);

        }

    },
    computed: {
        showBeers() {
            return this.beers.filter(beer => {
                return beer.abv >= this.range[0] && beer.abv <= this.range[1];
            });
        }
    },
    components: { Slider },
    setup() {

        return {}
    },
    created() {
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.beers = data;

            })
            .catch(error => console.error(error));
    }
}
</script>

<style lang="scss" scoped  >
</style>