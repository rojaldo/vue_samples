<template>
  <div id="calculator">
    <Display v-bind:input="display"></Display>
    <Keyboard @on-key="handleClick($event)"></Keyboard>
  </div>
</template>
<script>
import { CalculatorEngine } from "../../model/CalculatorEngine";
import Display from "./Display.vue";
import Keyboard from "./Keyboard.vue";

export default {
  name: 'Calculator',
  data() {
    return {
      display: '',
      ce: new CalculatorEngine()
    }
  },
  methods: {
    handleClick(value) {
      console.log('clicked');
      if (typeof value === 'number') {
        this.display = this.ce.handleNumber(value);
      } else if (typeof value === 'string') {
        this.display = this.ce.handleSymbol(value);
      }
    }
  },
  components: { Display, Keyboard }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
