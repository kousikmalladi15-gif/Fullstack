let fruits=[`apple`,`mango`,`banana`];

// console.log(fruits.length);

// fruits.unshift(`fruity`);

// console.log(fruits);

// fruits.shift();

// console.log(fruits);


for ( let fruit of fruits){
    console.log(fruit);
}
// just like "in" in python, we have "of" in javascript.

console.log(`now printing the fruits array using the indexing methods`)

let i;
for (i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}


console.log(fruits.sort().reverse());
