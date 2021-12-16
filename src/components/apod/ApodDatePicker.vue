<template>
    <div>
        <Datepicker v-model="date" @update:modelValue="updateDate()"></Datepicker>
    </div>
</template>

<script>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
export default {
    setup() {
        return {}
    }, 
    data() {
        return {
            date: new Date()
        }
    },
    methods:{
        updateDate(){
            console.log(this.date);
            this.$emit('onUpdateDate', this.date);
        }
    }, components: { Datepicker },
    emits: ['onUpdateDate']
}
</script>

<style lang="scss" scoped>
</style>