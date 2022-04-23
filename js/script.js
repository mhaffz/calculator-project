function insert (number) {
    document.querySelector("#result").innerHTML += number;
}

function clearResult () {
    document.querySelector("#result").innerHTML = "";
}

function backspace () {
    let result = document.querySelector("#result").innerHTML;
    document.querySelector("#result").innerHTML = result.substring(0, result.length - 1)
}

function calculate () {
    let result = document.querySelector("#result").innerHTML;
    if (result) {
        document.querySelector('#result').innerHTML = eval(result);
    }
    else {
        alert('Nada Para Calcular')
    }
}