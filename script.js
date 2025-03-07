function showLetter() {
    document.getElementById("letter").style.display = "block";
}

function hideLetter() {
    document.getElementById("letter").style.display = "none";
}

function showQuiz() {
    document.getElementById("quizSection").classList.remove("hidden");
}

function hideQuiz() {
    document.getElementById("quizSection").classList.add("hidden");
}

function checkAnswer(question, answer) {
    if (question === 1) {
        if (answer === 'A') {
            document.getElementById("result1").innerText = "Hehe dat was an easy one! well done 💗";
        } else {
            document.getElementById("result1").innerText = "Wrong! Maybe next one! <33";
        }
    } else if (question === 2) {
        if (answer === 'D') {
            document.getElementById("result2").innerText = "Hehe! Well done boba!💗";
        } else {
            document.getElementById("result2").innerText = "Wrong hehe! All of them :)";
        }
    }
}
