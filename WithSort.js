function getRandomNumber() {
    return Math.floor(Math.random()*(999-100+1)+100);
}
let n = 10;
randomNoArr = new Array();

for(i = 0; i < n; i++) {
    randomNoArr.push(getRandomNumber());
}

console.log("Random Numbers: "+randomNoArr);

for(i = 0; i < n; i++) {
    for(j = 0; j < n; j++) {
        if(randomNoArr[i]<=randomNoArr[j]) {
            temp = randomNoArr[i];
            randomNoArr[i] = randomNoArr[j];
            randomNoArr[j] = temp;
        }
    }
}

console.log("Sorted Random Number Array: " + randomNoArr);
console.log("Second Largest Number: "+randomNoArr[n-2]);
console.log("Second Smallest Number: "+randomNoArr[n-9]);