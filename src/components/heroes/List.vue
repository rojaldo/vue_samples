<template>
        <ul class="list-group mt-3">
            <li class="list-group-item" v-for="(hero, index) in myheroes" :key="index"> <b>{{hero.name}}</b> {{hero.description}} </li>
        </ul>

</template>

<script>
export default {
    name: 'List',
    props: ['myheroes'],
}
</script>

<style lang="scss" scoped>

</style>