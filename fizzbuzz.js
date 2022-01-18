//lets print numbers from 1 to hundred and if the number if divisible by 3 we print fizz, if the number if divisible by 5 we print buzz and 
//if the number is divisible by both we pring fizzbuzz

function fizzBuzz() {

var nums = []; 

for(var i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    nums.push["fizzbuzz"]; 
  } else if(i % 3 === 0) {
      nums.push["fizz"]; 
  } else if(i % 5 === 0) {
      nums.push["buzz"]; 
  } else {
    nums.push[i]; 
  }
  
  return nums; 


}
  
  consloe.log(fizzBuzz()); 
