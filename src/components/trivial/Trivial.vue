<template>

    <div class="container">
            <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4" v-for="(card, index) in cards" :key="index">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{{card.question}}</h4>
                <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block" v-for="(answer, i) in card.answers" :key="i">{{answer}}</button>
            </div>
        </div>
      </div>
    </div>

    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

let cards = ref([]);
// eslint-disable-next-line no-unused-vars
let store = useStore();
// fetch trivial cards
store.dispatch('fetchTrivialCards').then(() => {
    console.log(store.getters.trivialCards);
    cards.value = store.getters.trivialCards;
});


</script>

<style lang="scss" scoped>
</style>