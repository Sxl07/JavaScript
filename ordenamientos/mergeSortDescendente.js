let random=[];
let counter=1;
for (let index = 0; index < 100000; index++) {
    random[index]=Math.floor(Math.random()*10000);
}

console.time('merge');

let output = mergeSort(random);

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) { // Cambiamos el signo de comparación
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    counter+=1;
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.timeEnd('merge');
console.log(counter);
console.log(output);
