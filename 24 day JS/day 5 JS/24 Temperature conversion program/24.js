let submit=document.getElementById(`submit`);
let textBox=document.getElementById(`textBox`);
let toFarenheit=document.getElementById(`toFarenheit`);
let toCelsius=document.getElementById(`toCelsius`);
let result=document.getElementById(`result`);
let temp;


function convert(){
    temp=textBox.value
    if(toFarenheit.checked){
        let new_temp=(1.8*temp) + 32;
        result.textContent=new_temp.toFixed(1)+`°F`;
    }
    else if (toCelsius.checked){
        let new_temp=(temp-32) * 5/9;
        result.textContent=new_temp.toFixed(1)+'°C';
    }
    else{
        result.textContent=`Select a conversion unit:`
    }
}