// async/demo.js

const { fetchBookLoading, fetchBookSuccess, fetchBookError } = require('./book-actions');
const { dispatch, getState, subscribe } = require('./redux');

function fetchBook() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ title: 'A new hope - the book' });
    }, 5000);
  })
}
subscribe(loadButton);
console.log('getState() 1st', getState());
dispatch(fetchBookLoading());
console.log('getState() 2nd', getState()); 

async function main() {
  try {
    const book = await fetchBook();
    dispatch(fetchBookSuccess(book));
    console.log('getState() 3nd', getState());
  } catch(err) {
    dispatch(fetchBookError(err));
    console.log('getState() 4nd',getState());
  }
}
function loadButton(){
    const state = getState();
    const sendbtn = document.getElementById('saveButton');
    if (state.loading) {
        sendbtn.setAttribute('disabled', true);
    } else {
        sendbtn.removeAttribute('disabled');
    }
}

main();