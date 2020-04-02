import { createItem } from './actions.js';
import { dispach, getState } from './redux.js';

console.log('create item view has loaded');

class CreateItemView {
    saveItem() {
        const elem = document.getElementById('input');
        dispach(createItem(elem.value));
        const items = getState('items');
        console.log(items);
    }
}

const button = document.getElementById('saveButton');
const createItemView = new CreateItemView();

button.addEventListener('click', createItemView.saveItem);

export default createItemView;