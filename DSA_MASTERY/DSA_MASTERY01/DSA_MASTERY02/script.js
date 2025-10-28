//1st question

// function isPrime(n) {
//     if(n<=1) return false;

//     for(let i=2; i<=Math.sqrt(n); i++){
//         if(n%i ===0)
//             return false;
//     }
//     return true;
// }

// console.log(isPrime(70));

// console.log(isPrime(1));




//2nd question

// function fibonacciSequence(n){
//     const seq = [0,1];

//     for(let i =2; i<n; i++){
//         seq.push(seq[i-1] + seq[i-2]);
//     }
//     return seq.slice(0,n);
// }

// console.log(fibonacciSequence(5));
// console.log(fibonacciSequence(18));


//3rd question

// function reverseNumber(num){
//     return parseInt(num.toString().split('').reverse().join(''),10)

// }

// console.log(reverseNumber(1253));
// console.log(reverseNumber(5602));




//4th question
// function gcd(a,b) {
//     while(b!==0){
//         const temp = b;
//         b= a%b;
//         a=temp;
//     }
//     return a;
    
// }


// function lcm(a,b){
//     return (a*b)
// }

// console.log(gcd(12,18));

// console.log(lcm(4,6));


//5th question
// function factors(n){
//     const result = [];
//     for(let i=1; i<=n; i++){
//         if(n%i ===0)
//             result.push(i);

//     }
//     return result;
// }

// console.log(factors(12));

// console.log(factors(15));


//6th question
// function isPythogoreanTriplet(a,b,c){
//     const sides = [a,b,c].sort((x,y) => x -y);

//     return sides[0] ** 2 + sides[1] ** 2===sides[2] **2;
// }

// console.log(isPythogoreanTriplet(3,4,5));
// console.log(isPythogoreanTriplet(3,3,7));



//7th question

// function bulbsOn(n){
//     const result = [];
//     for(let i =1; i<=n; i++){
//         const root = Math.sqrt(i);
//         if(Number.isInteger(root)){
//             result.push(i);
//         }


//     }
//     return result;
// }
// console.log(bulbsOn(3));
// console.log(bulbsOn(4));



























