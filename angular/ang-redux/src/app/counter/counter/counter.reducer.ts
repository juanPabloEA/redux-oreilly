import { counterReducer } from './reducer'
import { ActionReducerMap } from '@ngrx/store'

export interface CounterState {
    data: number
  };
  
export const reducer: ActionReducerMap<CounterState> = {
    data: counterReducer
}