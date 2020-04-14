import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from './jedi.constants';
import { ActionReducerMap } from '@ngrx/store';
import { Jedi } from './jedi.model';

export const reducer: ActionReducerMap<{ data: [Jedi]}> = {
  data: jediListReducer
}

export function jediListReducer(state = [], action): [Jedi] {
    switch(action.type) {
      case ADD_JEDI:
        return [ ...state, { ...action.payload }] as [Jedi];
      case REMOVE_JEDI:
        return state.filter(jedi => jedi.id !== action.payload.id) as [Jedi];
      case LOAD_JEDIS:
        return action.payload.map(jedi => ({...jedi})) as [Jedi];
      default:
        return state as [Jedi];
    }
  }