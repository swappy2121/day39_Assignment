var arrayNum = [6, -5, -1];
var sum = 0;
for(i=0; i<arrayNum.length; i++) {
    sum = sum + arrayNum[i];
}

if(sum == 0) {
    console.log("Sum of 3 Integer is ZERO")
} else {
    console.log("Sum of 3 Integer is Not ZERO");
}