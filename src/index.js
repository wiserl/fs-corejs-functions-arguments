export default class {

  add(...values) {
    return values.reduce((prev, current) => {
      return prev + current;
    }, 0);
  }

  introspect() {
    return arguments;
  }
}
