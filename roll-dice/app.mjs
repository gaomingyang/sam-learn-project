export const lambdaHandler = async (event) => {
    console.log("Run Roll A Dice!")

    const result = rollDice(6);
    
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({message:result})
        }
    } catch(err) {
        console.log(err);
        return err;
    }
}

function rollDice(sides) {
    const randomNumber = Math.floor(Math.random() * sides) +1;
    return randomNumber;
}