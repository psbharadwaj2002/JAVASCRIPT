// https://practice.geeksforgeeks.org/problems/perfect-arrays4645/1?page=2&difficulty%5B%5D=-2&sortBy=submissions

function perfectArrays(arr){
    let isPerfect = "PERFECT";
    let stack = [];

    for(let i = arr.length-1; i >= 0; i--){
        stack.push(arr[i]);
    }

    for(let i = 0; i <arr.length; i++){
        if(arr[i] !== stack[i]){
            isPerfect = "NOT PERFECT";
            break;
        }
    }

    return isPerfect;
}

let Arr = [1, 2, 3, 2, 1];
console.log(perfectArrays(Arr));