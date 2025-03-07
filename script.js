function showLetter() {
    document.getElementById("letterPopup").style.display = "block";
}

function hideLetter() {
    document.getElementById("letterPopup").style.display = "none";
}

function showQuiz() {
    document.getElementById("quizSection").classList.remove("hidden");
}

function checkAnswer(button, correctAnswer) {
    let feedback = button.parentElement.querySelector(".feedback");
    
    if (button.innerText.startsWith(correctAnswer)) {
        feedback.innerText = "Hehe well done! 💗";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Wrong! Maybe next one! <33";
        feedback.style.color = "red";
    }
}
