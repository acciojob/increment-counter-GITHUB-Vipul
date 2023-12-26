//your JS code here. If required.
var count=0;
let value=document.getElementById("counter");
let button=document.getElementsByClassName("incrementBtn").item(0);
button.addEventListener('click',()=>{
	alert(count++);
	value.innerText=count;
})