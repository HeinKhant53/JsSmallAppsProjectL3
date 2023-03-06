//Get Ui
const balance = document.getElementById('balance');
const moneydeb = document.getElementById('money-deb');
const moneycrd = document.getElementById('money-crd');

const getform = document.getElementById('form');
const gettranstatuses = document.querySelectorAll('.form-check-input');
const getamount = document.getElementById('amount');
const getdate = document.getElementById('date');
const getremark = document.getElementById('remark');

const openbtn = document.getElementById('open-btn');
const gethisbox = document.querySelector('.history-box');
const getlistgroup = document.getElementById('list-group');



let getlsdatas = JSON.parse(localStorage.getItem('transcations'));
let gethistories = localStorage.getItem('transcations') !== null ? getlsdatas : [];


function init(){
    getlistgroup.innerHTML = '';
    //Method1
    // dummydatas.forEach(function(dummydata){
        // console.log(dummydata);

        // addtoui(dummydata);
    // });

    //Method2
    // dummydatas.forEach(dummydata => addtoui(dummydata));

    //Method3
    // dummydatas.forEach(addtoui()); # error
    // dummydatas.forEach(addtoui);
    gethistories.forEach(addtoui);
}

init();

//Create li to ul

function addtoui(transaction){
    // console.log(transaction);
    // console.log(transaction.amount, typeof transaction.amount);

    const newli = document.createElement('li');

    newli.className = 'list-group-item';

    newli.innerHTML = `${transaction.remark} <span>${transaction.amount}</span><span>${transaction.date}</span><button type="button" class="delete-btn">&times;</button>`;

    newli.classList.add(transaction.transtatus === '+' ? 'inc' : 'dec');
    // console.log(newli);

    getlistgroup.appendChild(newli);

    totalvalue();

}

function generateidx(){
    return Math.floor(Math.random() * 100000);
}



var sign = '-';

gettranstatuses.forEach(function(gettranstatus){
    gettranstatus.addEventListener('change',function(){
        // console.log(this.value);

        if(this.value === 'debit'){
            sign = '+';
        }else if(this.value === 'credit'){
            sign = '-';
        }
    });
});

function amount(){
    return sign === '-' ? Number(-getamount.value) : Number(+getamount.value);
}

function totalvalue(){
    const amounts = gethistories.map(gethistory => gethistory.amount);
    // console.log(amounts);

    //Method1
    // const result = amounts.reduce(function(total,currentValue){
    //     return total+= currentValue;
    // },0).toFixed(2);
    // console.log(result);

    //Method2
    const totalresult = amounts.reduce((total,currentValue)=>(total+=currentValue),0).toFixed(2);

    const debitresult = amounts.filter(amount=>amount > 0).reduce((total,currentValue)=>(total+=currentValue),0).toFixed(2);
    const creditresult = amounts.filter(amount=>amount < 0).reduce((total,currentValue)=>(total+=currentValue),0).toFixed(2);
    
    // console.log(totalresult); 
    // console.log(debitresult);
    // console.log(creditresult);

    balance.innerText = `${totalresult}`;
    moneydeb.textContent = `${debitresult}`;
    moneycrd.textContent = `${creditresult}`;




}

totalvalue();

function newtransaction(e){
    // console.log('hay');

    if(isNaN(getamount.value) || getamount.value.trim() === '' || getdate.value.trim() === '' || getremark.value.trim() === ''){
        window.alert('Ohh!! Some data are missing.');
    }else{
        // console.log('working');

        // {id:1,transtatus:'+',amount:1000,date:"2023-01-20",remark:'Petty Cash'},

        const transaction = {
            id: generateidx(),
            transtatus: sign,
            amount: amount(),
            date: getdate.value,
            remark: getremark.value
        }
        // console.log(transaction);

        addtoui(transaction);

        gethistories.push(transaction);
        updatelocalstorage();


        getamount.value = '';
        getdate.value = '';
        getremark.value = '';

        getamount.focus();
    }
    e.preventDefault();
}
getform.addEventListener('submit',newtransaction);


function updatelocalstorage(){
    localStorage.setItem('transcations',JSON.stringify(gethistories));
}



// array.reduce(function(total,currentValue,currentIndex,array){},initialValue);

var myarrs = [10,20,30,40,50,60,70,80,90,100];

var  result = myarrs.reduce(function(total,currentValue,currentIndex,arr){
   
    // console.log('this is total = '+ total); //0 undefined9 <use second parameter>
    // console.log('this is total = '+ total); //1 undefined9 <use second parameter = 1>
    // console.log('this is total = '+ total); //10 undefined9 <no second parameter>

    // console.log('this is current value = '+ currentValue); //10 to 100 undefined <use second parameter = 0>
    // console.log('this is current value = '+ currentValue); //20 to 100 undefined < no use second parameter>

    // console.log('this is current index = '+ currentIndex); //0 to 9 undefined <use second parameter = 0>
    // console.log('this is current index = '+ currentIndex); //1 to 9 undefined <no use second parameter>

    // console.log(arr);

    total += currentValue;

    return total;

},0)
// console.log(result);
