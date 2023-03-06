//Get Ui
var getcurmonth = document.getElementById('curmonth');
var getcuryear = document.getElementById('curyear');
var getcaldays = document.getElementById('caldays');
var getuimonth = document.getElementById('months');
var getuiyears = document.getElementById('years');

var months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];

var startyear = 2020;
var endyear = 2030;

var month,year;

window.addEventListener('load',function(){
    // console.log("hay i am working");

    var getday = new Date();
    month = getday.getMonth();
    year = getday.getFullYear();

    // console.log(getday);
    // console.log(month);
    // console.log(year);

    getcurmonth.textContent = months[month];
    getcuryear.innerText = year;
});