<template>
    <div class="container flex flex-col w-full mx-auto border-2 border-blue-400">
        <div>
            <!-- <h1 class="border-2 border-orange-500 inline">Calendar</h1> -->
            <MenuCalendar/>
        </div>
        
        <div>
            <BodyCalendar/>
        </div>

    </div>
</template>

<script setup>
import MenuCalendar from '../components/calendar/MenuCalendar.vue';
import BodyCalendar from '../components/calendar/BodyCalendar.vue';
</script>

<style lang="css" scoped>

</style>