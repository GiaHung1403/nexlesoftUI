import {LOGIN, LOGIN_SUCCESS} from './types/auth_type';
import {loginApp} from '@data/api';

export const login =
  ({email, password}) =>
  async dispatch => {
    try {
      const data = await loginApp({
        email,
        password,
      });
      dispatch({type: LOGIN_SUCCESS, data});
    } catch (error: any) {
      console.log('====================================');
      console.log('Error :', error?.message);
      console.log('====================================');
    }
  };

export const setDataUser = ({dataUser}) => ({
  type: LOGIN_SUCCESS,
  response: dataUser,
});
