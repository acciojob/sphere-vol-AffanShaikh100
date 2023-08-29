let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

function volume_sphere() {
    //Write your code here
	let inputr = radius.value;
	let valuetinp = parseInt(inputr);
	let ans = (4/3) * Math.PI * Math.pow(valuetinp,3);
	volume.value = ans;
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
