//Challenge 1: Age In Days
function ageInDays() {
    var birthYear = prompt('What year were you born?');
    var daysAlive = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + daysAlive + ' days old.');
    h1.setAttribute('id', 'daysAlive');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('daysAlive').remove();
}
//Challenge 2: Cat Generator
function generateCat() {
    let img = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    img.src = "static/images/cat.jpg";
    img.height = 200;
    img.width = 200;
    div.appendChild(img);
}

//Challenge 3: Rock Scissors Paper

function rpsGame(yourChoice) {
    let humanChoice = yourChoice.id;
    let botChoice = numberToChoice(randToRpsInt());
    
    let results = decideWinner(humanChoice, botChoice);
    let message = finalMessage(results);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}


function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var dataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = dataBase[yourChoice][computerChoice];
    var computerScore = dataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost', 'color': 'red'};
    }
    else if(yourScore === 0.5){
        return {'message': 'You tied', 'color': 'yellow'};
    }
    else{
        return {'message': 'You won', 'color': 'green'};
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };
    //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>'";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>'";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

}

//Challenge 4: Change the color of all the buttons

var all_buttons = document.getElementsByTagName('button'); //returns generic collection of T HTMLelement
var copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {
   copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red') {
        buttonsRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonsGreen();
    }
    else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    }
    else if(buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}