//1
//Get Ui
const languages = ['Nodejs','Reactjs','Vuejs','Laravel'];
const colors = ['red','skyblue','violet','yellow'];
const gettxtani = document.querySelector('.txtani');
// console.log(gettxtani);

// console.log(languages[0]);                            //Nodejs
// console.log(languages[1]);
// console.log(languages[2]);

// console.log(languages.indexOf('Nodejs'));             // 0
// console.log(colors[languages.indexOf('Nodejs')]);     //red

//2
// Generator Function (iterate from 0 to 3)

// function* abc(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const testnum = abc();

// console.log(testnum.next().value); //1 
// console.log(testnum.next().value); //2
// console.log(testnum.next().value); //3
// console.log(testnum.next().value); //undefined


function* generator(){
     var index = 0;

     while(true){
        yield index++;

        if(index > 3){
            index = 0;
        }
     }
}

// const testnumber = generator();

// console.log(testnumber.next());  //obj {value:0,done: false}
// console.log(testnumber.next());  //obj {value:0,done: false}
// console.log(testnumber.next());  //obj {value:0,done: false}
// console.log(testnumber.next());  //obj {value:0,done: false}

// console.log(testnumber.next().value); //0
// console.log(testnumber.next().value); //1
// console.log(testnumber.next().value); //2
// console.log(testnumber.next().value); //3
// console.log(testnumber.next().value); //0


//3
let genfun = generator();

showwords(languages[genfun.next().value]);

function showwords(word){
    // console.log(word); //Nodejs
    // console.log(word[0]); //N
    // console.log(word[1]); //o

    gettxtani.textContent = '';
    // gettxtani.className = colors[languages.indexOf(word)];
    gettxtani.classList.add(colors[languages.indexOf(word)]);


    // gettxtani.textContent = word; //Nodejs
    // gettxtani.textContent = word[0]; //N
    // gettxtani.textContent = word[1]; //o

    // gettxtani.textContent += word[0]; //N
    // gettxtani.textContent += word[1]; //No


    //every time work <setInterval>
    var x = 0;
    let showintval = setInterval(function(){

        if(x >= word.length){
            clearInterval(showintval);

            deletewords();
        }else{
            gettxtani.textContent += word[x];
            x++;
        }

    },300);

}

//4
function deletewords(){
    let getword = gettxtani.innerText;
    // console.log(getword);

    let getlastindx =  getword.length-1;
    // console.log(getlastindx);

    //5
    let delintval = setInterval(function(){

        if(getlastindx >= 0){
            gettxtani.textContent = gettxtani.textContent.substring(0,gettxtani.textContent.length - 1);
            // console.log(getlastidx);
            getlastindx--;
        }else{
            //6
            gettxtani.classList.remove(colors[languages.indexOf(getword)]);
            
            showwords(languages[genfun.next().value]);
            clearInterval(delintval);
        }

    },300);
}

//7
let gettxtlights = document.querySelectorAll('.text-light');
console.log(gettxtlights);

gettxtlights.forEach(function(gettxtlight){
    console.log(gettxtlight);

    let arrtexts = gettxtlight.textContent.split('');
    console.log(arrtexts);

    gettxtlight.textContent = '';

    arrtexts.forEach(function(arrtext,idx){
        console.log(arrtext);

        //emphasized
        let newem = document.createElement('em');
        newem.textContent = arrtext;
        console.log(newem);
        console.log(idx);

        newem.style.animationDelay = `${idx*0.05}s`;

        gettxtlight.append(newem);
    });
});

//22AR