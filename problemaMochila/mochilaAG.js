const arreglo = [];

// Se crea un arreglo de 6 elementos (arreglos binarios de tamaño 8) con sus respectivos atributos "peso" y "beneficio"
for (let i = 0; i < 6; i++) {
  const binario = [];
  const pesoMax = 16;

  // Se asigna el valor "0" a todas las posiciones del arreglo binario
  for (let j = 0; j < 10; j++) {
    binario.push(0);
  }

// Se asigna el valor "1" a 5 posiciones diferentes aleatorias del arreglo binario
const indicesElegidos = [];
while (indicesElegidos.length < 4) {
  const indiceAleatorio = Math.floor(Math.random() * 10);
  if (!indicesElegidos.includes(indiceAleatorio)) {
    indicesElegidos.push(indiceAleatorio);
    binario[indiceAleatorio] = 1;
  }
}

  // Se asigna el peso y beneficio de acuerdo a la posición del "1" en el arreglo binario
  let peso = 0;
  let beneficio = 0;

  for (let l = 0; l < binario.length; l++) {
    if (binario[l] === 1) {
      switch (l) {
        case 0:
          peso += 2;
          beneficio += 18;
          break;
        case 1:
          peso += 3;
          beneficio += 28;
          break;
        case 2:
          peso += 4;
          beneficio += 12;
          break;
        case 3:
          peso += 6;
          beneficio += 9;
          break;
        case 4:
          peso += 2;
          beneficio += 25;
          break;
        case 5:
          peso += 3;
          beneficio += 24;
          break;
        case 6:
          peso += 4;
          beneficio += 17;
          break;
        case 7:
          peso += 6;
          beneficio += 5;
          break;
        case 8:
          peso += 3;
          beneficio += 21;
          break;
        case 9:
          peso += 6;
          beneficio += 14;
          break;
      }
    }

    //fitness
    var fitness=0;
    if (peso>pesoMax) {
        fitness=beneficio-peso;
    }else{
        fitness=beneficio;
    }
  }

  arreglo.push({
    binario,
    peso,
    beneficio,
    fitness
  });
}

// Se ordena el arreglo en orden descendente según el valor de "fitness"
arreglo.sort((a, b) => b.fitness - a.fitness);

// Se seleccionan los dos primeros elementos (con el valor de "fitness" más alto)
const padre1 = arreglo[0].binario;
const padre2 = arreglo[1].binario;

//Cruce

// Se calcula el punto de cruce (la mitad de los arreglos)
const puntoCruce = Math.floor(padre1.length / 2);

// Se crea un nuevo arreglo vacío para almacenar el resultado del cruce
const hijo1 = [];

// Se copia la primera mitad del primer arreglo en el hijo1
for (let i = 0; i < puntoCruce; i++) {
    hijo1.push(padre1[i]);
}

// Se copia la segunda mitad del segundo arreglo en el hijo1
for (let i = puntoCruce; i < padre2.length; i++) {
    hijo1.push(padre2[i]);
}

const hijo2 = [];
// Se copia la primera mitad del primer arreglo en el hijo1
for (let i = 0; i < puntoCruce; i++) {
    hijo2.push(padre2[i]);
  }
  
  // Se copia la segunda mitad del segundo arreglo en el hijo1
  for (let i = puntoCruce; i < padre2.length; i++) {
    hijo2.push(padre1[i]);
  }

  arreglo[4].binario.splice(0, arreglo[4].binario.length, ...hijo1);
  arreglo[5].binario.splice(0, arreglo[5].binario.length, ...hijo2);

//volver a calcular los valores de benefico, peso y fitness
function pesos(binario) {
  let peso=0;
for (let l = 0; l < binario.length; l++) {
    if (binario[l] === 1) {
        switch (l) {
            case 0:
              peso += 2;  
              break;
            case 1:
              peso += 3;            
              break;
            case 2:
              peso += 4;    
              break;
            case 3:
              peso += 6;            
              break;
            case 4:
              peso += 2;      
              break;
            case 5:
              peso += 3;             
              break;
            case 6:
              peso += 4;       
              break;
            case 7:
              peso += 6;      
              break;
            case 8:
              peso += 3;            
              break;
            case 9:
              peso += 6;            
              break;
            }
        }
    }
    return peso;
}

function beneficios(binario) {
let beneficio=0;
for (let l = 0; l < binario.length; l++) {
    if (binario[l] === 1) {
        switch (l) {
        case 0:
          beneficio += 18;
          break;
        case 1:
          beneficio += 28;
          break;
        case 2:
          beneficio += 12;
          break;
        case 3:
          beneficio += 9;
          break;
        case 4:
          beneficio += 25;
          break;
        case 5:
          beneficio += 24;
          break;
        case 6:
          beneficio += 17;
          break;
        case 7:
          beneficio += 5;
          break;
        case 8:
          beneficio += 21;
          break;
        case 9:
          beneficio += 14;
          break;
            }
        }
    }
    return beneficio;
}

arreglo[4].peso=pesos(arreglo[4].binario);
arreglo[5].peso=pesos(arreglo[5].binario);
arreglo[4].beneficio=beneficios(arreglo[4].binario);
arreglo[5].beneficio=beneficios(arreglo[5].binario);

function fit(peso,beneficio) {
 let Max=16;
 let Fitness=0;
    if (peso>Max) {
     Fitness=beneficio-peso;
 }else{
     Fitness=beneficio;
 }
 return Fitness;
}
arreglo[4].fitness=fit(arreglo[4].peso,arreglo[4].beneficio);
arreglo[5].fitness=fit(arreglo[5].peso,arreglo[5].beneficio);


//Mutar
// Se seleccionan tres posiciones aleatorias para cada arreglo
let posiciones1 = [];
let posiciones2 = [];

while (posiciones1.length < 3 || posiciones2.length < 3) {
  let pos1 = Math.floor(Math.random() * arreglo[2].binario.length);
  let pos2 = Math.floor(Math.random() * arreglo[3].binario.length);

  if (!posiciones1.includes(pos1)) {
    posiciones1.push(pos1);
  }

  if (!posiciones2.includes(pos2)) {
    posiciones2.push(pos2);
  }
}

// Se cambia el valor de los elementos en las posiciones seleccionadas para cada arreglo
for (let i = 0; i < posiciones1.length; i++) {
  let pos1 = posiciones1[i];
  let pos2 = posiciones2[i];

  let valor1 = arreglo[2].binario[pos1];
  let valor2 = arreglo[3].binario[pos2];

  arreglo[2].binario[pos1] = valor2;
  arreglo[3].binario[pos2] = valor1;
}

//reasignando los valores de peso, enficio y fitness para los mutados
arreglo[2].peso=pesos(arreglo[2].binario);
arreglo[3].peso=pesos(arreglo[3].binario);
arreglo[2].beneficio=beneficios(arreglo[2].binario);
arreglo[3].beneficio=beneficios(arreglo[3].binario);

arreglo[2].fitness=fit(arreglo[2].peso,arreglo[2].beneficio);
arreglo[3].fitness=fit(arreglo[3].peso,arreglo[3].beneficio);

console.log(arreglo);