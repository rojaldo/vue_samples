<template>
    <div>
        <Heroes :myheroes="heroes" @on-new-hero="updateHeroes($event)"></Heroes>
    </div>
</template>

<script>
import Heroes from "./Heroes.vue";
import { useStore } from "vuex";
export default {
    setup() {
        return {
            store: useStore(),
        }
    }, components: {
        Heroes
    }, data() {
        return {
            newHeroName: "",
            newHeroDescription: "",
            heroes: []
        };
    }, methods: {
        updateHeroes(heroes) {
            console.log('updateHeroes');
            this.heroes = heroes;
            console.log(this.heroes);
            this.store.commit("updateHeroesList", heroes);
        }
    }, created() {
        console.log('Created HeroesContainer');
        this.heroes = this.store.getters.heroesList;
    }
}
</script>

<style lang="scss" scoped>
</style>