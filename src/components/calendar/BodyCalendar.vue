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
import { defineProps, watchEffect } from 'vue';
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
    let libres = [];
    let subgrupo = [];
    let subcomunes = [];
        const propValue = props.arrayData;
        if (propValue) {
            const y = Number.parseInt(props.arrayData.year);
            const g = Number.parseInt(props.arrayData.group);
            const s = props.arrayData.subgroup;

            if(!isNaN(y) && !isNaN(g)){
                clearList();
                libres = getListaLibresEmpleado(y, g);
                subgrupo = getListaSubgrupoEmpleado(y, g, s);
                subcomunes = getListaSubComunesEmpleado(y, g, s);
                // console.log('funcion', listaLibres);
                // console.log('funcion', listaSubgrupo);
                // console.log('funcion', listaSubComunes);
                filterList(libres, subgrupo, subcomunes);
            }
        }
    });

    const clearList = () => {
        listaLibres.splice(0);
        listaSubgrupo.splice(0);
        listaSubComunes.splice(0);
    }


const filterList = (libres, subgrupo, subcomunes) => {
   if(libres.length > 0 && subgrupo.length > 0 && subcomunes.length > 0){
      filterLibres(libres, listaLibres);
      filterLibres(subgrupo, listaSubgrupo);
      filterLibres(subcomunes, listaSubComunes)
   }
}

const filterLibres = (listaOrigen, listaDestino) => {
    listaOrigen.forEach((fecha) => {
        // Obtener el mes de la fecha
        const mes = fecha.getMonth();
        // Si el mes no existe en el objeto, se crea un array vacío para ese mes
        if (!listaDestino[mes]) {
            listaDestino[mes] = [];
        }
            listaDestino[mes].push(fecha);
        });
        console.log('libres', listaLibres)
    }



const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

</script>

<style lang="css" scoped>

</style>