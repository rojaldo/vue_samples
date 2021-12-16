import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import { createStore } from 'vuex'
import { Hero } from './model/Hero'

const store = createStore({
    state() {
        return {
            heroes: {
                heroesList: [
                    new Hero("Batman", "Dark knight"),
                    new Hero("Superman", "Super hero"),
                    new Hero("Spiderman", "Spider hero"),
                    new Hero("Ironman", "Super hero")],
                newHero: new Hero()
            }
        }
    },
    getters: {
        heroesList(state) {
            return [...state.heroes.heroesList]
        },
        newHero(state) {
            return state.heroes.newHero
        }
    },
    mutations: {
        addHero(state, hero) {
            state.heroes.heroesList.push(hero)
        },
        updateHeroesList(state, heroes) {
            state.heroes.heroesList = heroes
        },
        updateNewHero(state, hero) {
            state.heroes.newHero = hero
        }
    },
    actions: {
        async updateHeroes({ commit }, heroes) {
            commit('updateHeroList', heroes)
        }
    }
})


createApp(App).use(router).use(store).mount('#app')
