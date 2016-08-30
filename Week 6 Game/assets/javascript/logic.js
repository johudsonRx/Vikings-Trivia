

$(document).ready(function(){

var startAt=30;
var number = startAt;


// Shows the number to start at

  

function displayNumber(){
            $('#show-time').html(number + " " + "Seconds");

        }

    
// Resets it the display to 30 seconds again.
function reset(){
	number = startAt;
	displayNumber();
}



function run(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
	
	number--

 displayNumber();
	
	

	if(number === 0){
    reset();  

	}
}

decrement();

run();


function questionBank(question, image,) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var sunstone =  new questionBank
("What is the name of this mysterious navigation aid?", '')

});