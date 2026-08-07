let randomDecimal=Math.random();
let minimum=10;
let maximum=110
let generatedNumber=Math.ceil(minimum+((maximum-minimum)*randomDecimal));



let guessedNumber=window.prompt(`Guess for a number in between ${minimum} 
    and ${maximum}`);
guessedNumber=Number(guessedNumber);
let tryCount=0;
while (generatedNumber!==guessedNumber && Number.isInteger(guessedNumber)){
    if(isNaN(guessedNumber)){
        window.alert(`Enter a valid Integer`);
    }
    else if (guessedNumber<minimum || guessedNumber>maximum){
        window.alert(`Enter a valid number in the range`);
    }
    else{
        guessedNumber=window.prompt(`Guess the number`);
        guessedNumber=Number(guessedNumber);
        if (guessedNumber>generatedNumber){
            console.log(`You guessed a higher value , guess again`);
        }
        else{
            console.log(`You guessed a lower value, guess again`);
        }
        tryCount++;
    }
}

console.log(`You have correctly guessed in ${tryCount} counts and the value was 
    ${generatedNumber}`);