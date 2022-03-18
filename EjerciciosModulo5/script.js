// Leccion 2 Variables > Inicializar variable string y otra numerica e imprimirlas en diferente linea

let nombre = "Erika Pech";
let promedio = 9.5;

console.log(`${nombre} \n ${promedio}`);

//Leccion 3 Operadores > Declarar 2 variables y mostrar el resultado de  resta, suma, multiplicacion y potencia

const num1 = 5;
const num2 = 2;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let potencia = num1 ** num2;

console.log(`La suma de ${num1} y ${num2} es ${suma}`);
console.log(`La resta de ${num1} y ${num2} es ${resta}`);
console.log(`La multiplicacion de ${num1} y ${num2} es ${multiplicacion}`);
console.log(`El ${num1} elevado a la potencia ${num2} es ${potencia}`);

// Leccion 4 operadores logico y de comparacion.
// 4.1 La salida de los siguientes operadores

//alert(null || 2 || undefined); // 2
//alert(alert(1) || 2 || alert(3)); // alert(1)  // alert(1) y alert(3)
//alert(1 && null && 2); // 1 y 2 // null
//alert(alert(1) && alert(2)); // 1 y 2 // 1 y undefined
//alert(null || (2 && 3) || 4); // 2 y 3 //3

// 4.2 Invertir la cadena y verificar la cantidad de determinado caracter

const cadenaEjem = "casa blanca";
const car = "a";

const cadenaRevertida = cadenaEjem.split("").reverse().join("");
console.log(cadenaRevertida);

function comprobarCar(cadena, car) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == car) {
      contador++;
    }
  }
  return contador;
}

console.log(
  ` El caracter ${car} se repite ${comprobarCar(
    cadenaEjem,
    car
  )} veces en la cadena ${cadenaEjem}`
);

// 4.3 Math > Crear un numero aleatrio entre el 1 y el 25 y dados dos numeros imprimir el mayor y el menor

let numeroAleatorio = Math.trunc(Math.random() * 25) + 1;
console.log(numeroAleatorio);

const numD1 = 5.55;
const numD2 = 61.4;

console.log(
  `El numero mayor es ${Math.round(
    Math.max(numD1, numD2)
  )} \n El numero menor es ${Math.round(Math.min(numD1, numD2))}`
);

// Leccion 5 > Devolver promocionado o no

const nota1 = parseInt(prompt("Ingrese nota 1"));
const nota2 = parseInt(prompt("Ingrese nota 2"));
const nota3 = parseInt(prompt("Ingrese nota 3"));

let media = nota1 + nota2 + nota3;
media = media / 3;

if (media > 7) {
  alert(`Promedio ${media}: Promocionado ✅`);
} else {
  alert(`Pormedio ${media}: No promocionado❌`);
}

//Leccion 6 Ciclos > Programa tabla hasta el 50

const numTabla = parseInt(prompt("Dame un numero para multiplicar"));

function tabla50(num) {
  let j = 1;

  while (j < 51) {
    console.log(`${j} x ${num} = ${j * num}`);
    j++;
  }
}

tabla50(numTabla);
