<template>
  <div class="flex items-center justify-center p-2 text-lg drop-shadow-xl">

    <div class="ml-5">
      <label for="year">Year</label>
      <select v-model="selectYear" @change="changeYear" name="select-year" class="ml-2">
        <option v-for="(item, index) in years" :key="index" :value="item" :selected="index === 0">{{ item }}</option>
      </select>
    </div>

    <div class="ml-5">
      <label for="select-group">Group</label>
      <select v-model="selectGroup" name="select-group" class="ml-2">
        <option v-for="(item, index) in group" :key="index" :value="item" :selected="index === 0">{{ item }}</option>
      </select>
    </div>

    <div class="ml-5">
      <label for="select-subgrupo">SubGroup</label>
      <select v-model="selectSubGroup" name="select-subgroup" class="ml-2">
        <option v-for="(item, index) in subgroup" :key="index" :value="item" :selected="index === 0">{{ item }}</option>
      </select>
    </div>

    <div class="ml-20">
      <button @click="searchDays" class="rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-800 focus:outline-none px-5 py-2 text-sm font-medium text-white">Buscar</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { storeDays } from '../../stores/storeDays';

const stDays = storeDays();

const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
const group = [1, 2, 3, 4, 5]
const subgroup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const selectYear = ref(0);
const selectGroup = ref(1);
const selectSubGroup = ref('A')


onMounted(() => {
  const yearNow = new Date();
  selectYear.value = yearNow.getFullYear();
  stDays.setDaysYearCalendar();
});


const changeYear = () => {
      stDays.year = selectYear.value;
      stDays.setDaysYearCalendar();
    };


    const searchDays = () => {
      stDays.group = selectGroup.value;
      stDays.subgroup = selectSubGroup.value;
      stDays.setListFreeEmployee();
    }


</script>

<style scoped></style>
