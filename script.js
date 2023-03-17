let result = document.getElementById("result");

function getResult(value) {
    if (value === "=") {
        result.value = eval(result.value);
    } else if (value === "C") {
        result.value = "";
    } else {
        result.value += value;
    }
}

function clearDisplay() {
    result.value = "";
}
function backspace() {
    result.value = result.value.slice(0, -1);
}