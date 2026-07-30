let random_roll;


document.getElementById('roll-button').onclick=function(){
    random_roll=Math.ceil(Math.random()*6);
    document.getElementById('header-1').textContent=random_roll;
}
