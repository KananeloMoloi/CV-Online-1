let num1= parseInt(prompt("Please enter the first number?: "));
let num2= parseInt(prompt("Please enter the second number?: "));
let num3= parseInt(prompt("Please enter the third number?: "));

let biggest;

biggest= Math.max(num1,num2);
biggest= Math.max(num2,num3);
biggest= Math.max(num3,num1);



alert("Biggest number is "+ biggest);
