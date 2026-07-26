import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';


let rl=readline.createInterface({input, output});
let val1= await rl.question('enter the first value other than 0 : ');
let val2= await rl.question('enter the second value other than 0 : ');
let method=await rl.question('choose a method : add, diff, abs_diff, product, div : ');


method=method.toLowerCase().trim();
val1=Number(val1);
val2=Number(val2);

let methods=['add', 'diff', 'abs_diff', 'product', 'div'];
if (val1 ===0 || val2===0 || Number.isNaN(val1) || Number.isNaN(val2)){
    console.log(`value error, enter values other than 0 : `);
    rl.close();
    process.exit();
}
else if (!methods.includes(method)){
    console.log(`method error, please enter the right method : `);
    rl.close();
    process.exit();
}

rl.close()


console.log(`the entered values are ${val1} and ${val2}`);
console.log(`the choosen method is ${method}`);


let func = (val1, val2)=>{
    if (method==`add`){
        return val1+val2;
    }
    else if (method==`diff`){
        return val1-val2;
    }
    else if (method==`abs_diff`){
        return Math.abs(val1-val2);
    }

    else if( method==`product`){
        return val1*val2;
    }
    else if (method==`div`) {
        if (val1>val2){
            return val1/val2;
        }
        else{
            return val2/val1;
        }
    }
}

console.log(func(val1, val2));