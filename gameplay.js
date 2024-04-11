const choices = ['paper', 'scissors', 'rock'];

const handleChoice = (userChoice, session) => {
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNum];
    let roundResult;

    if (!session.score) {
        session.score = 0;
    }

    if (computerChoice === userChoice) {
        roundResult = 'tie';
    } else if (
        (computerChoice === 'paper' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'rock') ||
        (computerChoice === 'rock' && userChoice === 'paper')
    ) {
        session.score++;
        roundResult = 'you win';
    } else {
        session.score--;
        roundResult = 'you lose';
    }

    console.log(computerChoice);
    console.log(session.score);
    console.log(roundResult);

    return { score: session.score, computerChoice, roundResult, userChoice }; 
};

const gameReset = (session) => {
    if(session.score === 3){
        session.score = 0
    } 
    else if(session.score === -3){
        session.score = 0
    }

    return {score: session.score}
} 

module.exports = { handleChoice, gameReset };