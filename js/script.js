const displayOne = document.getElementById("displayOne");
const displayCalculate = document.getElementById("display");

let calculator = document.getElementById("calculator");
let colorBtn = document.querySelector(".color");

function number(input){
    displayOne.value += input;
}

function clearDisplay(){
    displayOne.value = "";
    displayCalculate.value = "";
}

function clearLastNum(){
    displayOne.value = displayOne.value.slice(0, -1);
}

function calculate(){
    displayCalculate.value = eval(displayOne.value);
}

 function changeThem(){
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        colorBtn.innerHTML = "Dark";
    }else{
        colorBtn.innerHTML = "Light";

    }
 }


