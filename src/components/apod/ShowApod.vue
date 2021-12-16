<template>
        <div class="jumbotron">
            <h1 class="display-3">{{ myApod.title }}</h1>
            <p class="lead">{{ myApod.date }}</p>
            <hr class="my-2" />
            <img
                v-if="myApod.media_type === 'image'"
                v-bind:src="myApod.url"
                v-bind:alt="myApod.title"
                class="d-block mx-auto mb-3"
            />
            <YouTube
                class="d-block mx-auto mb-3"
                v-if="myApod.media_type === 'video'"
                :src="myApod.url"
                @ready="onReady"
                ref="youtube"
            />
            <p>{{ myApod.explanation }}</p>
            <p class="lead">
                <a
                    v-if="myApod.media_type === 'image'"
                    class="btn btn-primary btn-lg"
                    :href="myApod.hdurl"
                    role="button"
                >Download Image</a>
            </p>
        </div>
</template>

<script>
import YouTube from 'vue3-youtube'
export default {
    setup () {
        return {}
    }, 
    props: ['myApod'],
    components: { YouTube },
}
</script>

<style lang="scss" scoped>

</style>