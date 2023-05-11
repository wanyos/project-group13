<template>
  <div class="container flex items-center justify-center p-2 borer-2 border-green-500">

    <div class="ml-5">
      <label for="year">Year</label>
      <select name="select-year" class="ml-2">
        <option v-for="(item, id) in years" :key="id" value="item">{{ item }}</option>
      </select>
    </div>

    <div class="ml-5">
      <label for="select-group">Group</label>
      <select name="select-group" class="ml-2">
        <option v-for="(item, id) in group" :key="id" value="item">{{ item }}</option>
      </select>
    </div>

    <div class="ml-5">
      <label for="select-subgrupo">SubGroup</label>
      <select name="select-subgroup" class="ml-2">
        <option v-for="(item, id) in subgroup" :key="id" value="item">{{ item }}</option>
      </select>
    </div>

    <div class="ml-20">
      <button class="rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-800 focus:outline-none px-5 py-2 text-sm font-medium text-white">Buscar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const years = ref()
const group = ref()
const subgroup = ref()

years.value = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
group.value = [1, 2, 3, 4, 5]
subgroup.value = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
</script>

<style lang="sss" scoped></style>
