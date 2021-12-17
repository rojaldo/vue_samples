/* eslint-disable no-unused-vars */
<template>
    <div>
        <Heroes :myheroes="heroes" @on-new-hero="updateHeroes($event)"></Heroes>
    </div>
</template>

<script setup>
import Heroes from "./Heroes.vue";
import { useStore } from "vuex";
import { ref } from "vue";

// eslint-disable-next-line no-unused-vars
let newHeroName = ref("");
// eslint-disable-next-line no-unused-vars
let newHeroDescription = ref("");
let heroes = ref([]);
let store = useStore();

// onCreated
heroes = store.getters.heroesList;

const updateHeroes = (myheroes) => {
    console.log('updateHeroes');
    heroes = myheroes;
    console.log(heroes);
    store.commit("updateHeroesList", heroes);
}

</script>

<style lang="scss" scoped>
</style>