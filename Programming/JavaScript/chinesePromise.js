const EventEmitter = require('events');

class ChinesePromise extends EventEmitter {
  constructor(fn) {
    super();
    this.state = 'pending';
    this.value = undefined;

    this.once('resolve', (value) => {
      this.value = value;
      this.state = 'resolve';
    });
    this.once('reject', (message) => {
      this.value = message;
      this.state = 'reject';

      throw new Error(`Unhandled Reject: ${message}`);
    });

    if (fn && typeof fn === 'function') {
      fn(x => this.emit('resolve', x), x => this.emit('reject', x));
    }
  }

  set state(state) {
    if (state === 'pending' || state === 'resolve' || state === 'reject') {
      this.emit(state);
      return state;
    }
  }
 
  then(fn) {
    const newPromise = new ChinesePromise();
    this.once('resolve', () => {
      try {
        const result = fn(this.value);
        newPromise.emit('resolve', result);
        return result;  
      } catch (err) {
        newPromise.emit('reject', err);
      }
    });
    
    return newPromise;
  }
}

new ChinesePromise((resolve, reject) => setTimeout(_ => {
  console.log('1');
  resolve(1);
}, 3000))
.then((val) => {
  console.log(val + 3);
  return val + 3;
})
.then((val) => console.log(val + 4));