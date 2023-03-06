//Get UI
const getcontainer =  document.querySelector('.container');
const getvideoscreen = document.getElementById('videoscreen');

const prevbtn = document.getElementById('prev'), 
        playbtn = document.getElementById('play'),
        nextbtn = document.getElementById('next'),
        stopbtn = document.getElementById('stop');

//For Range
const progress = document.getElementById('progress');

//For Progress
// const getprogressctn = document.getElementById('progress-container');
// const progress = document.getElementById('progress');


const getopnfullscreen = document.querySelector('.openfullscreen'),
        getclsfullscreen = document.querySelector('.closefullscreen');

const getdisplaytime = document.getElementById('displaytime');
const gettitle = document.getElementById('title');

const videos = ['samplevideo1','samplevideo2'];

// console.log(videos);
// console.log(videos[1]);

let curridx = 1;

loadvideo(videos[curridx]);

function loadvideo(vdo){
        // console.log(vdo);

        getvideoscreen.src = `./source/${vdo}.mp4`;
        gettitle.textContent = vdo;
}

function playvdo(){
        playbtn.querySelector('i.fas').classList.remove('fa-play');
        playbtn.querySelector('i.fas').classList.add('fa-pause');

        //play() method came from vidoe api
        getvideoscreen.play();
}

function pausevdo(){
        playbtn.querySelector('i.fas').classList.remove('fa-pause');
        playbtn.querySelector('i.fas').classList.add('fa-play');

        //pause() method came from vidoe api
        getvideoscreen.pause();
}

function playpausevdo(){
        //paused keyword came from video api
        if(getvideoscreen.paused){
                playvdo();
        }else{
                pausevdo();
        }
}

function nextvdo(){
        curridx++;
        // console.log(curridx);
        if(curridx > videos.length -1){
                curridx = 0;
        }

        loadvideo(videos[curridx]);

        playvdo();
}

function prevvdo(){

        curridx -= 1;
        if(curridx < 0){
                curridx = videos.length-1;
        }

        loadvideo(videos[curridx]);

        playvdo();

}
function stopvdo(){
        //currentTime came from vidoe api
        getvideoscreen.currentTime = 0;
        pausevdo();
}

function updateprogress(e){
        // console.log(e.target);
        // console.log(e.srcElement);
        // console.log(this);

        //Method2
        // const currentTime = e.target.currentTime;
        // const duration = e.target.duration;
        // console.log(currentTime,duration);

        //Method3
        // const {currentTime} = e.target;
        // const {duration} = e.target;
        // console.log(currentTime,duration);

        //Method 4
        // const {currentTime,duration} = e.target;
        // console.log(currentTime,duration);

        //Method 5
        // const [currentTime,duration] = [e.target.currentTime,e.srcElement.duration];
        // console.log(currentTime,duration);

        //Method1
        // currentTime came from video api
        // console.log(getvideoscreen.currentTime);

        // duration came from video api
        // console.log(getvideoscreen.duration);

        // console.log((getvideoscreen.currentTime/getvideoscreen.duration) * 100);

        //For Range
        const [currentTime,duration] = [e.target.currentTime,e.target.duration];
        
        if(getvideoscreen.currentTime === 0){
                progress.value = 0;
        }else{
                progress.value = (currentTime/duration)* 100;
        }


        let getmins = Math.floor(getvideoscreen.currentTime/60);
        // console.log(getmins);
        if(getmins < 10){
                // getmins = '0' + getmins;
                getmins = '0' + String(getmins);
        }

        let getsecs = Math.floor(getvideoscreen.currentTime%60);
        // console.log(getsecs);
        if(getsecs < 10){
                // getsecs = '0' + getsecs;
                getsecs = '0' + String(getsecs);
        }

        // getdisplaytime.textContent = `${getmins}:${getsecs}`;

        // let mins = Math.floor(getvideoscreen.currentTime / 60);
        // let secs = Math.floor(getvideoscreen.currentTime % 60);

        //backword
        // let mins = Math.floor((duration - getaudioscreen.currentTime) / 60 );
        // let secs = Math.floor((duration - getaudioscreen.currentTime) % 60 );


        // let minuteval = mins.toString().padStart(2,'0');
        // let secondval = secs.toString().padStart(2,'0');

        // getdisplaytime.textContent = `${minuteval}:${secondval}`;





}

function setprogress(e){
        // console.log('hay');
        // console.log((progress.value*getvideoscreen.duration)/100);

        //For Range
        getvideoscreen.currentTime = (progress.value * getvideoscreen.duration) /100;


        //For Progress
        // const width = this.clientWidth;
        // const clickx = e.offsetX;
        // const duration = getvideoscreen.duration;

        // getvideoscreen.currentTime = (clickx/width) * duration;
}

function openfullscreen(){

        if(getcontainer.requestFullscreen){
                getcontainer.requestFullscreen();
        }else if(getcontainer.mozRequestFullscreen){
                getcontainer.mozRequestFullscreen();
        }else if(getcontainer.webkitRequestFullscreen){
                getcontainer.webkitRequestFullscreen();
        }else if(getcontainer.msRequestFullscreen){
                getcontainer.msRequestFullscreen();
        }

        getopnfullscreen.style.display = 'none';
        getclsfullscreen.style.display = 'inline-block';

}

function closefullscreen(){
        if(document.exitFullscreen){
                document.exitFullscreen();
        }else if(document.mozCancelFullscreen){
                document.mozCancelFullscreen();
        }else if(document.webkitExitFullscreen){
                document.webkitExitFullscreen();
        }else if(document.msExitFullscreen){
                document.msExitFullscreen();
        }

        getopnfullscreen.style.display = 'none';
        getclsfullscreen.style.display = 'inline-block';
}

playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',prevvdo)
stopbtn.addEventListener('click',stopvdo);

getvideoscreen.addEventListener('timeupdate',updateprogress);

// For Range
progress.addEventListener('click',setprogress);

getopnfullscreen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen);












// video api came from
//paused <-key
//currentTime
//duration
//play() <-method
//pause()
//timeupdate <-addEventListener


// e.srcElement -> src par tal tag bal ya 
//e.srcElement = e.target = this



//const name = 'aung aung';
//const age = 25;

// const [name,age] = ['hla hla',30];

// console.log('name is ',name);
// console.log('age is ',age);

// const bio = {
//         name : 'aung aung',
//         age: 40,
//         city: 'yangon'
// }

// console.log(bio.name);
// console.log(bio.age);
// console.log(bio.city);

// const getname = bio.name;
// const getcity = bio.city;
// console.log(getname);
// console.log(getci);

// const {name} = bio;
// const {city} = bio;
// const {name,city} = bio;
// console.log(name);
// console.log(city);


