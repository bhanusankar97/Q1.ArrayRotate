let array = [1, 2, 3, 4, 5] 
let d = 2 
let n = array.length;
let rotations = d % n; 
let firstpart = array.slice(rotations, n);
let secondpart = array.slice(0, rotations);
console.log(firstpart.join(" ")+" "+secondpart.join(" "))