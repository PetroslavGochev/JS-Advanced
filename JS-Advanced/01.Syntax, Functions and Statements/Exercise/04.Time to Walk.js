function walkToUniversity(steps, meters, speed){
    let distance = steps * meters;
    let speedMeterInSecond = speed / 3.6;
    let minutesForBreaks = Math.floor(distance / 500);
    let timeNeeded = distance / speedMeterInSecond + minutesForBreaks * 60;

    let hours = Math.floor(timeNeeded / 3600);
    let minutes = Math.floor(timeNeeded / 60);
    let seconds = Math.ceil(timeNeeded % 60);

    let result = hours < 10 ? `0${hours}:` :  `${hours}:`;
    result += minutes < 10 ? `0${minutes}:` :  `${minutes}:`;
    result +=  `${seconds}`;

    console.log(result);
}
walkToUniversity(2564, 0.70, 5.5);