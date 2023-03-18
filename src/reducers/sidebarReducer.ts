import {v1} from 'uuid';
import {ActionsType, SidebarType} from '../generalTypes/GeneralTypes';



const initialState: SidebarType = {
   friends: [
      {id: v1(), name: 'Mario'},
      {id: v1(), name: 'Leo'},
      {id: v1(), name: 'Julia'},
   ],
}

export const sidebarReducer = (state=initialState, action: ActionsType ) => {
   return state
}