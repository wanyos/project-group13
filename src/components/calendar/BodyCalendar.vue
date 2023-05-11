<template>
    <div class="border-2 border-green-400">
        <div class="w-fit ml-auto mr-auto grid grid-rows-4 grid-flow-col gap-9 border-2 border-red-400">
            <MonthCalendar v-for="m in months" :key="m" :month="m"/>
        </div>
    </div>
</template>

<script setup>
import MonthCalendar from './MonthCalendar.vue';

const months = ['Enero', 'Abril', 'Julio', 'Octubre', 'Febrero', 'Mayo', 'Agosto', 'Noviembre', 'Marzo', 'Junio', 'Septiembre', 'Diciembre'];


</script>

<style lang="css" scoped>

</style>