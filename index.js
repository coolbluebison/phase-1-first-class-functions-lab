// Code your solution in this file!


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2) 
}



const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length-2,drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];




function createFareMultiplier(num) {
    const FareMultiplier = function(fare) {
        return num * fare;
    }
    return FareMultiplier
}



//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2)


//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

const fareTripler = createFareMultiplier(3)



function selectDifferentDrivers(drivers, param) {
    return param(drivers)
} 






































