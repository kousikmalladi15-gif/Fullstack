let answer=window.prompt("enter your opinion on when to marry ?");

if (answer.length >0){
    document.getElementById('calculator').onclick=function(){
        let printed="well the right answer is, there is no right time to get married, its whenever you believe is the right time! "
        console.log(printed);
        document.getElementById('answer').textContent=printed;
    }
}

