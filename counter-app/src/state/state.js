import rerenderTree from './../render';

let evenOdd = (number) => {
    if(number % 2 === 0) {
      state.EvenOdd.currentText = state.EvenOdd.even;
      state.Display.currentColor = state.EvenOdd.evenColor;
      rerenderTree(state);
    } else {
      state.EvenOdd.currentText = state.EvenOdd.odd;
      state.Display.currentColor = state.EvenOdd.oddColor;
      rerenderTree(state);
    }
  }

  let decrement = () => {
    let number = state.Display.currentValue;
    if(number > 0 ) {
      number--;
      state.Display.currentValue = number;
      evenOdd(number);
    } else {
      rerenderTree(state);
    }
  }

  let reset = () => {
    let number = 0;
    state.Display.currentValue = number;
    state.EvenOdd.currentText = state.EvenOdd.even;
    state.Display.currentColor = state.EvenOdd.evenColor;
    rerenderTree(state);
  }

  let increment = () => {
    let number = state.Display.currentValue;
    number++;
    state.Display.currentValue = number;
    evenOdd(number);
  }

const state = {
  Display: {
    currentValue: 0,
    currentColor: "green",
  },
  BlockButtons: {
    buttons: [
      {classButton: "minus", name: "-", function: decrement}, 
      {classButton: "reset", name: "Reset", function: reset}, 
      {classButton: "plus", name: "+", function: increment}
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