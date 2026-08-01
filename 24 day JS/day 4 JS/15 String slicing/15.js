let fullName=`Kousik`;

let slyce=fullName.slice(0,fullName.indexOf(`@`));
let trial=fullName.slice(0);


console.log(`trail was successful, it printed the entire string`);

let reversedName;
for(let i=1;i<=fullName.length;i++){
    reversedName+=fullName.at(-i);
}
console.log(reversedName);