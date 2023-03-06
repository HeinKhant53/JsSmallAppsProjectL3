//Get UI 
const hourel = document.querySelector('.hour');
const minuteel = document.querySelector('.minute');
const secondel = document.querySelector('.second');



function clock(){

    //Method 1
    var now = new Date();
    // console.log(now);//Tue Feb 28 2023 23:34:35 GMT+0630 (Myanmar Time)

    // 3600 seconds in 1hr
    // (h*3600)+ (m*60)+  (s*1)+ ms /1000 <get to second>
    var gettime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() * 1 + now.getMilliseconds() /1000;
    
    // console.log(gettime);//85107.762
    
    //change time into degree
    var hours = gettime / 60 /12 * 6;
    var minutes = gettime / 60 * 6;
    var seconds = gettime * 6;

    // console.log(hours,minutes,seconds);

    hourel.style.transform = `rotate(${hours}deg)`;
    minuteel.style.transform = `rotate(${minutes}deg)`;
    secondel.style.transform = `rotate(${seconds}deg)`;


}

// clock();

// setInterval(clock,1000);
// setInterval(clock,50);




function setclock(){
    const now = new Date();
    // console.log(now);
    // Wed Mar 01 2023 23:50:33 GMT+0630 (Myanmar Time)

    const hours = now.getHours();
    const getcvhours = hours % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    // Method 2
    // setrotation(hourel,hours/12);
    // setrotation(minuteel,minutes/60);
    // setrotation(secondel,seconds/60);


    //Method 3
    hourel.style.transform = `rotate(${scale(hours,0,12,0,360)}deg)`;
    minuteel.style.transform = `rotate(${scale(minutes,0,60,0,360)}deg)`;
    secondel.style.transform = `rotate(${scale(seconds,0,60,0,360)}deg)`;

}

function setrotation(handitem,rotation){
    // console.log(handitem,rotation);

    handitem.style.setProperty('--myrotation',rotation*360);
}

const scale = function(number,inmin,inmax,outmin,outmax){
    return (number - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}

setclock();
setInterval(setclock,1000);



// function scale(number,inmin,inmax,outmin,outmax){
//     return (number - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
// }