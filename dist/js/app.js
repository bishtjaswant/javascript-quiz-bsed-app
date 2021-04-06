let questionCount = 0;
let quizPoint = 0;

window.addEventListener('DOMContentLoaded', (e) => {
    show(0);


});




function formSubmit(e) {

    e.preventDefault();


    sessionStorage.removeItem("contestant");
    sessionStorage.removeItem("point");
    sessionStorage.removeItem("took");



    const contestant = document.forms['welcome_form']['contestant'].value;

    if (contestant === '') {
        alert('enter contestant name');
        return;
    }


    sessionStorage.setItem("contestant", contestant);
    window.location.assign('quiz.html')



}





//list of questiion
let questionArray = [
    {
        id: 1,
        question: "what is RAM?",
        answer: "RANDOM ACCESS MEMORY",
        options: [
            "RANDOM ACCESS MEMORY",
            "RUN ACCECEP   MEMORY",
            "RANDOMLY ACCESS MEMORY",
            'NONE OOF ABOVE'
        ]
    },
    {
        id: 2,
        question: "what is cache?",
        answer: "Temporary Memory",
        options: [
            "Temporary Memory",
            "Permanent Storage",
            "virtual Storage",
            "device memory",
        ]
    },
    {
        id: 3,
        question: "what is CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Processing Unit",
            "Central Programing Unit",
            "Central Preload Unit",
            'None of these'
        ]
    }

];


function next() {


    const user_get_answer = document.querySelector("li.option.active").innerText;

    if (user_get_answer === questionArray[questionCount].answer) {
        console.log('riight');
        quizPoint += 10;
        sessionStorage.setItem("point", quizPoint);

    } else {
        console.log('wrng');
    }

    if (questionCount == questionArray.length - 1) {
        sessionStorage.setItem('took', `${minutes}minutes:${seconds}sconds`)
        window.location.href = 'result.html';
        return;
    }


    questionCount++;
    show(questionCount);


}

function show(count) {
    console.log('countt', count);

    let contestant_name = document.getElementById("contestant_name");
    contestant_name.innerText = 'Hello ' + sessionStorage.getItem('contestant');
    let questions = document.getElementById('questions');
    questions.innerHTML = `
            <h1>${questionArray[count].question}</h1>
                <ul class="group">
                    <li class="option">${questionArray[count].options[0]}</li>
                    <li class="option">${questionArray[count].options[1]}</li>
                    <li class="option">${questionArray[count].options[2]}</li>
                    <li class="option">${questionArray[count].options[3]}</li>            
                </ul> 
     `;


    applyActiveClass();

}


function applyActiveClass() {
    let options = document.querySelectorAll("li.option");
    for (let i = 0; i < options.length; i++) {
        options[i].onclick = function () {

            for (let j = 0; j < options.length; j++) {
                if (options[j].classList.contains('active')) {
                    options[j].classList.remove("active");
                }

            }


            options[i].classList.add('active');
        }

    }
}

function gettingWinnerDetails() {
    let winner = document.querySelector('#winner');
    winner.innerText = sessionStorage.getItem("contestant");
    let point = document.querySelector('#point');
    point.innerText = sessionStorage.getItem('point');
    let took = document.querySelector('#took');
    took.innerText = sessionStorage.getItem('took')
}

gettingWinnerDetails();



function returnToHome() {
    window.location.assign('index.html');
}