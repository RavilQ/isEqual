let arr1 = [1,2,3,4,5,6,7];
let arr2 =[1,2,3,4,5,6,7];

// Tapsirigin birinci helli ///////////////////////////////////////////////////////////////////////


function inequal(arr,other_arr) {



    if (arr.length!==other_arr.length) {
        return false;
    }

    for (let index = 0; index <arr1.length; index++) {
      
        if (arr1[index]!==arr2[index]) {
              return false;
        }
       
    }
     return true;
}

console.log(inequal(arr1,arr2)); 
console.log(inequal2(arr1,arr2));
console.log(inequal3(arr1,arr2));


// let inequal-a menimsedende ozunden asagida cagirmaq olmur ona gore yuxaridaki kimi yazdim.


// let inequal = function (arr,other_arr) {

//     let cavab =false;


//     if (arr.length!==other_arr.length) {
//         return false;
//     }

//     for (let index = 0; index <arr1.length; index++) {
      
//         if (arr1[index]!==arr2[index]) {
//               return false;
//         }
       
//     }
//      return true;
// }


//// Tapsirigin ikinci helli ///////////////////////////////////////////////////////////////////////


var isEqual =JSON.stringify(arr1)===JSON.stringify(arr2)
console. log(isEqual);


//// Tapsirigin ucuncu helli ///////////////////////////////////////////////////////////////////////


function inequal3(first_Array,second_array) {
    
    if (first_Array.length!==second_array.length) {
        return false;
    }
     
first_Array.reduce((acc,items,index)=>{

    if (items!==second_array[index]) {
        return false;
    }

},0)

 return true;

}

//// Tapsirigin dorduncu helli ///////////////////////////////////////////////////////////////////////


function inequal2(first_Array,second_array) {
    if (first_Array.length!==second_array.length) {
        return false;
    }
for (let index = 0; index < arr1.length; index++) {
    
    if (!first_Array.includes(second_array[index])) {
        return false;
    }
   
}
return true;

}


