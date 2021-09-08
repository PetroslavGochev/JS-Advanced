const motorwayLimit = 130;
const interstateLimit = 90;
const cityLimit = 50;
const residentialLimit = 20;

function radar (...args){
    let speed = parseInt(args[0]);
    let area = args[1];
    let diff = 0;
    if(area === 'city'){
        if(speed > cityLimit){
            diff = Math.abs(speed - cityLimit);
            if (diff <= 20){
                console.log('speeding');
            }
            else if(diff <= 40){
                console.log('excessive speeding');
            }
            else {
                console.log('reckless driving');
            }
        }
    }
    else if(area == 'residential'){
        if(speed > residentialLimit){
            diff = Math.abs(speed - residentialLimit);
            if (diff <= 20){
                console.log('speeding');
            }
            else if(diff <= 40){
                console.log('excessive speeding');
            }
            else {
                console.log('reckless driving');
            }
        }
    }
    else if(area == 'interstate'){
        if(speed > interstateLimit){
            diff = Math.abs(speed - interstateLimit);
            if (diff <= 20){
                console.log('speeding');
            }
            else if(diff <= 40){
                console.log('excessive speeding');
            }
            else {
                console.log('reckless driving');
            }
        }
    }
    else if(area == 'motorway'){
        if(speed > motorwayLimit){
            diff = Math.abs(speed - motorwayLimit);
            if (diff <= 20){
                console.log('speeding');
            }
            else if(diff <= 40){
                console.log('excessive speeding');
            }
            else {
                console.log('reckless driving');
            }
        }
    }
}

radar(200, 'motorway')