import apiClient from '../../libs/apiClient';

export const loginApp = ({email, password}) =>
  new Promise((resolve, reject) => {
    apiClient
      .post('/auth/signin', {
        email,
        password,
      })
      .then(response => {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        const dataParse = response.data;
        resolve(dataParse);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  });

// import axios from 'axios';

// export const loginApp = ({email, password}) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post('http://streaming.nexlesoft.com:3001/auth/signin', {
//         email,
//         password,
//       })
//       .then((response: any) => {
//         const dataParse = response.data;
//         resolve(dataParse);
//       })
//       .catch(error => {
//         reject(new Error(error.message));
//         console.log('====================================');
//         console.log(error.message);
//         console.log('====================================');
//       });
//   });
