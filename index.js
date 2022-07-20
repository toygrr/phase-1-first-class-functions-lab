const returnFirstTwoDrivers = (array) => array.slice(0, 2);

const returnLastTwoDrivers = (array) => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (x) =>
  function () {
    return x * x;
  };

const fareDoubler = (x) => x * 2;

const fareTripler = (x) => x * 3;

function selectDifferentDrivers(arrayOfDrivers, cb) {
  return cb(arrayOfDrivers);
}
