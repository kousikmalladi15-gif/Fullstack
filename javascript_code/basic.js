let name_="kousik";
const age=20;
let what_does_kousik_say=true;


console.log('-'.repeat(20))

console.log(typeof name_);
console.log(typeof age);
console.log(typeof what_does_kousik_say, what_does_kousik_say);
console.log(`Hello name $ is used to print the f-string equivalent called the template literal `);
console.log(`Hello ${name_}`);
console.log('There is no capitalize function hence we use .slice() and the .toUpperCase()');
console.log("Hence we use the following code to make the capitalization:")
console.log(`${name_[0].toUpperCase() + name_.slice(1)}`)

console.log('-'.repeat(20))

let karuvu=['ivvala esukundama', 'repu esukundama', 'ellundi esukundama']

console.log(' '.repeat(20));
console.log('-'.repeat(20));
for (let i=0; i<karuvu.length; i++){
    console.log(`priya ${karuvu[i]}`);
    if (i!==karuvu.length -1){
        console.log('   poni');
    }
}
console.log('-'.repeat(20));

let i=0;
while (i<5){
    i+=1;
    console.log(`${i}`);
}

console.log(`The while loop terminated as i value incremented than the condition and became ${i}`)

console.log('-'.repeat(20));
let truth=true;

if (truth){
    console.log('chalo pooja karenge :)');
    truth=false;
}

if (!truth){
    console.log('chalo pooja, karenge :|');
}

else {
    console.log("this won't workout as he is perfectly balancing the truth and !truth");
}

let numbers=[1,2,3,4,5];
let num;
for (num of numbers){
    console.log(num**2);
}

console.log('-'.repeat(20));

let x=1504;
console.log(`This is the pow function of Math module of js and we are squaring ${x} and it is ${Math.pow(x,2)}`);

console.log('-'.repeat(20));

function add(a,b){
    return a+b;
}

console.log(add(10,20));