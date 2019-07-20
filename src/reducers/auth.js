import { 
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/types';

const initialState = {

  isAuthenticated: null,

};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {

    case LOGIN_SUCCESS:
      
      return {
        ...state,

        isAuthenticated: true,
      };

    
    case LOGIN_FAIL:
    default:
      return state;
  }
}
