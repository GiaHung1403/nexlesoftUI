// import {ofType} from 'redux-observable';
// import {mergeMap} from 'rxjs/operators';
// import * as actionTypes from '../actions/types/auth_type';
// import {api_login} from '../data/api';
// import AsyncStorage from '../data/local/AsyncStorage';

// export const login = (action$: any) =>
//   action$.pipe(
//     ofType(actionTypes.LOGIN),
//     mergeMap((action: any) =>
//       api_login(action.data)
//         .then(async (data: any) => {
//           await AsyncStorage.setDataUser(data);
//           return {
//             type: actionTypes.LOGIN_SUCCESS,
//             message: 'Đăng nhập thành công!',
//             response: data,
//           };
//         })
//         .catch((error: any) => ({
//           type: actionTypes.LOGIN_FAIL,
//           message: error.message,
//           code: error.code,
//         })),
//     ),
//   );
