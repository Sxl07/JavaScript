let random=[];
for (let index = 0; index < 10000; index++) {
    random[index]=Math.floor(Math.random()*10000);
}


for (let i = 1; i < random.length; i++) {
    for (let j = 0; j < random.length; j++) {
        if (random[i]<random[j]) {
            let temp=[];
            temp[i]=random[i];
            random[i]=random[j];
            random[j]=temp[i];
        }
        
    }
}

console.log(random);