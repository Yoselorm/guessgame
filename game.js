
let randomNUmber=Math.floor(Math.random()*11)
let result=document.getElementsByClassName('result')


function checker() {
	let entry=document.getElementById('ran').value
	let input=parseInt(entry)

	if(input==randomNUmber){
		result[0].innerHTML='Congratulations!!Your input matches'
	}
	else if(input>10){
		result[0].innerHTML='Please enter a number from 0 to 10'
	}
	else if (input<randomNUmber) {
		result[0].innerHTML= 'Go higher'
	}
	else if(input>randomNUmber){
		result[0].innerHTML= 'Go lower'
	}
		
}
function again(){
	location.reload()
}