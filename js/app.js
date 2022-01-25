let showInput = document.querySelector("#result");


function dataValue(val) {
    showInput.value += val;
}

function solve() {
    let value1 = showInput.value;
    let res = eval(value1);
    showInput.value = res;


}

function cleard() {
    showInput.value = "";
}