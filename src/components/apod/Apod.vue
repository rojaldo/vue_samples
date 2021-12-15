<template>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-3">{{apod.title}}</h1>
            <p class="lead">{{apod.date}}</p>
            <hr class="my-2" />
            <img :src="apod.url" :alt="apod.title" class="d-block mx-auto mb-3">
            <p>{{apod.explanation}}</p>
            <p class="lead">
                <a
                    class="btn btn-primary btn-lg"
                    href="Jumbo action link"
                    role="button"
                >Jumbo action name</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {}
    },
    data() {
        return {
            apod: {}
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
}
</script>

<style lang="scss" scoped>
</style>