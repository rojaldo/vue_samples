import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import { createStore } from 'vuex'
import { Hero } from './model/Hero'
import { Card } from './model/Card'

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
            }, beers: {
                beersList: [],
                range: [4, 6]
            }, trivial: {
                cards: []
            }
        }
    },
    getters: {
        trivialCards: state => state.trivial.cards,
        heroesList(state) {
            return [...state.heroes.heroesList]
        },
        newHero(state) {
            return state.heroes.newHero
        },
        beersList(state) {
            return [...state.beers.beersList]
        },
        range(state) {
            return [...state.beers.range]
        }
    },
    mutations: {
        setTrivialCards(state, cards) {
            state.trivial.cards = cards
        },
        addHero(state, hero) {
            state.heroes.heroesList.push(hero)
        },
        updateHeroesList(state, heroes) {
            state.heroes.heroesList = heroes
        },
        updateNewHero(state, hero) {
            state.heroes.newHero = hero
        },
        updateRange(state, range) {
            state.beers.range = range
        },
        updateBeersList(state, beers) {
            state.beers.beersList = beers
        }
    },
    actions: {
        async fetchTrivialCards(context) {
            const response = await fetch('https://opentdb.com/api.php?amount=10')
            const json = await response.json()
            let cards = [];
            json.results.forEach(element => { 
                cards.push(new Card(element))
            });
            context.commit('setTrivialCards', cards)
        },
        // action that fetches data from an external API
        async fetchBeers({ commit }) {
            if(!this.state.beers.beersList.length) {
                const response = await fetch('https://api.punkapi.com/v2/beers')
                const beers = await response.json()
                commit('updateBeersList', beers)    
            }
        },
        async updateHeroes({ commit }, heroes) {
            commit('updateHeroList', heroes)
        },
        async updateNewHero({ commit }, hero) {
            commit('updateNewHero', hero)
        },
        async updateRange({ commit }, range) {
            commit('updateRange', range)
        }
    }
})


createApp(App).use(router).use(store).mount('#app')
