// dataflow/list-view.js

import { createItem } from "./actions.js";
import { select, subscribe } from "./redux.js";

console.log("list item view has loaded");

class ListItemsView {
  constructor() {
    this.render();
    subscribe(this.render);
  }

  render() {
    const items = select("items");
    const elem = document.getElementById("list");
    elem.innerHTML = "";
    console.log("items", items);
    
    items.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item.title;
      elem.appendChild(li);
    });
  }
}

const listItemsView = new ListItemsView();
export default listItemsView;