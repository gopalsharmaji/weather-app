
let arr = [10,20,30,40,50]


/* let square = arr.map((number)=>{
    return number * number;             // this concept means 10*10 , 20*20 ,....

})

console.log(square) */



// increment 1 in arr elements

let increment = arr.map((element) => {

    let newArr = element + 1;

   return newArr

})

console.log(increment)

