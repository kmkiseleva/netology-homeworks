export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    const error = this.errors.get(String(code));
    if (!error) {
      return 'Unknown error';
    }

    return error;
  }
}
