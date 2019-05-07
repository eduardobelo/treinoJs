const OVERNIGHT_FIRE = 3.9;
const SUNDAY_FIRE = 3;
const NORMAL_FIRE = 2;
const SUNDAY_CODE = 0;
const OVERNIGHT_START = 22;
const OVERNIGHT_END = 6;

const calculateTrip = function (date, distance){
    if (isOvernight(date)){
        return calculateTotal(distance, OVERNIGHT_FIRE);
    }
    if (isSunday(date)){
        return calculateTotal(distance, SUNDAY_FIRE);
    }
    return calculateTotal(distance, NORMAL_FIRE); 
}
/*const calculateTrip = function (date, distance){
    if (isOvernight(date)) return calculateTotal(distance, OVERNIGHT_FIRE);
    if (isSunday(date)) return calculateTotal(distance, SUNDAY_FIRE);
    return calculateTotal(distance, NORMAL_FIRE);
}*/

const isOvernight = function (date){
    return date.getHours() > OVERNIGHT_START || date.getHours() < OVERNIGHT_END;
}

const isSunday = function (date){
    return date.getDay() === SUNDAY_CODE;
}

const calculateTotal = function(distance, fare){
    return distance * fare
}

console.log(calculateTrip(new Date("2018-09-20T23:00:00"), 10) === 39);
console.log(calculateTrip(new Date("2018-09-20T10:00:00"), 10) === 20);
console.log(calculateTrip(new Date("2018-09-23T10:00:00"), 10) === 30);