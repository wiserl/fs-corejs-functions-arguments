export default class calculator {

  add(...numeros) {
    return numeros.reduce((first,second) => {
      return first + second;
    }, 0);
  }

  introspect() {
    return arguments;
  }
}
    


