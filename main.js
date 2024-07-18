console.log('hola js')

const btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener('click', calcular)

function calcular(){
    const EDAD = document.getElementById('edad').value
    console.log('edad:', EDAD)
    console.log(document.getElementById('edad'));
    // alert('edad:', EDAD)
}