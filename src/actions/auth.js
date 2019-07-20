
import { setAlert } from './alert';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './types';

// login json

const loginData = {
  "username":"hruday@gmail.com",
  "password" :'hruday123'
  }




// Login User
export const login = (email, password) => async dispatch => {
  

  const body = { email, password };

  
  

  try {
    let formData = body;
  if(loginData.username === formData.email && loginData.password === formData.password) {
    console.log('login success')
  dispatch({
    type: LOGIN_SUCCESS,
  });
  
}
else {
  let error = 'Invalid username and password';
  dispatch(setAlert(error, 'danger'));
  dispatch({
      type: LOGIN_FAIL
    });

}


  } catch (err) {
    console.log(err);
    
  }
};
