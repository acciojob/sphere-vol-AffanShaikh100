
function volume_sphere() {
    //Write your code here
	let value12 = document.getElementById("volume").value;
	let convertvalue = parseInt(value12);
	let ans = (4/3)*Math.Pi*Math.pow(convertvalue,3);
	document.getElementById("volume").value = ans;
    
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
