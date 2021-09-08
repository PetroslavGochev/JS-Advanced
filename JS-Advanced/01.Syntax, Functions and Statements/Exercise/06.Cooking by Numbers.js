function cooking (...args){
    let number = parseInt(args[0]);
    for(let i = 0; i <= args.length; i++){
        let action = args[i];
        if(action === 'chop'){
            number /= 2;
            console.log(number);
        }
        else if(action === 'dice'){
            number = Math.sqrt(number);
            console.log(number);
        }
        else if(action == 'spice'){
            number++;
            console.log(number);
        }
        else if(action == 'bake'){
            number *= 3;
            console.log(number);
        }
        else if(action === 'fillet'){
            number -= number * 0.2;
            console.log(number);
        }
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');