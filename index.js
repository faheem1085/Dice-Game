// Accessing the button and the dice elements
let dicebtn = document.querySelector('.dice-btn');
let dice = document.querySelector('.dice');
let diceList = document.querySelector('.list');

// Unicode dice symbols for different dice faces (1-6)
const diceSymbols = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;']; // Dice faces for 1 to 6

// Function to roll the dice
dicebtn.addEventListener("click", () => {
    // Generate a random number between 1 and 6
    const randomIndex = Math.floor(Math.random() * 6);

    // Get the corresponding dice symbol
    const rolledValue = diceSymbols[randomIndex];
    

    // Update the dice display with the rolled value (Unicode dice symbol)
    dice.innerHTML = rolledValue;

    // Optionally, add the rolled value to the list
    const rollCount = diceList.children.length + 1; // Count previous rolls
    const listItem = document.createElement('li');
    listItem.innerHTML = `Roll ${rollCount}: <span>${rolledValue}</span>`;
    diceList.appendChild(listItem);
});
