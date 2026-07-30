let age=window.prompt(`enter your age`);

age=Number(age);

let message= age>=18 ? `you are an adult`: `you are a minor`;

let isDrunk=true;
let drunk_drive= isDrunk ? `You are way too drunk`: `You are sober and haven't drunk`;

document.getElementById("ageStatus").textContent=message;
document.getElementById("drunkStatus").textContent=drunk_drive;