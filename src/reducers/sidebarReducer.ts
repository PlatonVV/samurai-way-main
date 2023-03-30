import {v1} from 'uuid';
import {SidebarType} from '../generalTypes/GeneralTypes';

type ActionsType = ''

const initialState: SidebarType = {
   ['friends']: [
      {id: v1(), name: 'Mario'},
      {id: v1(), name: 'Leo'},
      {id: v1(), name: 'Julia'},
   ],
}

export const sidebarReducer = (state=initialState, action: ActionsType ) => {
   return state
}