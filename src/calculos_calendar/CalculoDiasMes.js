
let currentDate;

/*dia que empieza el mes*/
function startDay(monthNumber) {
    let start = new Date(currentDate.getFullYear(), monthNumber - 1, 1);
    return ((start.getDay() - 1) == -1) ? 6 : start.getDay() - 1;
}


/*Anyo bisiesto*/
function isLeap() {
    return ((currentDate.getFullYear() % 100 !== 0) && (currentDate.getFullYear() % 4 == 0)
        || (currentDate.getFullYear() % 400 == 0));
}



/*total dias de mes*/
function getTotalDays(month) {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        return 31;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        return 30;
    } else {
        return isLeap() ? 29 : 28;
    }
}

function getArrayMes(espacios, totalDias) {
    let arrayMes = new Array();
    let contador = 0;
    let num_dia = 1;

    for (let a = 0; a < 42; a++) {
        if (contador <= espacios || num_dia > totalDias) {
            arrayMes.push(" ");
            contador++;
        } else {
            arrayMes.push("" + num_dia++);
        }
    }
    return arrayMes;
}

//return days in position of week from the month
export function getDaysOfMonth(mes, year) {
    currentDate = new Date(year, 0, 1);
    let numeroDias = getTotalDays(mes);
    let espacios = startDay(mes) - 1;

    return getArrayMes(espacios, numeroDias);
}
