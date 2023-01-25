//Get UI
const getcontainer = document.querySelector('.container');
const getvideoscreen =  document.getElementById('videoscreen');
const prevbtn = document.getElementById('prev'),
        playbtn = document.getElementById('play'),
        nextbtn = document.getElementById('next'),
        stopbtn = document.getElementById('stop');

// For Range
const progress = document.getElementById('progress');


//For progress
// const getprogressctn = document.getElementById('progress-container');
// const progress = document.getElementById('progress');

const getopnfullscreen = document.querySelector('.openfullscreen'),
        getclsfullscreen = document.querySelector('.closefullscreen');

const getdisplaytime = document.getElementById('displaytime');
const gettitle = document.getElementById('title');

const videos = ['samplevideo1','samplevideo2'];
// console.log(videos[1]);

let curridx = 0;
loadvideo(videos[curridx]);

function loadvideo(vdo){
//      console.log(vdo); 
        getvideoscreen.src = `./source/${vdo}.mp4`;
        gettitle.textContent = vdo;
}

function playvdo(){
        playbtn.querySelector('i.fas').classList.remove('fa-play');
        playbtn.querySelector('i.fas').classList.add('fa-pause');

        // play() method -> came from video api
        getvideoscreen.play();
}

function pausevdo(){
        playbtn.querySelector('i.fas').classList.remove('fa-pause');
        playbtn.querySelector('i.fas').classList.add('fa-play');

        // pause() method -> came from video api
        getvideoscreen.pause();
}

function playpausevdo(){

        // paused keyword -> came from video api
        if(getvideoscreen.paused){
                playvdo();
        }else{
                pausevdo();
        }
}


function nextvdo(){
        curridx++;
        // console.log(curridx);

        if(curridx > videos.length-1){
                curridx = 0;
        }

        loadvideo(videos[curridx]);
        playvdo();
}

function previousvdo(){
        curridx--;
        // console.log(curridx);

        if(curridx < 0){
                curridx = videos.length-1;
        }

        loadvideo(videos[curridx]);
        playvdo();
}       

function stopvdo(){
        // currentTime -> came from video api

        getvideoscreen.currentTime = 0;
        pausevdo();
}

function updateprogress(e){
        // console.log('hay');

        // console.log(e.target);
        // console.log(this);
        // console.log(e.srcElement);
        // e.srcElement -> this , e.target (same) or for video,audio

        //Method 1
        // currentTime -> came from video api <start -> 0>
        // console.log(getvideoscreen.currentTime);

        //duration -> came from video api <start -> nall end -> video ye endtime> 
        // console.log(getvideoscreen.duration);

        // a litte lo a many sar kya
        // console.log(getvideoscreen.currentTime/getvideoscreen.duration * 100);

        //Method 2
        // const currentTime = e.target.currentTime;
        // const duration = e.target.duration;
        // console.log(currentTime,duration);

        //Method 3
        // e.target is object , currentTime is key
        // const {currentTime} = e.target;
        // const {duration} = e.target;
        // console.log(currentTime,duration);

        //Method 4 
        // const {currentTime,duration} = e.target;
        // console.log(currentTime,duration);

        //Method 5
        // const [currentTime,duration] = [e.target.currentTime,e.target.duration];
        // console.log(currentTime,duration);


        // For Range
        const [currentTime,duration] = [e.target.currentTime,e.target.duration];
         
        // cuz duration ka start yin not a number 
        if(getvideoscreen.currentTime === 0){
                progress.value = 0;
        }else{
                progress.value = (currentTime/duration) * 100;
        }




        let getmins = Math.floor(getvideoscreen.currentTime/60);

        if(getmins < 10){
                // getmins = '0' + getmins;
                getmins = '0' + String(getmins);
        }
        console.log(getmins);


        let getsecs = Math.floor(getvideoscreen.currentTime%60);

        if(getsecs < 10){
                //getsecs = '0' + getsecs;
                getsecs = '0' + String(getsecs);
        }
        console.log(getsecs);

        getdisplaytime.textContent = `${getmins}:${getsecs}`;
}       




function setprogress(){
        // console.log('hay');
        // console.log((progress.value*getvideoscreen.duration)/100);

        // For Range
        getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;
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

        getopnfullscreen.style.display = 'inline-block';
        getclsfullscreen.style.display = 'none';
}




playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);
stopbtn.addEventListener('click',stopvdo);

// For Range
//timeupdate -> for video,audio (video ye time)
getvideoscreen.addEventListener('timeupdate',updateprogress);

progress.addEventListener('click',setprogress);


getopnfullscreen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen);







// const name = 'aung aung';
// const age = 25;

// const [name,age] = ['hla hla',30];

// console.log('name is',name);
// console.log('age is',age);

// const bio = {
//         name : 'aung aung',
//         age : 19,
//         city : 'Yangon'
// }

// console.log(bio.name);
// console.log(bio.age);
// console.log(bio.city);

// const getname = bio.name;
// const getcity = bio.city;

// console.log(getname);
// console.log(getcity);

// const {name} = bio;  =  const name = bio.name;
// const {city} = bio;
// console.log(name);
// console.log(city);

// const {name,city} = bio;
// console.log(name);
// console.log(city);



