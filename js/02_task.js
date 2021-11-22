function sayHello(name) {
  let nameVerification = /[0-9`~!@#№$%^&*()\-_=+"';:{}\[\]<>?.,\\/\* ]/g;
  const love = 'Mark';
  const usualGreeting = 'Hello';
  const specialGreeting = 'Hi'
  if (typeof name !== 'string') {
    return 'It is not string'
  }
  if (name.search(nameVerification) !== -1) {
    return "Incorrect name"
  } else {
    if(name === love) {
      return `${specialGreeting}, ${love}`;
    } else {
      return `${usualGreeting}, ${name}`;
    }
  }
}
