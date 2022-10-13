function nth_most_rate_signature(list, n){ //the function takes two parameters an array and an integer
var obj ={}; //create or declare an object
list.map((x) =>{

     obj[x] = obj[x] + 1 || 1;
     
 });
let k = Object.keys(obj); 
 let v = Object.values(obj);
 
 //Algorithm to get the nth minimum value
 let index;
while (n > 0) { 
Min = Math.min(...v); //get the minimim value of the array
  index = v.indexOf(Min); //get the position of the index
  


if (index > -1 && n > 1) {
  v.splice(index, 1);  //remove that value from the array
  k.splice(index, 1);
}
        n =n -1; 

    }
    
console.log(k[index]);
return k[index];
}

let arr2 =[10,10,20,20,20,20,20,30,30,30];
nth_most_rate_signature(arr2, 3);
  
let arr =[5,4,5,4,5,4,4,5,3,3,3,2,2,1,5];
nth_most_rate_signature(arr, 2);
  