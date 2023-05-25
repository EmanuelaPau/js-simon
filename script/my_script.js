console.log('hello');

function getUserDateAndTime() {
    // I get the date
    const today = new Date();
    // I get the hours
    const userHours = today.getHours();
    // I get the minutes
    const userMinutes = today.getMinutes();
    // I get the seconds
    const userSeconds = today.getSeconds();

    // Create an array with hours, minutes and seconds.
    const userDateList = [userHours, userMinutes, userSeconds];
    console.log(userDateList);

    return userDateList;
}

console.log(getUserDateAndTime);