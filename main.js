const textInput = document.getElementById('text-input');
const CheckBtn = document.getElementById('check-btn');
const resultFinal = document.getElementById('result');

const checkInput = () =>{
    const input = textInput.value
    const inputWithoutPunctuation = input
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s/g, '');
    const cleanedInput = inputWithoutPunctuation.toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    if(input === ''){
        alert('Ingresá algo, por favor.')
    }
    if (reversedInput === cleanedInput){
        resultFinal.textContent = `${inputWithoutPunctuation} es un palíndromo`
    } else{
        resultFinal.textContent = `${inputWithoutPunctuation} NO es un palíndromo`
    }
}
CheckBtn.addEventListener('click',checkInput);
