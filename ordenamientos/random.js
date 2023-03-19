let random=[];
let counter=0;
console.time('random');
for (let index = 0; index < 10; index++) {
    random[index]=Math.floor(Math.random()*10000);
    counter+=1;
}
console.timeEnd('random');
console.log(counter);
console.log(random);
