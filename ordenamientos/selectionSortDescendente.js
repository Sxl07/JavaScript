let random=[];
let counter=1;
for (let index = 0; index < 100000; index++) {
    random[index]=Math.floor(Math.random()*10000);
}

console.time('selection');

for(let i = 0; i < random.length; i++) {
  let min = i;
  for(let j = i + 1; j < random.length; j++) {
      if(random[j] > random[min]) {
          min = j;
          counter+=1;
      }
  }
  if(min !== i) {
      let temp = random[i];
      random[i] = random[min];
      random[min] = temp;
      counter+=1;
  }
}

console.timeEnd('selection');
console.log(counter);
console.log(random);
