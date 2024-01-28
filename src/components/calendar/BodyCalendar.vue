<template>
    <div class="flex justify-center">
        <div class="grid grid-rows-6 grid-cols-3 w-auto">
            <div v-for="(m, index) in months" :key="index" class="flex justify-center ml-3 mr-3 mb-3">
                <MonthCalendar :month="m" :listaLibres="stDays.getListMonthDays(index)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import MonthCalendar from './MonthCalendar.vue';
import { ref, onMounted } from 'vue';
import { storeDays } from '../../stores/storeDays';

const stDays = storeDays();

const month = ref();

let listaLibres = [];
let listaSubgrupo = [];
let listaSubComunes = [];


onMounted(() => {
    // arrayDays.value = stDays.daysOfMont;
    // console.log('body', arrayDays.value);
    // console.log('pirmer mes', arrayDays.value[0]);
    // const array = Object.values(arrayDays.value[0]);
    // console.log('array', array);
    // arrayOfArrays = arrayDays.value.map(obj => Object.values(obj));
    // console.log('final', arrayOfArrays);
    stDays.setListFreeEmployee();
});


// watchEffect(() => {
//     let libres = [];
//     let subgrupo = [];
//     let subcomunes = [];
//         const propValue = props.arrayData;
//         if (propValue) {
//             const y = Number.parseInt(props.arrayData.year);
//             const g = Number.parseInt(props.arrayData.group);
//             const s = props.arrayData.subgroup;

//             if(!isNaN(y) && !isNaN(g)){
//                 clearList();
//                 libres = getListaLibresEmpleado(y, g);
//                 subgrupo = getListaSubgrupoEmpleado(y, g, s);
//                 subcomunes = getListaSubComunesEmpleado(y, g, s);
//                 // console.log('funcion', listaLibres);
//                 // console.log('funcion', listaSubgrupo);
//                 // console.log('funcion', listaSubComunes);
//                 filterList(libres, subgrupo, subcomunes);
//             }
//         }
//     });


const filterList = (libres, subgrupo, subcomunes) => {
    if (libres.length > 0 && subgrupo.length > 0 && subcomunes.length > 0) {
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
}



const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

</script>

<style lang="css" scoped></style>