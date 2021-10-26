import Vue from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: 
  {
    zahl: 10,
    name: "Senem",
    alter: 27,
    aufgabe: [
      {id:1, frage: "...etwas", gemacht: true},
      {id:2, frage: "...etwas", gemacht: false},
      {id:3, frage: "...etwas", gemacht: false},
      {id:4, frage: "...etwas", gemacht: true}
    ]
  },
  getters:
  {
    gemachteAufgaben(state)
    {
      return state.aufgabe.filter(a=> a.gemacht)
    },
    nichtGemachteAufgaben(state)
    {
      return state.aufgabe.filter(a=> !a.gemacht)
    }
  },
  mutations: 
  {
    addAufgabe(state, z)
    {
      state.aufgabe.push({id: state.aufgabe[state.aufgabe.length -1].id+1, frage: z.frage,  gemacht: z.gemacht})
    }
  },
  actions: {
  },
  modules: {
  }
})
