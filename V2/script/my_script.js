console.log('hello');

/**
 * A function that gives you how much time is left from today to a given date in Milliseconds
 * @param date The date you want to get Ex.May 26, 2023 09: 30: 00
 */
function getHowMuchMsFromDate(date) {
    const countdownDate = new Date(date);
    const countdownDateInMs = countdownDate.getTime();
    console.log(countdownDate);
    console.log(countdownDateInMs);

    const todayDate = new Date();
    const todayDateInMs = todayDate.getTime();
    console.log(countdownDate);
    console.log(countdownDateInMs);

    const howMuchTimeFromDate = parseInt(countdownDateInMs) - parseInt(todayDateInMs);
    console.log(howMuchTimeFromDate);

    return howMuchTimeFromDate;
}

function convertMsToHM(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds = seconds % 60;

    minutes = minutes % 60;

    hours = hours % 24;

    let daysSecondsMinutesHoursList = [days, hours, minutes, seconds]
    return daysSecondsMinutesHoursList;
}


// days h1 
const daysDomElement = document.querySelector('.days-counter');

// Hours h1 
const hoursDomElement = document.querySelector('.hours-counter');

// minutes h1
const minutessDomElement = document.querySelector('.minutes-counter');

// seconds h1
const secondsDomElement = document.querySelector('.seconds-counter');

let newHowMuchMsAreLeftFromDate = getHowMuchMsFromDate('May 26, 2023 09: 30: 00');

// let modifiedHowMuchMsAreLeftFromDate;

const clock = setInterval(timePassingToAddToPage, 1000);

function timePassingToAddToPage() {

    let countdownList = convertMsToHM(newHowMuchMsAreLeftFromDate);

    let countdownDays = countdownList[0];
    daysDomElement.innerHTML = countdownDays;

    let countdownHours = countdownList[1];
    hoursDomElement.innerHTML = countdownHours;

    let countdownMinutes = countdownList[2];
    minutessDomElement.innerHTML = countdownMinutes;

    let countdownSeconds = countdownList[3];
    secondsDomElement.innerHTML = countdownSeconds;

    newHowMuchMsAreLeftFromDate = newHowMuchMsAreLeftFromDate - 1000;
}

