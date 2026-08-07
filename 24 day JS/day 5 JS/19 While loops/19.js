// let num=window.prompt(`enter an integer`);

// num=Number(num);

// let new_number=0;
// while (num!==0){
//     let quotient=Math.floor(num/10);
//     let remainder=num%10;
//     num=quotient;
//     console.log(num);
//     new_number=10*new_number+remainder;
//     console.log(new_number);
// }

// if(num===new_number){
// console.log(`The given number is a palindrome number`)    
// }


let loggedIn=false;

let act_username="admin@innovateiq.com";
let act_password="Admin@12345";

let attempts=1;
while (!loggedIn && attempts<=3){
    let userName=window.prompt(`please enter your username`);
    let password=window.prompt(`please enter your password`);
    if (userName===act_username && password===act_password){
        loggedIn=true;
        console.log(`${act_username} has successfully logged in`);
    }
    else{
        console.log(`Re-enter the password, invalid credentials`);
        attempts++;
    }
}

if (!loggedIn){
    console.log(`You have made 3 wrong attempts to login, Try to re-login after 3 days`);
}