// https://practice.geeksforgeeks.org/problems/remove-vowels-from-string1446/1?page=3&difficulty%5B%5D=-2&sortBy=submissions

function removeVowels(word){
    let str = "";

    for(let i = 0; i<word.length; i++){
        //console.log(word[i]);
        if(word[i] !== "a" && word[i] !== "e" && word[i] !== "i" && word[i] !== "o" && word[i] !== "u"){
            str += word[i];
        }
    }

    return str;
}

let S = "welcome to geeksforgeeks";
console.log(removeVowels(S));