// var gettxtarea = document.getElementById('textarea');

// function boldfun(){
//     gettxtarea.style.fontWeight = 'bold';
// }

// function italicfun(){
//     gettxtarea.style.fontStyle = 'italic';
// }

// function underlinefun(){
//     gettxtarea.style.textDecoration = 'underline';
// }

// function lalgfun(){
//     gettxtarea.style.textAlign = 'left';
// }

// function calgfun(){
//     gettxtarea.style.textAlign = 'center';
// }

// function ralgfun(){
//     gettxtarea.style.textAlign = 'right';
// }

// function upcasefun(){
//     gettxtarea.style.textTransform = 'uppercase';
// }

// function lwcasefun(){
//     gettxtarea.style.textTransform = 'lowercase';
// }

// function capcasefun(){
//     gettxtarea.style.textTransform = 'capitalize';
// }

// function clearfun(){
//     gettxtarea.style.fontWeight = 'noraml';
//     gettxtarea.style.fontStyle = 'noraml';
//     gettxtarea.style.textDecoration = 'none';
//     gettxtarea.style.textAlign = 'left';

//     gettxtarea.value = '';
// }


var getdivarea = document.getElementById('divarea');
getdivarea.contentEditable = true;
getdivarea.spellcheck = false;

var getbtns = document.querySelectorAll('.btn');

getbtns.forEach(function(getbtn){
    getbtn.addEventListener('click',function(){
        // console.log('hay');

        // var getcommand = getbtn.getAttribute('data-abc');
        var getcommand = getbtn.dataset['command'];
        // console.log(getcommand);

        if(getcommand === 'cleartext'){
            getdivarea.innerHTML = '';
        }else if(getcommand === 'createLink' || getcommand === 'insertImage'){

                            // prompt(caption,default)
            let geturl = prompt('Enter your website link','https://');

            document.execCommand(getcommand,false,geturl);
        }else if(getcommand === 'paste'){
            // console.log(navigator);

            navigator.clipboard.readText().then(function(cliptext){
                // console.log(cliptext);
                // getdivarea.innerHTML = cliptext;
                getdivarea.innerHTML += cliptext;
            });
            
        }else if(getcommand === 'foreColor'){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === 'backColor'){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === 'fontName'){
            document.execCommand(getcommand,false,getbtn.value);
        }else{
            document.execCommand(getcommand,false,null);
        }
    });
});
// execCommand(A Command Name, A Show Default UI, A Value Argument);

//10EC
//11TX