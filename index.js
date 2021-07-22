// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){
     return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (x){
    return function (value){
        x * value
    }

}

const fareDoubler = function (){
    return createFareMultiplier(2);
}

const fareTripler = function (){
    return createFareMultiplier(3);
}


const selectDifferentDrivers = function (drivers, callback){
    console.log(callback)
    return callback(drivers)
}

