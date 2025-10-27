// //1st question
// let age = 7;

// if (age>=18){
//     console.log("You are an adult");
    
// }
// else{
//     console.log("You are a minor");
    
// }


// //2nd question

// let temp = 30;

// if(temp >=30){
//     console.log("It's Hot Outside");
    
// }
// else{
//     console.log("It's not too hot");
    
// }

// //3rd question

// let number = 99;

// if(number % 2 ===0){
//     console.log("The number is even");
    
// }
// else{
//     console.log("The number is odd");
    
// }

// //4th question

// let marks = 33;

// if(marks >= 33){
//     console.log("You passed the exam");
    
// }
// else{
//     console.log("You failed the exam");
    
// }


// // 5th question

// let ifrain = false;   // false means no raining, truth means raining  // 0 means false and 1 means truth

// if(ifrain){
//     console.log("Bring the umbrella");
    
// }
// else{
//     console.log("No need for umbrella");
    
// }

// // 6th question

// let time = 12;  // 2pm 

// if(time < 12){
//     console.log("Good Morning");
    
// }
// else if(time < 18) {   // 6pm
//   console.log("Good Afternoon");
  
// }
// else{
//     console.log("Good Night");
    
// }



//Complex questions of for loop
//1st complex question

// for(let i =1; i<=5; i++){
//     console.log(i);
    
// }

// 2nd question
// for(let m=2; m<=10; m+=2){
//     console.log(m);
    
// }


//3rd Question
// for(let i = 10; i >=1; i--){
//     console.log(i);
    
// }


//4th Question
// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

// for(let i=0; i<=alphabet.length; i++){
//     console.log(alphabet[i]);
    
// }

//5th question

// for(let i=1; i<=10; i+=2){
//     console.log(i);
    
// }
    

//6th question
// for(let i =1; i <=5; i++){
//     console.log('2X' + i +'=' + (2*i));
    
// }


//7th question
// for(let i=1; i<=10; i++){
//     console.log(i + 'squared is ' + (i *i));
    
// }


//8th question

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum += i;
//     console.log('Sum is' + sum);
// }


//9th question

// for(let i =1; i<=5; i++){
//     let stars= '';
//     for(let j =1; j<=i; j++){
//         stars += '*';
//     }
//     console.log(stars);
    
// }



//10th question

// for(let i =1; i<=10; i++){
//     if(i===2 || i ===8)
//         continue;
//     console.log(i);
    
// }



//.......................................................

// Array 1st Question
// const numbers = [1,2,3,4,5,6,7,8,9];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }


//2nd Question
// const arr= [100,200,300,400];

// let sum = 0;

// for(let i =0; i<arr.length; i++){
//     sum += arr[i]; // add each number to sum
// }

// console.log('sum:', sum);

// 3rd QUestion

// const fruits = ['Apple', 'ABnana', 'ACheery', 'AWatermalon'];

// for(let i =0; i<fruits.length; i++){
//     if(fruits[i].startsWith('A')){
//         console.log(fruits[i]);
        
//     }
// }


//4th Question
// const arr=[1,2,3,4];

// const revarr = [];

// for(let i =arr.length -1; i>=0; i--){
//     revarr.push(arr[i])
// }
// console.log(revarr);


//5th Question

// const arr= [5,7,8,9,10,11,12,13,14];

// for (let i=0; i<arr.length; i++){
//     if(arr[i]>=12){
//         console.log(arr[i]);
        
//     }
// }


//6th question

// const arr=[11,2,3,4,5,6,7,8,9];
// for(let i=0; i<arr.length; i++){
//     arr[i] +=7;  //Increase each element by 5


// }
// console.log(arr);


//7th question

// const arr=[2,4,239,8,5,16,10];

// let max = arr[0];

// for(let i=1; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]; //Update max of current is greater
//     }
// }
// console.log('Maximum:', max);



//8th question

// const arr = [2,3,4,5,2,6,6,2,4,2,7, 6, 6];


// let count =0;

// for(let i=0; i<arr.length; i++){

//     if(arr[i]===6){
//         count++;
//     }
// }

// console.log(
//     'number 6 appears:', count, 'times'
// );




//9th question

// const number =[1,2,3,4,5];

// const doubled =[];

// for(let i=0; i< number.length; i++){
//     doubled.push(number[i] * 2);
// }

// console.log(doubled)




//10th question

// const arr= [3,4,77,77,8,5,78, 8989, "Ash", 78];

// let found = false;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] ===3){
//         found = true;
//         break;
//     }
// }

// console.log('Contains 7:', found);












































