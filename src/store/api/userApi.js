import axios from 'axios';

const API_URL = 'https://painassasin.online/user/'

// Регистрация пользователя
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(API_URL + 'signup/', {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Авторизация пользователя
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(API_URL + 'login/', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Получение токена
export const getToken = async (refreshToken) => {
  try {
    const response = await axios.post(API_URL + 'token/', {
      refresh: refreshToken,
    });
    return response.data.refresh;
  } catch (error) {
    console.log(error);
  }
};