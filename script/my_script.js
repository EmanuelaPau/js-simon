console.log('hello');

/**
 * A function that gets the users current hour, minutes and seconds.
 * @returns the users current hour, minutes and seconds
 */

function getUserDateAndTime() {
    // I get the date
    const today = new Date();
    // I get the days
    const userDays = today.getDay();
    // I get the hours
    const userHours = today.getHours();
    // I get the minutes
    const userMinutes = today.getMinutes();
    // I get the seconds
    const userSeconds = today.getSeconds();

    // Create an array with hours, minutes and seconds.
    const userDateList = [userDays, userHours, userMinutes, userSeconds];
    console.log(userDateList);

    return userDateList;
}

// getUserDateAndTime();

// creo una funzione che mi dice quanto tempo manca da una data 

function howMuchTimeFromDate(days, hours, minutes, seconds) {
    // I get the date
    const today = new Date();
    // I get the days
    const userDays = today.getDay();
    // I get the hours
    const userHours = today.getHours();
    // I get the minutes
    const userMinutes = today.getMinutes();
    // I get the seconds
    const userSeconds = today.getSeconds();

    // How many seconds are left 
    let secondsLeft;
    // How many minutes are left 
    let minutesLeft;
    // How many hours are left 
    let hoursLeft;
    // How many days are left 
    let daysLeft;

    // how many seconds 
    if (seconds < userSeconds) {
        secondsLeft = 60 - userSeconds + seconds;
    } else {
        secondsLeft = seconds - userSeconds;
    }

    // how many minutes 
    if (minutes < userMinutes) {
        minutesLeft = 60 - userMinutes + minutes;
    } else {
        minutesLeft = minutes - userMinutes;
    }

    // how many hours 
    if (hours < userHours) {
        hoursLeft = 24 - userHours + hours;
    } else {
        hoursLeft = hours - userHours;
    }

    // how many days 

    daysLeft = days - userDays;

    let timeLeft = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

    return timeLeft;

}

console.log(howMuchTimeFromDate(25, 16, 10, 00));
