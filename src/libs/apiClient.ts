import {create} from 'apisauce';

let authToken = null;
// const apiClient = create({
//   baseURL: 'http://streaming.nexlesoft.com:3001', // Replace with your API base URL
//   timeout: 1000, // Set a timeout for requests (optional)
//   headers: {
//     // Add any default headers here (e.g., authentication headers)
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer YourAccessToken',
//   },
// });

// apiClient.addRequestTransform(request => {
//   if (authToken) {
//     request.headers['Authorization'] = `Bearer ${authToken}`;
//   }
// });

// apiClient.addResponseTransform(response => {
//   const newToken = response.data.authToken; // Update this according to the actual key of the token in your login response
//   if (newToken) {
//     authToken = newToken;
//   }
// });

const apiClient = create({
  baseURL: 'http://streaming.nexlesoft.com:3001', // Replace with your API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YourAccessToken',
  },
});

apiClient.addRequestTransform(request => {
  if (authToken) {
    request.headers['Authorization'] = `Bearer ${authToken}`;
  }
});

apiClient.addResponseTransform(response => {
  if (response && response.data) {
    const newToken = response.data.authToken; // Update this according to the actual key of the token in your login response
    if (newToken) {
      authToken = newToken;
    }
  }
});

export default apiClient;
