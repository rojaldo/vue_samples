<template>
        <div class="form-group">
            <label for>Hero Name</label>
            <input type="text" class="form-control" name id aria-describedby="helpId" placeholder v-model="newHeroName" />
            <small id="helpId" class="form-text text-muted" v-if="newHeroName.length === 0" >hero name should not be empty</small>
        </div>
        <div class="form-group">
            <label for>Hero Description</label>
            <input type="text" class="form-control" name id aria-describedby="helpId" placeholder v-model="newHeroDescription" />
        </div>
        <button type="button" class="btn btn-primary" @click="addHero()" v-bind:disabled="newHeroName.length === 0">Add Hero</button>
</template>

<script>
import { Hero } from "../model/Hero";

export default {
    name: 'Form',
    data() {
        return {
            newHeroName: '',
            newHeroDescription: ''
        };
    },
    emits: ['onNewHero'],
    methods: {
        addHero() {
            if (this.newHeroName.length > 0) {
                this.$emit('onNewHero', new Hero(this.newHeroName, this.newHeroDescription));
                this.newHeroName = '';
                this.newHeroDescription = '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>