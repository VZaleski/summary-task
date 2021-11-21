function filterStrings(array, length) {
  const newArray = [];
  let lengthString = 0;
  if (Array.isArray(array) === false) {
    return 'This is not an array';
  }
  if ( !(Number.isInteger(length) && (length > 0)) ) {
    return 'This is not a number';
  }
  array.forEach(element => {
    if (typeof element === 'string') {
      lengthString = element.length;
      if (lengthString <= length) {
        newArray.push(element);
      }
    }
  });
  return newArray;
}
