function someFn(word) {
  let wordVerification = /[0-9`~!@#№$%^&*()\-_=+"';:{}\[\]<>?.,\\/\* ]/g;
  const startIndex = 0;
  let result = "";
  if (typeof word !== 'string') {
    return 'It is not string'
  }
  if(word.search(wordVerification) !== -1) {
    return "Incorrect word"
  } else {
    let wordLowerCase = word.toLowerCase();
    const arrayLetters = wordLowerCase.split('');
    arrayLetters[startIndex] = arrayLetters[startIndex].toUpperCase();
    result = arrayLetters.join('')
    return result;
  }
}

console.log(someFn('13'));
