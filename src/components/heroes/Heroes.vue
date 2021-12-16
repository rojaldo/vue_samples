<template>
    <div class="container">
        <Form @on-new-hero="addHero($event)"></Form>
        <List v-bind:myheroes="heroes"></List>
    </div>
</template>

<script>
// import { Hero } from "../../model/Hero";
import List from "./List.vue";
import Form from "./Form.vue";

export default {
    name: "Heroes",
    data() {
        return {
            newHeroName: "",
            newHeroDescription: "",
            heroes: this.myheroes
        };
    },props: ['myheroes']
    , components: {
        List,
        Form
    },
    methods: {
        addHero(hero) {
            if(hero.name.length > 0) {
                this.heroes.push(hero);
                this.$emit('onNewHero', this.heroes);
                // this.store.commit("updateHeroesList", this.heroes);
                this.newHeroName = "";
                this.newHeroDescription = "";
            }
        }
    }, emits: {
        onNewHero: "addHero"
    }
}
</script>

<style lang="scss" scoped>
</style>