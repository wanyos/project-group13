import { defineStore } from "pinia";
import { getDaysOfMonth } from '../calculos_calendar/CalculoDiasMes.js';
import { getListaLibresEmpleado } from '../calculos_calendar/FechasEmpleado.js'
import { ref } from 'vue';

export const storeDays = defineStore('storeDays', () => {

//get array of days to paint every months of calendar, need a year
//get lists from employee, days free, subgroup and comunes
// list free --> need year and group
// list subgroup --> need year, group and subgroup
// list subcommons --> need year, group and subgroup

const yearNow = new Date();
const year = ref(yearNow.getFullYear());
const daysOfMont = ref([]);

const group = ref('');
const subgroup = ref('');

const listFreeEmployee = ref([]);


const setDaysYearCalendar = async () => {
    daysOfMont.value.splice(0);
    for(let m = 1; m < 13; m++) {
        const arrayMonth = getDaysOfMonth(m, year.value);
        daysOfMont.value.push(arrayMonth);
    }    
    // console.log('year store', year.value);
    // console.log('year funcion store', year.value);
    // console.log('array dias store', daysOfMont.value);
}

const setListFreeEmployee = () => {
    listFreeEmployee.value.splice(0);
    const gr = Number.parseInt(group.value);
    listFreeEmployee.value = getListaLibresEmpleado(year.value, gr);
    //console.log('valores', gr, year.value);
    //console.log('lista en store', listFreeEmployee.value);
}

const getListMonthDays = (month) =>{
    const fechasDelMes = listFreeEmployee.value.filter((fecha) => fecha.getMonth() === month);
    return fechasDelMes;
}


// const findDayFree = async (month, day) => {
//     console.log('dentro store find', month, day);
//      const found = listFreeEmployee.value.some((fecha) => {
//         console.log('fecha', fecha.getMonth(), fecha.getDate());
//         fecha.getMonth() === month && fecha.getDate() === day;
//     });
//     console.log('valor found', found);
//     return found;
// }





 return { year, group, subgroup, daysOfMont, listFreeEmployee, setDaysYearCalendar, setListFreeEmployee, getListMonthDays };
});