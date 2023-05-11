<template>
<div class="relative w-fit shadow-lg shadow-gray-600/80 sm:rounded-lg border-2 border-blue-400">
    <h3 class="flex justify-center"> {{ props.month }} </h3>
    <table class="text-xs text-center text-dark-800 dark:text-black-700">
        <thead class="text-base font-bold text-black-800 uppercase">
            <tr>
                <th v-for="item in weekDays" :key="item.id" class="px-4 py-3"> {{ item }} </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(fila, indiceFila) in filas" :key="indiceFila">
              <td v-for="(valor, indiceColumna) in columnas" :key="indiceColumna">
              {{ daysMonth[indiceFila * columnas + indiceColumna] }}
            </td>
             </tr>

        </tbody>
    </table>
</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    month: String
});

const filas = 6;
const columnas = 7;
const weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
const daysMonth = ['', '', 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

</script>

<style lang="css" scoped>

</style>