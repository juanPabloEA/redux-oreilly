import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { addJedi, removeJedi, loadJedis } from './jedi.actions';
import { Jedi } from './jedi.model';

@Component({
  selector: 'app-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.css']
})
export class JediListComponent {
  list$;
  counter = 0;
  newJedi = "";

  constructor(private store: Store<AppState>) {
    this.list$ = store.select((state) => {
      return state.jediList.data;
    });
  }

  add() {
    this.store.dispatch(addJedi(this.counter++, this.newJedi));
    this.newJedi = '';
  }

  remove(id) {
    this.store.dispatch(removeJedi(id)); 
  }

  clear() {
    this.store.dispatch(loadJedis([]));
    this.counter = 0;
  }
}