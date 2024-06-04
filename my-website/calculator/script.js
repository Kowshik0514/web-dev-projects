const display = document.getElementById("display");
function appendtodisplay(input) {
    if(display.value=="Error") display.value="";
    display.value += input;
}
function calculate(){
    if(display.value=="Error"){
        display.value="Error";
        return;
    }
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}
function clearall(){
    display.value="";
}
function backspace(){
    if(display.value=="") ;
    else {
        display.value=display.value.substring(0,display.value.length-1);
    }
}