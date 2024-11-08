import apiClient from '../../libs/apiClient';

export const getListItem = () => {
  apiClient
    .get('/categories')
    .then(response => {
      // Handle the response
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      // Handle errors
      console.error(error);
    });
};
