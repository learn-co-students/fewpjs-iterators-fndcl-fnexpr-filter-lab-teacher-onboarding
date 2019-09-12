// Code your solution here
function findMatching(driverArr, str) {
    return driverArr.filter(driver => {
        return driver.toLowerCase() === str.toLowerCase();
    });
};

function fuzzyMatch(driverArr, str) {
    return driverArr.filter(driver => {
        return driver[0] == str[0];
    });
};

function matchName(driverArr, str) {
    return driverArr.filter(driver => {
        return driver["name"] === str;
    });
};