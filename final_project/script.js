const players = [
    { name: "LeBron James", image: "lebron.jpg" },
    { name: "Stephen Curry", image: "curry.jpg" },
    { name: "Kevin Durant", image: "durant.jpg" },
    { name: "Giannis Antetokounmpo", image: "giannis.jpg" },
    { name: "Luka Doncic", image: "luka.jpg" },
    { name: "Jayson Tatum", image: "tatum.jpg" },
    { name: "Jimmy Butler", image: "butler.jpg" },
    { name: "Nikola Jokic", image: "jokic.jpg" },
    { name: "Joel Embiid", image: "embiid.jpg" },
    { name: "Kawhi Leonard", image: "kawhi.jpg" }
];

let score = 0;
let currentRound = 0;
let shuffledPlayers = [...players].sort(() => Math.random() - 0.5); // Shuffle the players

function loadNextPlayer() {
    if (currentRound < 10) {
        document.getElementById("playerImage").src = shuffledPlayers[currentRound].image;
        document.getElementById("guessInput").value = "";
        document.getElementById("feedback").textContent = "";
        document.getElementById("round").textContent = currentRound + 1;
    } else {
        document.querySelector(".container").innerHTML = `
            <h1>Game Over!</h1>
            <p>Your final score: ${score}/10</p>
            <a href="homepage.html" class="btn">Play Again</a>
        `;
    }
}

document.getElementById("submitGuess").addEventListener("click", function() {
    let userGuess = document.getElementById("guessInput").value.trim();
    let feedback = document.getElementById("feedback");

    if (userGuess.toLowerCase() === shuffledPlayers[currentRound].name.toLowerCase()) {
        feedback.textContent = "🎉 Correct!";
        feedback.style.color = "lightgreen";
        score++;
    } else {
        feedback.textContent = `❌ Wrong! The correct answer was ${shuffledPlayers[currentRound].name}.`;
        feedback.style.color = "red";
    }

    document.getElementById("score").textContent = score;
    currentRound++;
    setTimeout(loadNextPlayer, 1500); // Load the next player after 1.5 seconds
});

// Load the first player when the page loads
loadNextPlayer();
