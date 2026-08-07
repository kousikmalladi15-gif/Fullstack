// && for and
// || for or
// ! for not


let user_name=`Kousik`;

if (user_name !=`Kousik`){
    console.log(`Username is not ${user_name}`);
}


let randi_value=function(start,end){
    const randomValue=Math.ceil(start+ Math.random()*(end-start));
    return randomValue;
}


let temp;
const input_allowed=true;
if (input_allowed){
    temp=window.prompt('Enter the temperature outside');
    temp=Number(temp);
}

else{
    temp=randi_value(0,100);
}

if (temp <=30 && temp >=15){
    console.log(`The weather is normal, you are free to do whatever you want`);
}

else if (temp >=0 && temp <15){
    console.log(`The weather is cold outside, careful when going out.`);
}

else if (temp >30 && temp <=45){
    console.log(`The weather is hot, be careful when going outside`);
}

else if (temp <0 || temp >45){
    console.log(`The weather is too dangerous to be outside, Stay inside for your own safety`);
}
