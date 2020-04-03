// async/redux.js

const bookReducer = require('./book-reducer');
const EventEmitter = require('events');
const emitter = new EventEmitter();

let state = {
  loading: false,
  data: void 0,
  error: void 0
};;

function store(state = {}, action) {
  return bookReducer(state, action);
}

function getState() {
  return state;
}

function dispatch(action) {
  const oldState = state;
  state = store(state, action);
  emitter.emit('changed');
}

function select(slice) {
  return state[slice];
}

function subscribe(cb) {
  emitter.on('changed', cb);
}

module.exports = {
  getState, dispatch, select, subscribe
}