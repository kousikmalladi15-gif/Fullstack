let subscribed=document.getElementById("subscribedBtn");
let visa=document.getElementById("visaBtn");
let master_card=document.getElementById("masterBtn");
let paypal=document.getElementById("payPalBtn");

let submit=document.getElementById("mySubmitBtn");
let submit_result=document.getElementById("submitResult");
let payment_result=document.getElementById("paymentResult");

submit.onclick=function(){
    if (subscribed.checked){
        submit_result.textContent="You have subscribed";
    }
    else{
        submit_result.textContent="You have not subscribed";
    }

    if (visa.checked){
        payment_result.textContent="You are paying by Visa";
    }
    else if(master_card.checked){
        payment_result.textContent="You are paying by Master Card";
    }
    else if(paypal.checked){
        payment_result.textContent="You are paying by PayPal";
    }
    else{
        payment_result.textContent="You have not selected a payment method, please select a payment method";
    }
}