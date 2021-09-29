function createAssemblyLine(){
    const assemblyLine  = {
        hasClima:function(object) {
            object.temp = 21;
            object.tempSettings = 21;
            object.adjustTemp = function(){

                if(this.temp < this.tempSettings){
                    this.temp++;
                }
                if(this.temp > this.tempSettings){
                    this.temp--;
                }
            };
        },
        hasAudio: function(object){
            object.currentTrack = {
                name: null,
                artist: null,
            };
            object.nowPlaying = function(){
                if(this.currentTrack !== null){
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },
        hasParktronic: function(object){
            object.checkDistance = function(number){
                if(number < 0.1){
                    console.log('Beep! Beep! Beep!');
                }
                
                if(0.1 <= number && number < 0.25){
                    console.log('Beep! Beep!');
                }

                if(0.25 <= number && number < 0.5){
                    console.log('Beep!');
                }
            };
        }
    } 

    return assemblyLine;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);

