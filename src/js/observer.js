let observable = {
  _state: 0,
    _observers: [],
  name: 'test',
  addEventListener: function (operation, listener) {
    this._observers.push({ operation, listener });
  },

  decrement: function () {
    this._state -= 1;
    for (let i = 0; i < this._observers.length; i++) {
      if (this._observers[i].name === 'decrement') {
          this._observers[i].listener({
              name: 'decrement',
              data: {
                  state: this._state,
                  n = 3
              }
          });
      }
    }
  },

  increment: function (n) {
    this._state += n;
    for (let i = 0; i < this._observers.length; i++) {
      if (this._observers[i].name === 'increment') {
          this._observers[i].listener({
              name: 'increment',
              data: {
                  state: this._state,
                  n,
              }
          });
      }
    }
    },
  
  setName: function (name) {
    this.name = name;
    for (let i = 0; i < this._observers.length; i++) {
      if (this._observers[i].name === 'changed_name') {
        this._observers[i].listener({
          name: 'changed_name',
         data: {
            name: this.name
          }
        });
      }
    }
  },

};

//------------------------------------------------------------

let observer = {
    observe : (event) => {
  console.log(
    event.name === 'increment' ? `+:  ${event.data.state}, ${event.data.n}` : `-:  ${event.data.state}`
  )
}
}

observable.addEventListener('increment', observer.listener);
observable.addEventListener('decrement', observer.listener);

observable.increment(2);
observable.decrement();
//Output in console.log - 10

//-----------------------------------------------------------

// type observable = {
//     addEventListener: (name: String, listener: (event: { name: String, data: {} }) => {}) => {}
//     removeEventListener: (name: String, listener: (event: { name: String, data: {}})=>{}) => {}
// }
// type observer = (event: { name: String, data: {} }) => {};