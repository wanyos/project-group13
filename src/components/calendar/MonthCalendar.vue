<template>
<div class="relative w-fit shadow-lg shadow-gray-600/80 sm:rounded-lg border-2 border-blue-400">
    <h3 class="flex justify-center font-medium"> {{ props.month }} </h3>
    <table class="text-xs text-center text-dark-800 dark:text-black-700">
        <thead class="text-base font-bold text-black-800 uppercase">
            <tr>
                <th v-for="item in weekDays" :key="item.id" class="font-medium px-4 py-1"> {{ item }} </th>
            </tr>
        </thead>
        <tbody>
             <tr v-for="(f, indiceFila) in filas" :key="indiceFila">
                <td class="text-md" v-for="(c, indiceColumna) in columnas" :key="indiceColumna" :class="getColor(props.month, props.daysOfMonth[indiceFila * columnas + indiceColumna])">
                    {{ props.daysOfMonth[indiceFila * columnas + indiceColumna] }}
                </td>
             </tr>
        </tbody>
    </table>

</div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'

const props = defineProps({
    month: String,
    daysOfMonth: Array,
    dataSelect: Array
});



const filas = 6;
const columnas = 7;
const weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

const mesesMapa = {
  enero: 1,
  febrero: 2,
  marzo: 3,
  abril: 4,
  mayo: 5,
  junio: 6,
  julio: 7,
  agosto: 8,
  septiembre: 9,
  octubre: 10,
  noviembre: 11,
  diciembre: 12
};


const getColor = (m, day) => {
    if(Number.parseInt(day) === 4){
        return 'sub1';
    }
}

const getNumberMonth = (month) => {
    const nMonth = mesesMapa[month.toLowerCase()] || -1;
    return nMonth;
}


</script>

<style lang="css" scoped>

.libres {
  color: white;
  background-color: #276cc2;
}

.subgrupo {
  color: white;
  background-color: black;
}

.sub1 {
  color: black;
  background-color: #e4de24;
}

.sub2 {
  color: white;
  background-color: #259924;
}

</style>