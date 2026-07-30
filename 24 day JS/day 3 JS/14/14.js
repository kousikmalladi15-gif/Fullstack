let stringz="Kousik Malladi";

let splitted=stringz.split(' ');
console.log(splitted);


let realK=stringz.trim().concat(" The Great");
console.log(realK);

// let username=`1 Kousik_the_fucker`;

// if (username.startsWith(' ')){
//     console.log("Username cannot begin with empty spaces");
// }
// else if(!isNaN(Number(username.charAt(0)))){
//     console.log(`The username cannot begin with a number`);
// }


let username="Kousik";

let new_name=username.padEnd(10,'k');
console.log(new_name);

