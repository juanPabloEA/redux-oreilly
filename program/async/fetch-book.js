const {
    fetchBookLoading,
    fetchBookSuccess,
    fetchBookError
} = require('./book-actions');
const {
    dispatch,
    getState
} = require('./redux');

function fetchBook() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                title: 'A new hope  - the book'
            });
        }, 1000);
    })
}

console.log(getState());
// { book: {} }

dispatch(fetchBookLoading());

console.log(getState());
// { book: { loading: true } }

async function main() {
    try {
      const book = await fetchBook();
      dispatch(fetchBookSuccess(book));
      console.log(getState());
      
      // { book: { data: { title: 'A new hope - the book'}, loading: false } }
    } catch(err) {
      dispatch(fetchBookError(err));
      console.log(getState());
        // { book: { data: undefined, error: { title: 'some error message' } } }
  }
}

main();