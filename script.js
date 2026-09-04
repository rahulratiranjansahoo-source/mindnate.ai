function startTraining() {
    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });
}

function showGames() {
    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });
}
function playGame(gameName) {
    if (gameName === "Memory Match") {
        window.location.href = "memory-game.html";
    } else if (gameName === "Number Sequence") {
        window.location.href = "number-sequence.html";
    } else if (gameName === "Pattern Recall") {
        window.location.href = "pattern-recall.html";
    } else if (gameName === "Quick Reaction") {
        window.location.href = "quick-reaction.html";
    } else {
        alert("🎮 " + gameName + " will be available soon!");
    }
} 
 

function openAssistant() {
    document.getElementById("assistant").scrollIntoView({
        behavior: "smooth"
    });
}

function askAssistant() {

    const input = document.getElementById("assistantInput");
    const response = document.getElementById("assistantResponse");

    const question = input.value.trim();

    if (question === "") {
        response.innerText = "Please type something first.";
        return;
    }

    response.innerText =
        "🤖 MindMate AI: I'll help you with that! AI integration will be added in the next stage.";

    input.value = "";
}
