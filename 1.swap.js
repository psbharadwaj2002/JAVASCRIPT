// https://practice.geeksforgeeks.org/problems/swap-kth-elements5500/1?page=1&difficulty%5B%5D=-2&sortBy=submissions

function swap(a, n, k){
    let stack = [];

    for(let i = 0; i<n; i++){
        if(i === k-1){
            stack.push(a[n-k]);
        } else if(i === n-k){
            stack.push(a[k-1]);
        } else {
            stack.push(a[i]);
        }
    }

    return stack;
}

let arr = [5, 3, 6, 1, 2];
let n = 5;
let k = 2;
console.log(swap(arr,n,k).join(" "));