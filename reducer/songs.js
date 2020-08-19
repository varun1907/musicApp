import { SONG_LIST } from '../actions';

export default function(state = [], action) {
  const { payload } = action;
  switch(action.type) {

    case SONG_LIST:
      return [...payload ];

    default:
      return state;
    }
}
