const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
];

function convertToRoman(num) {
    let result = '';
    
    for (const numeral of romanNumerals) {
        while (num >= numeral.value) {
            result += numeral.symbol; 
            num -= numeral.value;    
        }
    }
    return result;
}


convertBtn.addEventListener('click', function () {
    const num = parseInt(numberInput.value.trim(), 10);


    if (!num) {
        output.textContent = '⚠️ Please enter a valid number'; 
    } else if (num < 1) {
        output.textContent = '⚠️ Please enter a number greater than or equal to 1'; 
    } else if (num >= 4000) {
        output.textContent = '⚠️ Please enter a number less than or equal to 3999'; 
    } else {
        output.textContent = `✅ Roman numeral: ${convertToRoman(num)}`; 
    }
});


