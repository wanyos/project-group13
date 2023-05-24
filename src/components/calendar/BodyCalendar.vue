<template>
    <div class="flex justify-center">
        <div class="grid grid-rows-6 grid-cols-3 w-auto">
            <div v-for="(m, index) in months" :key="index" class="flex justify-center ml-3 mr-3 mb-3">
                <MonthCalendar :month="m" :daysOfMonth="props.arrayMonths[index]"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import MonthCalendar from './MonthCalendar.vue';
import { defineProps, watchEffect, onMounted } from 'vue';
import { getListaLibresEmpleado, getListaSubgrupoEmpleado, getListaSubComunesEmpleado } from '../../calculos_calendar/FechasEmpleado.js';


const props = defineProps({
    arrayMonths: {
        type: Array,
        required: true
    },
    arrayData: {
        type: Array //year, group, subgroup
    }
});


let listaLibres = [];
let listaSubgrupo = [];
let listaSubComunes = [];


watchEffect(() => {
        const propValue = props.arrayData;
        if (propValue) {
            const y = Number.parseInt(props.arrayData.year);
            const g = Number.parseInt(props.arrayData.group);
            const s = props.arrayData.subgroup;
            console.log('valor y', y);
            console.log('valor g', g);
            console.log('valor s', s);

            listaLibres = getListaLibresEmpleado(y, g);
            listaSubgrupo = getListaSubgrupoEmpleado(y, g, s);
            //listaSubComunes = getListaSubComunesEmpleado(y, g, s);

            console.log('funcion', listaLibres);
            console.log('funcion', listaSubgrupo);
            console.log('funcion', listaSubComunes);
        }
    });





const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

</script>

<style lang="css" scoped>

</style>