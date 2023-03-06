//Get Ui
const getaudioscreen = document.getElementById('audioscreen');

const prevbtn = document.getElementById('prev'),
        playbtn = document.getElementById('play'),
        nextbtn = document.getElementById('next'),
        stopbtn = document.getElementById('stop');

const getprogressctn = document.getElementById('progress-container'),
        getprogress = document.getElementById('progress');

const getvolprogress = document.getElementById('volumeprogress');
const getdisplaytime = document.getElementById('displaytime');

const audio = ['sample1','sample2','sample3'];

let curridx = 0;

loadaudio(audio[curridx]);

function loadaudio(ado){
    getaudioscreen.src = `./source/${ado}.mp3`;

}

function playado(){
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    getaudioscreen.play();
}

function pauseado(){
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    getaudioscreen.pause();
}

function playpauseado(){
    if(getaudioscreen.paused){
        getaudioscreen.play();
        // playado();
    }else{
        getaudioscreen.pause();
        //pauseado();
    }
}

function previousado(){
    curridx--;

    if(curridx < 0){
        curridx = audio.length-1;
    }

    loadaudio(audio[curridx]);
    playado();
}

function nextado(){
    curridx++;

    if(curridx > audio.length-1){
        curridx = 0;
    }

    loadaudio(audio[curridx]);
    playado();
}

function stopado(){
    getaudioscreen.currentTime = 0;
    progress.style.width = `0%`;

    pauseado();
}

function updateprogress(e){
    const {currentTime} = e.target;
    const {duration} = e.target;

    if(getaudioscreen.currentTime === 0){
        progress.style.width = `0%`;
    }else{
        const progresspercent =(currentTime/duration) * 100;
        progress.style.width = `${progresspercent}%`;
    }

    // //forward
    let mins = Math.floor(getaudioscreen.currentTime / 60 );
    let secs = Math.floor(getaudioscreen.currentTime % 60 );

    //backword
    // let mins = Math.floor((duration - getaudioscreen.currentTime) / 60 );
    // let secs = Math.floor((duration - getaudioscreen.currentTime) % 60 );

    let minuteval = mins.toString().padStart(2,'0');
    let secondval = secs.toString().padStart(2,0);

    getdisplaytime.innerText = `${minuteval}:${secondval}`;


}
function setaudioprogress(e){
    const width = this.clientWidth;
    const clickx = e.offsetX;
    const duration = getaudioscreen.duration;

    getaudioscreen.currentTime = (clickx/width)*duration;

    // getaudioscreen.currentTime = (+(progress.style.width) * getaudioscreen.duration) / 100;
}

function volumecontrol(){
    //1 is default (100%)
    //0.5 half value (50%)
    //0 (0%)

    //volume came from audio api
    getaudioscreen.volume = getvolprogress.value / 100;

}


//2
getaudioscreen.addEventListener('play',playado);
getaudioscreen.addEventListener('pause',pauseado);
//4
getaudioscreen.addEventListener('timeupdate',updateprogress);


//1
playbtn.addEventListener('click',playpauseado);
//3
prevbtn.addEventListener('click',previousado);
nextbtn.addEventListener('click',nextado);
stopbtn.addEventListener('click',stopado);

//5
getprogressctn.addEventListener('click',setaudioprogress);
getvolprogress.addEventListener('change',volumecontrol);