//  Default Password length
const DEFAULT = 15;
// ASCII Code for password char start range
const ASCII_START = 33;
// ASCII Code for password char end range
const ASCII_END = 126;

// Get input field
const passwordLength = document.querySelector("#length");

// Get input label
const label = document.querySelector("label");

let validLength = NaN;

// Get Generate password button
const btnGenerate = document.querySelector("#btn");

// // console.log(passwordLength.value);
// passwordLength.addEventListener("input", () => {
//     console.log(parseInt(passwordLength.value));
// });

// Check for valid user input
passwordLength.addEventListener("input", () => {
    // Assign input field value
    let lengthValue = parseInt(passwordLength.value);

    if (lengthValue < 8 || lengthValue > 15) {
        label.textContent = "Invalid value";
    } else {
        label.textContent = "";
        // console.log(lengthValue);
        validLength = returnLength(lengthValue);
    }
});

btnGenerate.addEventListener("click", () => {
    // if (validLength) {

    // }
    generatePassword();
});

// Return password length function
function returnLength (lengthValue) {
    return lengthValue;
}

// Generate password function
function generatePassword () {
    let passwordArray =[];
    for (let i = ASCII_START; i <= ASCII_END; i++) {        
        passwordArray.push(String.fromCharCode(i));
    }
    
}