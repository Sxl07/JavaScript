let poblacion = [];
let validos= [];
let noValidos=[];

for(let epa=0;epa<100;epa++){
 let counterA=0,counterD=0,diagonal=0;
 const chromosome = [];
while (chromosome.length < 8) {
    const random = Math.floor(Math.random() * 8);
    if (!chromosome.includes(random)) {
      chromosome.push(random);
    }
  }

for(let i = 0; i < 8; i++){
    if(chromosome[i] + 1 == chromosome[i + 1]){
        counterA++;
    }
    if(chromosome[i] + 1 == chromosome[i - 1]){
        counterA++;
    }
}

for(let i = 7; i >= 0; i--){
    if(chromosome[i] - 1 == chromosome[i - 1]){
        counterD++;
    }
    if(chromosome[i] - 1 == chromosome[i + 1]){
        counterD++;
    }
}

function detectDiagonals(chromosome) {
  const diagonals = {
    topLeftDiagonal: 0,
    topRightDiagonal: 0,
    bottomLeftDiagonal: 0,
    bottomRightDiagonal: 0,
  };

  for (let i = 0; i < chromosome.length; i++) {
    for (let j = i + 1; j < chromosome.length; j++) {
      if (chromosome[i] - i === chromosome[j] - j) {
        diagonals.topLeftDiagonal++;
      }
      if (chromosome[i] + i === chromosome[j] + j) {
        diagonals.topRightDiagonal++;
      }
      if (chromosome[i] + i === chromosome[j] + j - 2 * (j - i)) {
        diagonals.bottomLeftDiagonal++;
      }
      if (chromosome[i] - i === chromosome[j] - j + 2 * (j - i)) {
        diagonals.bottomRightDiagonal++;
      }
    }
  }
  diagonal=diagonals.topLeftDiagonal+diagonals.topRightDiagonal+diagonals.bottomLeftDiagonal+diagonals.bottomRightDiagonal;
  return diagonal;
}

let error=counterA+counterD+detectDiagonals(chromosome);
if (error==0) {
  console.log("se ha encontrado una solucion:",chromosome," en el cromosoma de la posicion",epa);
}else{
  noValidos.push(chromosome);
}
poblacion[epa]=chromosome;
}


let mutados=[];
let cantidad = Math.floor(Math.random() * 100) + 1;


function mutarArreglos(arreglos,cantidad) {
  
  let arreglosMutados = [];

  for (let i = 0; i < cantidad; i++) {
   
    let indice = Math.floor(Math.random() * arreglos.length);
    let arregloOriginal = arreglos[indice];

    let arregloMutado = [...arregloOriginal];
   
    let indice1 = Math.floor(Math.random() * arregloMutado.length);
    let indice2 = Math.floor(Math.random() * arregloMutado.length);
   
    let temp = arregloMutado[indice1];
    arregloMutado[indice1] = arregloMutado[indice2];
    arregloMutado[indice2] = temp;

    arreglosMutados.push(arregloMutado);
  }
  return arreglosMutados;
}

mutados=mutarArreglos(noValidos,noValidos.length);
function cruce(arreglos, porcentaje) {
  // Determinar la cantidad de arreglos que se cruzarán
  const cantidadCruces = Math.floor(arreglos.length * porcentaje / 100);
  
  // Realizar los cruces
  for (let i = 0; i < cantidadCruces; i++) {
    // Seleccionar dos arreglos aleatorios para cruzar
    const idx1 = Math.floor(Math.random() * arreglos.length);
    const idx2 = Math.floor(Math.random() * arreglos.length);
    const arr1 = arreglos[idx1];
    const arr2 = arreglos[idx2];
    
    // Seleccionar un punto de corte aleatorio
    const corte = Math.floor(Math.random() * arr1.length);
    
    // Cruzar los arreglos en el punto de corte
    const hijo1 = arr1.slice(0, corte).concat(arr2.slice(corte));
    const hijo2 = arr2.slice(0, corte).concat(arr1.slice(corte));
    
    // Reemplazar los arreglos originales por los hijos
    arreglos[idx1] = hijo1;
    arreglos[idx2] = hijo2;
  }
  
  // Retornar los arreglos modificados
  return arreglos;
}
let cruzados = cruce(mutados,65);


console.log(cruzados);
//utilizamos los arrays de manera indepediente para reanalizarlos
let subarreglo=[];
for (let i = 0; i < cruzados.length; i++) {
   subarreglo = cruzados[i];
}

let countA=0,countD=0,diagonales=0;
let errores=0;
for (let index = 0; index < subarreglo.length; index++) {
for(let i = 0; i < 8; i++){
  if(subarreglo[i] + 1 == subarreglo[i + 1]){
      countA++;
  }
  if(subarreglo[i] + 1 == subarreglo[i - 1]){
      countA++;
  }
}

for(let i = 7; i >= 0; i--){
  if(subarreglo[i] - 1 == subarreglo[i - 1]){
      countD++;
  }
  if(subarreglo[i] - 1 == subarreglo[i + 1]){
      countD++;
  }
}

function detectDiagonals(chromosome) {
  const diagonals = {
    topLeftDiagonal: 0,
    topRightDiagonal: 0,
    bottomLeftDiagonal: 0,
    bottomRightDiagonal: 0,
  };

  for (let i = 0; i < chromosome.length; i++) {
    for (let j = i + 1; j < chromosome.length; j++) {
      if (chromosome[i] - i === chromosome[j] - j) {
        diagonals.topLeftDiagonal++;
      }
      if (chromosome[i] + i === chromosome[j] + j) {
        diagonals.topRightDiagonal++;
      }
      if (chromosome[i] + i === chromosome[j] + j - 2 * (j - i)) {
        diagonals.bottomLeftDiagonal++;
      }
      if (chromosome[i] - i === chromosome[j] - j + 2 * (j - i)) {
        diagonals.bottomRightDiagonal++;
      }
    }
  }
  diagonales=diagonals.topLeftDiagonal+diagonals.topRightDiagonal+diagonals.bottomLeftDiagonal+diagonals.bottomRightDiagonal;
  return diagonales;
}

errores=countA+countD+detectDiagonals(subarreglo);
if (errores==0) {
  console.log("se ha encontrado una solucion:",subarreglo," en el cromosoma de la posicion",index);
}
}
