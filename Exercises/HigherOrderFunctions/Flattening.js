//let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]


function flatten(arrays) {
    
    console.log(arrays.reduce((flat, current) => flat.concat(current), []));

};