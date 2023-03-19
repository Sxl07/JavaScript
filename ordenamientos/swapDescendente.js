let random=[];
let counter=1;
for (let index = 0; index < 100000; index++) {
    random[index]=Math.floor(Math.random()*10000);
}

console.time('swap');
for (let i = 1; i < random.length; i++) {
    for (let j = 0; j < random.length; j++) {
        if (random[i]>random[j]) {
            let temp=[];
            temp[i]=random[i];
            random[i]=random[j];
            random[j]=temp[i];
            counter+=1;
        }
    }
}
console.timeEnd('swap');
console.log(counter);
console.log(random);
