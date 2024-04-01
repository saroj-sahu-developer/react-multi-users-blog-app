import axios from 'axios';
import { API_BASE_URL } from '../constants';

const setTokenInHeader = (() => {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
})

const handleUnAuthorizedRequest = () => {
  window.location.replace(`http://127.0.0.1:3001/user/register`);
}

export const registerUser = async(userDetails) => {
  try {
    await axios.post(`${API_BASE_URL}/user/register`, userDetails)
    .then(response => {
      console.log(response);
      const { token } = response.data;
      localStorage.setItem('token', token);
    });
  } catch (error) {
    console.log('Error submitting register form:', error);
  }
}

export const getArticle = (articleId) => {
  setTokenInHeader();
  return axios
    .get(`${API_BASE_URL}/articles/${articleId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      if (error.response && error.response.status === 401) {
        handleUnAuthorizedRequest();
      }
    });
}

export const getAllArticles = () => {
  setTokenInHeader();
  return axios
    .get(`${API_BASE_URL}/articles`)
    .then(response => {
      return response.data;
    })
    .catch(error => {    
      console.log(error);
      if (error.response && error.response.status === 401) {
        handleUnAuthorizedRequest();
      }
    });
}

export const updateArticle = async(articleId, inputs) => {
  setTokenInHeader();
  try {
    await axios.put(`${API_BASE_URL}/articles/${articleId}`, inputs)
    .then(response => {
      console.log(response);
    });
  } catch (error) {
    console.log('Error updating article:', error);
  }
}

export const createArticle = async(inputs) => { 
  setTokenInHeader();
  try {
    return await axios.post(`${API_BASE_URL}/articles`, inputs)
    .then(response => {
      return response.data;
    });
  } catch (error) {
    console.log('Error creating article:', error);
  }
}

export const deleteArticle = async(articleId) => { 
  setTokenInHeader();
  try {
    await axios.delete(`${API_BASE_URL}/articles/${articleId}`);
  } catch (error) {
    console.log('Error creating article:', error);
  }
}



