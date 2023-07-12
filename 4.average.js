// https://practice.geeksforgeeks.org/problems/average4856/1?page=3&difficulty%5B%5D=-2&sortBy=submissions

function average(arr,n){
    let stack = [];

    let i = 1;
    while(i<=n){
        let sum = 0;
        let average = 0

        for(let j=0; j<i;j++){
            sum+=arr[j];
        }

        average = sum/i;
        stack.push(average);
        i++;
    }
    
    return stack;
}


let arr = [12, 2];
let n = 2;
console.log(average(arr, n).join(" "));