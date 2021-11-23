const state = {
  Display: {
    currentValue: 0,
    currentColor: "green",
  },
  BlockButtons: {
    buttons: [
      {id: 1, classButton: "minus", name: "-", functionName: 'decrement', value: 0}, 
      {id: 2, classButton: "reset", name: "Reset", functionName: 'reset', value: 0}, 
      {id: 3, classButton: "plus", name: "+", functionName: 'increment', value: 0}
    ],
  }, 
  EvenOdd: {
    currentText: "Введено четное число",
    even: "Введено четное число",
    odd: "Введено нечетное число",
    evenColor: "green",
    oddColor: 'red',
  }
}

export default state;