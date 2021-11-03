import axios from 'axios';
import errorAlert from './errorAlert';

axios.interceptors.response.use((response) => response.data, (error) => {
  const expectedError = error.response
    && error.response.status >= 400
    && error.response.status < 500;

  if (!expectedError) {
    errorAlert();
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
