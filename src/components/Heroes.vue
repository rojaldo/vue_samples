<template>
    <div class="container">
        <Form @on-new-hero="addHero($event)"></Form>
        <List v-bind:myheroes="heroes"></List>
    </div>
</template>

<script>
import { Hero } from "../model/Hero";
import List from "./List.vue";
import Form from "./Form.vue";

export default {
    name: "Heroes",
    data() {
        return {
            newHeroName: "",
            newHeroDescription: "",
            heroes: [
                new Hero("Batman", "Dark knight"),
                new Hero("Superman", "Super hero"),
                new Hero("Spiderman", "Spider hero"),
                new Hero("Ironman", "Super hero")
            ]
        };
    },
    methods: {
        addHero(hero) {
            if(hero.name.length > 0) {
                this.heroes.push(hero);
                this.newHeroName = "";
                this.newHeroDescription = "";
            }
        }
    },
    components: { List, Form }
}
</script>

<style lang="scss" scoped>
</style>