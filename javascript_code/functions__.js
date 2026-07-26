function add(a,b){
    if (a==undefined){
        a=5;
    }
    if (b==undefined){
        b=6;
    }
    return a+b;
}

console.log(add());


console.log('-'.repeat(20));
console.log(' '.repeat(20));
console.log(`Well the above code is the traditional functions \nThe below code is the arrow functions`)

const addition=(a,b)=>{
    return a+b;
}
let a=5;
let b=6;
console.log(addition(a,b));


const product=(a,b)=>{
    return a*b;
}

console.log('-'.repeat(20));
console.log(' '.repeat(20));

console.log(product(10,20));

let bareMinimum=['buy me flowers','give me hugs', 'all for no reason']

let definedValue=bareMinimum.indexOf('All for no reason   '.toLowerCase().trim());
const searchString='All for no reason  '.trim().toLowerCase();
let definedByFindIndex=bareMinimum.findIndex(item => item ===searchString);
console.log(definedValue, definedByFindIndex);




