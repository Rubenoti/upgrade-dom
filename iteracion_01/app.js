// Part 1.1
console.log("Primera Parte")
console.log(document.querySelector('.showme'));

//Part 1.2
console.log("Segunda Parte");
console.log(document.querySelector('#pillado').innerHTML);
//Part 1.3
console.log("Tercera Parte");
const paragraph = document.querySelectorAll('p');
for (let i = 0; i < paragraph.length; i++) {
    console.log(paragraph[i]);
}
//Part 1.4
console.log("Cuarta Parte");
const clase = document.querySelectorAll('.pokemon');
for (let i = 0; i < clase.length; i++) {
    console.log(clase[i]);
}
//Part 1.5


console.log("Quinta Parte");

const atri = document.querySelectorAll('[data-function="testMe"]');
for (let i = 0; i < atri.length; i++) {
    console.log(atri[i]);
}
//Part 1.6
console.log("Sexta Parte");
console.log(document.querySelectorAll('[data-function="testMe"]')[2].outerHTML);