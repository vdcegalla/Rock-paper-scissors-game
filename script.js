function verifyAge() {

    return new Promise((request) => {
        let age = document.getElementById("age").value;
        let result = document.getElementById("result");

        if (age >= 18) {
            result.textContent = "You are able to play!";
            request(true);
        } else {
            result.textContent = "You are not able to play!";
            request(false);
        }

    });

}
async function play() {

    let abletoPlay = await verifyAge();

    if (abletoPlay) {
        let choice = prompt("Type: 1 - Rock, 2 - Paper, 3 - Scissors;")

        let computerChoice = Math.floor(Math.random() * 3) + 1;

        if (choice == computerChoice) {
            alert("Empate");
        }

        if (choice == 1) {
            if (computerChoice == 2) {
                alert("You lose, the computer chose paper!")
            }
            if (computerChoice == 3) {
                alert("You won, the computer chose scissors!")
            }
        }

        if (choice == 2) {
            if (computerChoice == 1) {
                alert("You won, the computer chose rock!")
            }
            if (computerChoice == 3) {
                alert("You lose, the computer chose scissors!")
            }
        }

        if (choice == 3) {
            if (computerChoice == 1) {
                alert("You lose, the computer chose rock!")
            }
            if (computerChoice == 2) {
                alert("You won, the computer chose paper!")
            }
        }
        alert("The computer choice was: " + computerChoice);
    }

}

