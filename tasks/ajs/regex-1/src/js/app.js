export default class Validator {
  validateUsername(name) {
    const regExpFirst = /^[\w-]*$/;
    const regExpSecond = /\d{4}/;
    const regExpThird = /^[^_\d-].*[^_\d-]$/;

    if (
      regExpFirst.test(name)
      && !regExpSecond.test(name)
      && regExpThird.test(name)
    ) {
      this.name = name;
      return true;
    }
    throw new Error('Please, provide a valid name!');
  }
}
