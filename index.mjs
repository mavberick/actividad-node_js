import colors from "picocolors";

///////////////////////-----------------------------//////////////////////
// 1- Ordenar de forma descendente
const numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];

const ejercicio1 = numeros.sort((current, next) => next - current);

console.log(colors.bgWhite("Ejercicio 1 >>>") + " " + ejercicio1);

///////////////////////-----------------------------//////////////////////
// 2- Ordenar por valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
const palabras = ["b", "h", "w", "e", "a"];

function ordenarPorAscii(arr) {
  return arr.sort(
    (current, next) => current.charCodeAt(0) - next.charCodeAt(0)
  );
}

console.log(
  colors.bgGreen("Ejercicio 2 >>>") + " " + ordenarPorAscii(palabras)
);

///////////////////////-----------------------------//////////////////////
/*3.- Crear una clase Alumno con los siguientes datos:
Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.*/
class Alumno {
  constructor(nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
  }

  obtenerPromedio() {
    const suma = this.calificaciones.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return suma / this.calificaciones.length;
  }
}

class Salon {
  constructor(alumnos) {
    this.alumnos = alumnos;
  }
  ordenarPorPromedio() {
    return this.alumnos.sort(
      (a, b) => b.obtenerPromedio() - a.obtenerPromedio()
    );
  }
}

const alumnos = [
  new Alumno("Juan", [90, 95, 85, 100, 90]),
  new Alumno("Ana", [100, 95, 100, 95, 100]),
  new Alumno("Luis", [80, 85, 80, 85, 80]),
];

const salon = new Salon(alumnos);
console.log(colors.bgMagenta("Ejercicio 3 >>>"));
console.log(salon.ordenarPorPromedio());

////////////////////------------------------------///////////////////////////
// 4- Ordenar segun cantidad de letras de menor a mayor
const arreglo4 = ["adios", "hola", "maximo", "uno", "despedida"];

function ordenarMenosAMas(array) {
  return array.sort((current, next) => current.length - next.length);
}

ordenarMenosAMas(arreglo4);
console.log(colors.bgYellow("Ejercicio 4 >>>") + " " + arreglo4);

///////////////////////-----------------------------//////////////////////
// 5- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
function ordenarPorDistanciaAlOrigen(coordenadas) {
  // Función para calcular la distancia euclidiana al origen
  function distanciaAlOrigen(coord) {
    return Math.sqrt(coord[0] ** 2 + coord[1] ** 2);
  }

  return coordenadas.sort(
    (a, b) => distanciaAlOrigen(a) - distanciaAlOrigen(b)
  );
}

const entrada = [
  [7, 3],
  [2, 2],
  [1, 0],
  [4, 3],
];
const salida = ordenarPorDistanciaAlOrigen(entrada);
console.log(colors.bgCyan("Ejercicio 5 >>>"));
console.log(salida); // [[1,0], [2,2], [4,3], [7,3]]
