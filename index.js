const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(things){
    return function (stuff){
        return things * stuff;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn){
    return driversToReturn(drivers);
}