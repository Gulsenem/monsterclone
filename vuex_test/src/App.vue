<template>
  <div id="app">

    Die aufgabe, die Ich gemacht habe:

    <ul>
      <li v-for="a in gemachteAufgaben" :key="a.id">
            {{ a.id }}
      </li>
    </ul>
   
    Die aufgabe, die Ich NICHT gemacht habe:

    <ul>
      <li v-for="a in nichtGemachteAufgaben" :key="a.id">
            {{ a.id }}
      </li>
    </ul>
    <button @click="neueAufgabe">Aufgabe hinzufügen</button>
  </div>
</template>

<script>
export default {

  computed:
  {
    gemachteAufgaben() {
      return this.$store.getters.gemachteAufgaben
    },

    nichtGemachteAufgaben()
    {
      return this.$store.getters.nichtGemachteAufgaben
    }
    
  },
  methods:
  {
    neueAufgabe()
    {
      this.$store.commit("addAufgabe", {frage: '..etwas'})
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
