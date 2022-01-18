//Lets write a function to print given numbers of fibonacci numbers

function fibonacciGenerator (n) {
    
    var array = []; 
    if(n === 1) {
        array = [0]; 
    } else if (n === 2) {
        array = [0,1];  
    } else {
        array = [0,1]; 
        for(var i = 2; i < n; i++) {
            array.push(array[i -2] + array[i -1]); 
        }
    }
   
    return array;
  
}
