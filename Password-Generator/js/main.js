const passwordEl = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = lowercaseChars.toUpperCase();
const numbers = '0123456789';
const symbols = '!@#$%^&*()';

function generatePassword() {
    let password = '';
    const charSets = [];

    if (lowercaseCheckbox.checked) {
        charSets.push(lowercaseChars);
    }
    if (uppercaseCheckbox.checked) {
        charSets.push(uppercaseChars);
    }
    if (numbersCheckbox.checked) {
        charSets.push(numbers);
    }
    if (symbolsCheckbox.checked) {
        charSets.push(symbols);
    }

    if (charSets.length === 0) {
        alert('Please select at least one character type!');
        return;
    }

    const passwordLength = 12; // Adjust password length here

    for (let i = 0; i < passwordLength; i++) {
        const randomCharSet = charSets[Math.floor(Math.random() * charSets.length)];
        const randomChar = randomCharSet[Math.floor(Math.random() * randomCharSet.length)];
        password += randomChar;
    }

    passwordEl.value = password;

}



generateBtn.addEventListener('click', generatePassword);