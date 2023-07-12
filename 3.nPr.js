// https://practice.geeksforgeeks.org/problems/npr4253/1?page=3&difficulty%5B%5D=-2&sortBy=submissions

function permutation(n,r){
    let nFact = 1;
    let n_rFact = 1;

    for(let i=1; i<=n; i++){
        nFact*=i;
    }

    for(let i=1; i<=n-r; i++){
        n_rFact*=i;
    }

    let nPr = nFact/n_rFact;

    return nPr;
}

let n = 3;
let r = 3;

console.log(permutation(n,r));