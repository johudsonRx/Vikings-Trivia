

$(document).ready(function(){


// Timer Variables
var startAt=30;
var number = startAt;
var count = 0;
var showTime = $("#show-time");
var timeRemaining = $("#time-remaining");

// Tally
var wins = 0;
var losses = 0;

// Content Variables
var answerChoices = $("#answerChoices");
var choice = $(".choice");
var choice1 = $("#choice1");
var choice2 = $("#choice2");
var choice3 = $("#choice3");
var choice4 = $("#choice4");
var questions = [];
var questionIndex = 0;
var questionsElement = $("#questions");
var currentQuestion;
var questionAnswered = false;
var start = $("#restart");
var triviaTheme1 = new Audio('triviatheme1.mp3');

// ==============================Timer===============================

choice.hide();

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
    stop();
    showTime.html("Time's Up!");

    questionIndex += 1;

    losses ++;

	}
}

function stop() {
clearInterval(counter);
showTime.empty();
number = 30;
}

  function fullTimer() {

decrement();

run();


}

fullTimer();
// ===================================Content===================================================================================

function question(text, choices, answer){
this.text = text;
this.choices = choices;
this.answer = answer;

this.displayQuestion = function(){

   questionsElement.html(this.text);

            

            choice1.html(this.choices[0]);
            choice1.data('choice', this.choices[0] );

            choice2.html(this.choices[1]);
            choice2.data('choice', this.choices[1] );

            choice3.html(this.choices[2]);
            choice3.data('choice', this.choices[2] );

            choice4.html(this.choices[3]);
            choice4.data('choice', this.choices[3] );

     }

    };


    var sunStone= new question("What was the name of this mysterious navigation aid?", ['Eye of Thundera', 'Sunstone', 
        'Jelling Stone', 'Runestone'], 'Sunstone');

    var norseGods = new question("Who was the cheif of the Viking Gods?", [
        'Zues', 'Thor', 'Loki', 'Odin'], 'Odin');

    var origin = new question("Where did the Vikings come from?",
        ["Northumbria", 'Scandinavia', 'Romania', 'Germania'], 'Scandinavia');

    var vikingKing = new question("Who is the notorious viking king that the series on the history chanel, Vikings, is based on?",
        ['Sweyn Forkbeard', 'Leif Erickson', 'Ragnar Lothbrok', 'Ivar the Boneless'], 'Ragnar Lothbrok');

    var atSea = new question("How did Vikings know that land was near?", ['Used a small telescope', 'Waited at sea and sent a boat', 'Sent a raven to see if it would fly back', 'Google Maps'], 'Sent a raven to see if it would fly back'); 
        

    var ragnarok = new question("What does Ragnarok mean?",
        ['Doom of the gods', 'Birth of the gods', 'Armageddon', 'Apocalypse'], 'Doom of the gods');

    var heathenArmy = new question("Which one of Ragnar's sons leads the Great Heathen Army attack on King Ecbert of Wessex(England)?",
        ['Ivar the Boneless', 'Bjorn Ironside', 'Sigurd Snake-in-the-Eye', 'Halfdan Ragnarsson'], 'Ivar the Boneless');

    var etymology = new question("Which one of these everyday words stems from Old Norse (Northern European)?",
        ['dinosaur', 'maximum', 'anger', 'armada']);

    var godsLive = new question("Where did Viking gods live?",
        [ 'The Marvel Universe', 'Midgard', 'Valhalla', 'Asgard'], 'Asgard');

    var berzerker = new question("What is the name of a viking warrior known to be driven with intense rage and fight without armor?", [ 'brute', 'berzerker', 'valkyrie', 'loony'], 'berzerker'
        );


    questions = [sunStone, norseGods, origin, vikingKing, atSea, ragnarok, heathenArmy, etymology, godsLive, berzerker ];



displayResults = function(){

        choice1.empty();
        choice2.html("Correct: " + wins);
        choice3.html("Incorrect: " + losses);

        
    }

 function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }



function nextQuestion(){

        console.log('next question')
        console.log('question index: ' + questionIndex)


        if (questionIndex == questions.length) {
            
            showTime.hide();
            questionsElement.html("Game Over!")

            displayResults();

            // display end screen

        }else {
            // go to the next question

            console.log('current question: ' + currentQuestion)
            currentQuestion = questions[questionIndex];
            currentQuestion.displayQuestion();
            fullTimer();
            questionAnswered = false;
        }

    }

    choice.on('click', function(){

        if (questionAnswered == false){

            questionAnswered = true;

      
            if($(this).data('choice') == currentQuestion.answer){
                // right answer logic
                
                timeRemaining.html("Correct!");

                wins ++;
                questionIndex += 1;

                stop();

            

                setTimeout(nextQuestion, 3800);

        // logic for incorrect answer
            }else {
                // wrong answer logic
    
                timeRemaining.html("Wrong Answer!");

                losses ++;
                questionIndex += 1;

                stop();
                
                choice1.html(currentQuestion.answer + " " +  "Is the correct answer ")

                setTimeout(nextQuestion, 3800);
            }   
        }
    });


            start.on('click', function(){

             questionIndex = 0;
             console.log("question index after start: " + questionIndex)

       
                wins = 0;
                losses = 0;
                questionAnswered = false;

                questions = shuffleArray(questions);

                currentQuestion = questions[questionIndex];

                start.hide();
                nextQuestion();

                choice.show();

            });

    
    console.log(triviaTheme1);
});