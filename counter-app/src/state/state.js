const state = {
  Display: {
    currentValue: 0,
  },
  BlockButtons: {
    buttons: [
      {id: 1, classButton: "minus", value: "-", functionName: 'decrement'}, 
      {id: 2, classButton: "reset", value: "Reset", functionName: 'reset'}, 
      {id: 3, classButton: "plus", value: "+", functionName: 'increment'}
    ],
  }
}

export default state;