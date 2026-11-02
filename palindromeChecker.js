const buttonElement = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const textResult = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input;

  if (input === '') {
    alert('Please input a value');
    return;
  }

 textResult.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  textResult.appendChild(pTag);
};
 

buttonElement.addEventListener('click', () => {
  checkForPalindrome(textInput.value);
  textInput.value = '';
});

textInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(textInput.value);
    textInput.value = '';
  }
});