var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var replaceMe = document.querySelector("#answer");
var ball = document.querySelector("#ball");


function getAnswer() {
    ball.src = "ball.gif"
    replace(answer);
    var answer = lifesAnswers[Math.floor(Math.random() * 20)];
    console.log(answer);
    // replaceMe.innerText = answer;
    console.log(answer + 'after');
}

function replace(answer) {
    setTimeout(function(){
        ball.src = "ballStill.jpg";
        replaceMe.value = "";
        replaceMe.innerText = answer;
    }, 2500)

    return;
}

// function playGif(){
    
//     ball.src = "ball.gif"
// }
// function stopGif(){
//     ball.src = "ballStill.jpg"
// }