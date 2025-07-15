const correctDesign = ["rgba(0, 255, 153, 0.211)",
                       "1px solid rgba(0, 255, 153, 0.635)"];

const invalidDesign = ["rgba(255, 30, 0, 0.211)",
                       "1px solid rgba(255, 30, 0, 0.635)"];

const question = document.getElementById("question");
const input = document.getElementById("input");
const button = document.getElementById("button");

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function updateQuestion() {
    firstConstant = getRandomNumber();
    secondConstant = getRandomNumber();
    const newQuestion = `d + ${firstConstant} = ${secondConstant}`;
    question.innerHTML = newQuestion;
}
updateQuestion();

async function verify(e) {
    e.preventDefault();
    input.disabled = true;
    button.disabled = true;
    const userAnswer = parseFloat(input.value.trim());
    const Answer = secondConstant - firstConstant;
    if (userAnswer === Answer) {
        input.value = "";
        question.style.backgroundColor = correctDesign[0];
        question.style.border = correctDesign[1];
        await sleep(2000);
        window.open("https://aasher-3689.github.io/meritpoint", "_self");
    } else {
        input.value = "";
        question.style.backgroundColor = invalidDesign[0];
        question.style.border = invalidDesign[1];
        await sleep(2000);
        question.style.backgroundColor = "";
        question.style.border = "";
        updateQuestion();
        button.disabled = "";
        input.disabled = "";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}