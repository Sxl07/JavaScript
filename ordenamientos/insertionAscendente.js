let random=[];
let counter=1;
for (let index = 0; index < 100000; index++) {
    random[index]=Math.floor(Math.random()*10000);
}

console.time('insertion');

for (let i = 1; i < random.length; i++) {
    let key = random[i];
    let j = i - 1;
    while (j >= 0 && random[j] > key) {
      random[j + 1] = random[j];
      j = j - 1;
      counter+=1;
    }
    random[j + 1] = key;
  }

console.timeEnd('insertion');
console.log(counter);
console.log(random);
