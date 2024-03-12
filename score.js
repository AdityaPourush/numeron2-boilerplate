// Iteration 8: Making scoreboard functional

let params = new URLSearchParams(window.location.search)
let score = params.get("score");

let scoreBox = document.getElementById("score-board");
scoreBox.textContent = score;

let play_again = document.getElementById("play-again-button");
play_again.addEventListener('click', () => {
    window.location.href = "./game.html"
})