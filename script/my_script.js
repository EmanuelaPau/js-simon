console.log('hello');

// creo una funzione che mi dice quanto tempo manca da una data 


function howMuchTimeFromDate(days, hours, minutes, seconds) {
    // I get the date
    const today = new Date();
    // I get the days
    const userDays = today.getDate();
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

console.log(howMuchTimeFromDate(26, 09, 30, 00));

// Days h1 
const daysDomElement = document.querySelector('.days-counter');
console.log(daysDomElement);
// Hours h1 
const hoursDomElement = document.querySelector('.hours-counter');
console.log(hoursDomElement);
// minutes h1
const minutessDomElement = document.querySelector('.minutes-counter');
console.log(daysDomElement);
// seconds h1
const secondsDomElement = document.querySelector('.seconds-counter');
console.log(secondsDomElement);


const clock = setInterval(timePassingToAddToPage, 1000, daysDomElement, hoursDomElement, minutessDomElement, secondsDomElement);

function timePassingToAddToPage(daysHtml, hoursHtml, minutesHtml, secondsHtml) {

    // Get time left 
    let timeLeftToAddToClock = (howMuchTimeFromDate(26, 09, 30, 00));

    // Add seconds to page 
    let secondsLeftToAddToClock = timeLeftToAddToClock[3];
    secondsHtml.innerHTML = secondsLeftToAddToClock;

    // Add minutes to page 
    let minutesLeftToAddToClock = timeLeftToAddToClock[2];
    minutesHtml.innerHTML = minutesLeftToAddToClock;

    // Add hours to page 
    let hoursLeftToAddToClock = timeLeftToAddToClock[1];
    hoursHtml.innerHTML = hoursLeftToAddToClock;

    // Add days to page 
    let daysLeftToAddToClock = timeLeftToAddToClock[0];
    daysHtml.innerHTML = daysLeftToAddToClock;
}
