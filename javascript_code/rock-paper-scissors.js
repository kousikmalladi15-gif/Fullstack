import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

const rl=readline.createInterface({input, output});

let val= await rl.question('enter 1 for rock, 2 for paper and 3 for scissors : ');
val=Number(val);

if (Number.isNaN(val) || val<1 || val>3){
    console.log('invalid input');
    rl.close()
    process.exit();

}
rl.close();
const chooser=(arr)=> arr[Math.floor(Math.random()*arr.length)];

const options=['rock','paper','scissors'];

let system_choice=chooser(options);

//let val=1;
let user_choice=options[val-1];

let u_val=options.indexOf(user_choice);
let s_val=options.indexOf(system_choice);


console.log(`The user choice is ${user_choice}, The system choice is ${system_choice}`);


if (u_val-s_val==0){
    console.log(`it's a tie`);
}
else if (u_val-s_val==1 || u_val-s_val==-2){
       console.log(`The user_won`);
}
else {
    console.log(`cybernet_systems_won`);
}
