//  Default Password length
const DEFAULT = 15;
// ASCII Code for password char start range
const ASCII_START = 33;
// ASCII Code for password char end range
const ASCII_END = 126;

// ---------------------------
// Variables declaration
//----------------------------

// Get input field
const passwordLength = document.querySelector("#length");

// Get input label
const label = document.querySelector("label");

// Initialize validLength variable
let validLength = 0;

// Initialize valid check
let isValid = true;

// Initialize check if password got generated
let isGenerated = false;

// Get Generate password button
const btnGenerate = document.querySelector("#btn");

// Get Password 1
const passwordOne = document.querySelector("#password-one");
// Get Password 2
const passwordTwo = document.querySelector("#password-two");

// Get tooltip
const tooltip = document.querySelector("#tool-tips");
// Get tooltip showing copy status
const tooltipCopyOne = document.querySelector("#tool-tips-copy1");
const tooltipCopyTwo = document.querySelector("#tool-tips-copy2");

// ---------------------------
// ------- Main -------
//----------------------------

// ---------------------------
// Check for user input
//----------------------------
passwordLength.addEventListener("input", () => {
    // Assign input field value
    let lengthValue = parseInt(passwordLength.value);

    if (lengthValue < 8 || lengthValue > 15) {
        label.textContent = "Invalid value";
        isValid = false;
    } else {
        label.textContent = "";
        validLength = returnLength(lengthValue);
        isValid = true;
    }
});

// ---------------------------
// Generate password when user click "Generate Password" button
//----------------------------
btnGenerate.addEventListener("click", () => {

    if (isValid && validLength) {
        // Generate Password with desired length
        passwordOne.textContent = `${generatePassword(validLength)}`;
        // Remove low-opacity styling
        passwordOne.classList.remove("low-opacity");
        // Turn the cursor to pointer
        passwordOne.classList.add("cursor-pointer");

        // Same process for passwordTwo
        passwordTwo.textContent = `${generatePassword(validLength)}`;
        passwordTwo.classList.remove("low-opacity");
        passwordTwo.classList.add("cursor-pointer");

    } else if (isValid && (validLength === 0 || validLength !== NaN)) { // NaN is not equal to NaN :( . Took me too long to debug this
        // PasswordOne
        passwordOne.textContent = `${generatePassword(DEFAULT)}`;
        passwordOne.classList.remove("low-opacity");
        passwordOne.classList.add("cursor-pointer");

        // PasswordTwo
        passwordTwo.textContent = `${generatePassword(DEFAULT)}`;
        passwordTwo.classList.remove("low-opacity");
        passwordTwo.classList.add("cursor-pointer");
    }
    // Change the status of isGenerated to true
    isGenerated = true;
    // Display the tool tip
    tooltip.textContent = "Click on the generated Password to copy";
});

// ---------------------------------
// Copy tooltip
// ---------------------------------
passwordOne.addEventListener("click", () => {
    if (isGenerated) {
        // Write to clipboard
        navigator.clipboard.writeText(passwordOne.textContent);
        // Display "COPIED"
        tooltipCopyOne.classList.remove("hidden");
    }
});

// Hide copy tooltip when move mouse away
passwordOne.addEventListener("mouseout", () => {
    tooltipCopyOne.classList.add("hidden");
});

// Same process for passwordTwo
passwordTwo.addEventListener("click", () => {
    if (isGenerated) {
        navigator.clipboard.writeText(passwordTwo.textContent);
        tooltipCopyTwo.classList.remove("hidden");
    }
});

passwordTwo.addEventListener("mouseout", () => {
    tooltipCopyTwo.classList.add("hidden");
});

// ---------------------------
// Functions
//----------------------------

// Return password length function
function returnLength(lengthValue) {
    return lengthValue;
}

// Generate password function
function generatePassword(lengthValue) {
    let passwordArray = [];
    let generatedPassword = "";
    let passwordChar = "";
    for (let i = ASCII_START; i <= ASCII_END; i++) {
        passwordArray.push(String.fromCharCode(i));
    }

    // console.log(passwordArray[Math.floor(Math.random() * passwordArray.length)]);

    // Assign random letter to generated password
    for (let i = 0; i < lengthValue; i++) {
        // Get random letter from password array and assign it to a variable                 
        passwordChar = (passwordArray[Math.floor(Math.random() * passwordArray.length)]);

        // Output generated password string
        generatedPassword = `${generatedPassword}${passwordChar}`;
    }

    // Return Generated Password
    return generatedPassword;
}
