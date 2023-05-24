<template>
    <div class="flex flex-col w-full mx-auto">
        <div>
            <MenuCalendar @dataSearch="setDataSearch"/>
        </div>
        <div>
            <BodyCalendar :arrayMonths="daysOfMont" :arrayData="dataSelect"/>
        </div>

    </div>
</template>

<script setup>
import MenuCalendar from '../components/calendar/MenuCalendar.vue';
import BodyCalendar from '../components/calendar/BodyCalendar.vue';
import { getDaysOfMonth } from '../calculos_calendar/CalculoDiasMes.js';   //param --> month, year
import { onMounted, ref, reactive } from 'vue'

const daysOfMont = ref([[],[],[],[],[],[],[],[],[],[],[],[]]);
const dataSelect = reactive({
    year: String,
    group: String,
    subgroup: String
});

onMounted(() => {
    daysOfMont.value.splice(0);
    const fechaActual = new Date();
    const yearNow = fechaActual.getFullYear();

    dataSelect.year = yearNow.toString();
    dataSelect.group = '1';
    dataSelect.subgroup = 'A';

    for(let m = 1; m < 13; m++) {
        const arrayMonth = getDaysOfMonth(m, yearNow);
        daysOfMont.value.push(arrayMonth);
    }    
});


//in the param --> year, group, subgroup
  const setDataSearch = (arrayData) => {
    dataSelect.year = arrayData[0];
    dataSelect.group = arrayData[1];
    dataSelect.subgroup = arrayData[2];

    //array empty content
    daysOfMont.value.splice(0);
    for(let m = 1; m < 13; m++) {
        const arrayMonth = getDaysOfMonth(m, arrayData[0]);
        daysOfMont.value.push(arrayMonth);
    }
 }

 


</script>

<style lang="css" scoped>

</style>