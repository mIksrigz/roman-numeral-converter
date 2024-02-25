const romanNumerals = {
    '1000': 'M',
    '900': 'CM',
    '500': 'D',
    '400': 'CD',
    '100': 'C',
    '90': 'XC',
    '50': 'L',
    '40': 'XL',
    '10': 'X',
    '9': 'IX',
    '5': 'V',
    '4': 'IV',
    '1': 'I'
};

const inputElement = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputElement = document.getElementById('output');

convertButton.addEventListener('click', () => {
    if (isInputValid(inputElement.value) !== true) {
        outputElement.textContent = isInputValid(inputElement.value);
    } else {
        const digits = splitDigits(inputElement.value);
        let result = [];
        digits.forEach((digit, index) => result.unshift(...convertToNumeral(digit, Math.pow(10, index)).join('')));
        outputElement.textContent = result.join('');
    }
});

const convertToNumeral = (input, orderOfManitude) => {
    const result = [];
    let currentNumber = parseInt(input) * orderOfManitude;
    let currentString = String(currentNumber);

    while (currentNumber > 0) {
        if (romanNumerals[currentString] !== undefined) {
            result.unshift(romanNumerals[currentString]);
            return result;
        }
        result.unshift(romanNumerals[String(orderOfManitude)]);
        currentNumber -= orderOfManitude;
        currentString = String(currentNumber);
    }

    return result;
}

const splitDigits = input => input.split('').reverse();

const isInputValid = input => {
    if (input === '') return 'Please enter a valid number';
    if (parseInt(input) < 1) return 'Please enter a number greater than or equal to 1';
    if (parseInt(input) > 3999) return 'Please enter a number less than or equal to 3999';
    return true;
};






// inputElement.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         if (!inputElement.value) {
//             outputElement.textContent = 'Please enter a valid number';
//         } else {
//             outputElement.textContent = inputElement.value;
//         }
//         inputElement.value = '';
//     }
// });