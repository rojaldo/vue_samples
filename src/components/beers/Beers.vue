
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
import { useStore } from 'vuex';

export default {
    setup() {

        return {
            store: useStore(),
        }
    },
    data() {
        return {
            beers: this.store.getters.beersList,
            range: this.store.getters.range
        }
    },
    methods: {
        updateRange() {
            console.log(this.range);
            this.store.dispatch('updateRange', this.range);
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
    created() {
        this.beers = this.store.getters.beersList;
        this.store.dispatch('fetchBeers').then(() => {
            this.beers = this.store.getters.beersList;
        });
    }
}
</script>

<style lang="scss" scoped  >
</style>