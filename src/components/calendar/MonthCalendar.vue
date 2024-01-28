<template>
<div class="relative w-fit shadow-lg shadow-gray-600/80 sm:rounded-lg border-2 border-blue-400">
    <h3 class="flex justify-center font-medium"> {{ props.month }} </h3>
    <table ref="tableRef" class="text-xs text-center text-dark-800 dark:text-black-700">
        <thead class="text-base font-bold text-black-800 uppercase">
          <tr>
            <th v-for="item in weekDays" :key="item.id" class="font-medium px-4 py-1"> {{ item }} </th>
          </tr>
        </thead>
        <tbody>
             <tr v-for="(f, indiceFila) in filas" :key="indiceFila">
                <td class="text-md" v-for="(c, indiceColumna) in columnas" :key="indiceColumna" :class="getColor(props.month, array[indiceFila * columnas + indiceColumna])">
                      {{ array[indiceFila * columnas + indiceColumna] }}
                </td>
             </tr>
        </tbody>
    </table>
</div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { storeDays } from '../../stores/storeDays';

const stDays = storeDays();
let array = ref([]);
const tableRef = ref(null);


const props = defineProps({
    month: String,
    listaLibres: Array
});


onMounted(() => {
    const m = getNumberMonth(props.month);
    array.value = Object.values(stDays.daysOfMont[m-1]);
});


watch(() => stDays.year, () => {
  const m = getNumberMonth(props.month);
  array.value = Object.values(stDays.daysOfMont[m-1]);
  });


// const setColorTable = () => {
//   const table = tableRef.value;
//       if (table) {
//         const rows = table.getElementsByTagName('tr');

//          // Quitar todas las clases de las celdas antes de ejecutar el método nuevamente
//          for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
//           const cells = rows[rowIndex].getElementsByTagName('td');

//           for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
//             const cell = cells[cellIndex];
//             cell.classList.remove('libres'); // Remplaza "clase-a-remover" con el nombre de la clase que deseas quitar
//           }
//         }

//         // Recorrer la lista de valores y buscar coincidencias en las celdas de la tabla
//         for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
//           const cells = rows[rowIndex].getElementsByTagName('td');

//           for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
//             const cell = cells[cellIndex];
//             const cellText = cell.textContent;

//             // Lógica para comprobar si el valor está en la lista y agregar una clase CSS
//             if (getDayFree(cellText)) {
//               cell.classList.add('libres');
//             }
//           }
//         }
//       }
// }



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
  const month = getNumberMonth(m);
  for(const f of props.listaLibres){
    if( f.getMonth() === month && f.getDate() === day){
       return 'libres';
    }
  }
  // const found = props.listaLibres.value.some((fecha) => {
  //       console.log('fecha', fecha.getMonth(), fecha.getDate());
  //       fecha.getMonth() === month && fecha.getDate() === day;
  //   });
  //   if(found){
  //     return 'libres';
  //   }
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