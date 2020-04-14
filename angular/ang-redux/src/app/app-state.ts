import { Jedi } from './jedi/jedi-list/jedi.model';

export interface AppState {
    counter: {
        data: number
    }
    jediList: {
       data: Array<Jedi>
    }
}