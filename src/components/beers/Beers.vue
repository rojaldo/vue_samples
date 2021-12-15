
<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4 my-3" v-for="(beer, index) in beers" :key="index">
                <div class="card h-100">
                    <img class="card-img-top d-block mx-auto mt-3" v-bind:src="beer.image_url" alt="" style="width: 50px">
                    <div class="card-body">
                        <h4 class="card-title">{{beer.name}}</h4>
                        <h5>{{beer.abv}}</h5>
                        <p class="card-text">{{beer.tagline}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            beers: []
        }
    },
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

<style lang="scss" scoped>
</style>