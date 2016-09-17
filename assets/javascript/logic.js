

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
var playAgain = $("#reset");
var triviaTheme1 = new Audio('triviatheme1.mp3');
var triviaTheme2 = new Audio('kvervandi.mp3');
var triviaTheme3 = new Audio('opium.mp3');
var playList = [triviaTheme1, triviaTheme3];
var images = $("#image");
var redo;
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
console.log("down");

 displayNumber();
	
	

	if(number === 0){
    reset(); 
    stop();
    showTime.html("Time's Up!");
    nextQuestion();

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



run();


}

// fullTimer();
// ===================================Content===================================================================================

function question(text, choices, answer, image){
this.text = text;
this.choices = choices;
this.answer = answer;
this.image = image

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

this.displayImage = function(){
     
     images.html(this.image);
         
}

    };

function playMusic(){

       var music = Math.floor(Math.random() * playList.length)

        playList[music].play();

    }

   var sunStoneIMG = $("<img>", {class: 'questionImg', src: "http://65.media.tumblr.com/4a332698df32caf496226bebee9c2130/tumblr_mjq4ceGTfJ1ryaz1eo5_250.gif"});
   var norseGodsIMG = $("<img>", {class: 'questionImg', src: "https://a2ua.com/odin/odin-003.jpg"});
   var originIMG = $("<img>", {class: 'questionImg', src: "http://66.media.tumblr.com/6523abfd551f3ecc4c679c040ad9f1f2/tumblr_nqt0h45LBd1qmopexo1_r1_500.gif"});
   var vikingKingIMG = $("<img>", {class: 'questionImg', src: "https://66.media.tumblr.com/83284ee3c6ee4a46a47e2143c9af70fc/tumblr_nkcqihJvb51ranzq1o1_500.gif"});
   var atSeaIMG = $("<img>", {class: 'questionImg', src: "https://secure.static.tumblr.com/24a1f74df7256070a2a169df9c7658ab/hynvig2/Kpmnk5vx6/tumblr_static_tumblr_static_ajgp764arbscww088ksckok0w_640.gif"});
   var ragnarokIMG = $("<img>", {class: 'questionImg', src: "http://th02.deviantart.net/fs70/PRE/i/2013/170/7/9/ragnarok_by_nicholaskay-d69tcgg.jpg"});
   var heathenArmyIMG = $("<img>", {class: 'questionImg', src: "http://vignette4.wikia.nocookie.net/vikingstv/images/e/e9/Adult_Ivar.jpg/revision/latest?cb=20160422114816"});
   var etymologyIMG = $("<img>", {class: 'questionImg', src: "http://www-rohan.sdsu.edu/~gawron/fundamentals/course_core/lectures/historical/pie2.gif"});
   var godsLiveIMG = $("<img>", {class: 'questionImg', src: "https://67.media.tumblr.com/645fd12aa984f3da56c3c4f717b3b8ec/tumblr_nz4zldKDXj1rys67xo2_r1_500.gif"});
   var berzerkerIMG = $("<img>", {class: 'questionImg', src: "http://33.media.tumblr.com/c35dfd162e9de8d537d2354b9df1aa7b/tumblr_nmk7nyrdSY1tdy0nco2_500.gif"});
  


    // =======================================================================================================================================


    var sunStone= new question("What was the name of this mysterious navigation aid that helped vikings navigate the sea?", ['Eye of Thundera', 'Sunstone', 
        'Jelling Stone', 'Runestone'], 'Sunstone', sunStoneIMG);

    var norseGods = new question("Who was the cheiftan of the Viking Gods?", [
        'Zues', 'Thor', 'Loki', 'Odin'], 'Odin', norseGodsIMG);

    var origin = new question("Where did the Vikings come from?",
        ["Northumbria", 'Scandinavia', 'Romania', 'Germania'], 'Scandinavia', originIMG);

    var vikingKing = new question("Who is the notorious viking king that the series on the history chanel, Vikings, is based on?",
        ['Sweyn Forkbeard', 'Leif Erickson', 'Ragnar Lothbrok', 'Ivar the Boneless'], 'Ragnar Lothbrok', vikingKingIMG);

    var atSea = new question("How did Vikings know that land was near?", ['Used a small telescope', 'Waited at sea and sent a boat', 'Sent a raven to see if it would fly back', 'Google Maps'], 'Sent a raven to see if it would fly back', atSeaIMG); 
        

    var ragnarok = new question("What does Ragnarok mean?",
        ['Doom of the gods', 'Birth of the gods', 'Armageddon', 'Apocalypse'], 'Doom of the gods', ragnarokIMG);

    var heathenArmy = new question("Which one of Ragnar's sons leads the Great Heathen Army attack on King Ecbert of Wessex(England)?",
        ['Ivar the Boneless', 'Bjorn Ironside', 'Sigurd Snake-in-the-Eye', 'Halfdan Ragnarsson'], 'Ivar the Boneless', heathenArmyIMG);

    var etymology = new question("Which one of these everyday words stems from Old Norse (Northern European)?",
        ['dinosaur', 'maximum', 'anger', 'armada'], 'anger', etymologyIMG);

    var godsLive = new question("Where did Viking gods live?",
        [ 'The Marvel Universe', 'Midgard', 'Valhalla', 'Asgard'], 'Asgard', godsLiveIMG);

    var berzerker = new question("What is the name of a viking warrior known to be driven with intense rage and fight without armor?", [ 'brute', 'berzerker', 'valkyrie', 'loony'], 'berzerker', berzerkerIMG
        );


    questions = [sunStone, norseGods, origin, vikingKing, atSea, ragnarok, heathenArmy, etymology, godsLive, berzerker ];



displayResults = function(){

        choice1.empty();
        choice2.html("Correct: " + wins);
        choice3.html("Incorrect: " + losses);
        choice4.empty();


        
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
            playAgain.show();
           
          //     playAgain.on('click', function(){

          //       wins = 0;
          //       losses = 0;
          //       questionAnswered = false;
                
          //       questions = shuffleArray(questions);

          //       currentQuestion = questions[questionIndex];

          //       start.hide();
          //       nextQuestion();

          //       choice.show();

          // });
             
             // start.show();

             
            // display end screen

        }else {
            // go to the next question

            console.log('current question: ' + currentQuestion)
            currentQuestion = questions[questionIndex];
            currentQuestion.displayQuestion();
            currentQuestion.displayImage();
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
             
            

                setTimeout(nextQuestion, 1000);

        // logic for incorrect answer
            }else {
                // wrong answer logic
    
                timeRemaining.html("Wrong Answer!");

                losses ++;
                questionIndex += 1;

                stop();
                
                choice1.html(currentQuestion.answer + " " +  "Is the correct answer ")

                setTimeout(nextQuestion, 1000);
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
                // timeRemaining.hide();

                // fullTimer();

            });

            playAgain.on('click', function(){

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
    // triviaTheme1.play();
    playAgain.hide();
    console.log(playMusic());
    // timeRemaining.hide();
});