const EventEmitter = require('events');

class ChinesePromise extends EventEmitter {
  constructor(fn) {
    super();
    this.state = 'pending';
    this.value = undefined;

    this.addListener('resolve', (value) => {
      this.value = value;
      this.state = 'fulfiled';
    });
    this.addListener('reject', (message) => {
      this.value = message;
      this.state = 'reject';

      throw new Error(`Unhandled Reject: ${message}`);
    });

    fn(_ => this.emit('resolve', _), _ => this.emit('reject', _));
  }

  set state(state) {
    if (state === 'pending' || state === 'fulfiled' || state === 'rejected') {
      this.emit(state);
      return state;
    }
  }

  then(fn) {
    if (typeof fn !== 'function') {
      this.state('fulfiled');
      return fn;
    }
    this.addListener('fulfiled', () => new ChinesePromise(fn));
  }
}

new ChinesePromise(
  (resolve, reject) => setTimeout(_ => {
    console.log('1');
    resolve(1);
  }, 3000))
  .then((resolve, reject) => setTimeout(_ => {
    console.log('2');
    resolve(2);
  }, 5000));