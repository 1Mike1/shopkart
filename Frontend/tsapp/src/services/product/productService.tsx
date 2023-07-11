import axios from 'axios';

const apiUrl: string = 'http://127.0.0.1:5003/'

export const GetAllBrands = async () => {
  const response = await axios.get(`${apiUrl}get_brands`);
  return response;
}

export const GetAllProducts = async () => {
  const response = await axios.get(`${apiUrl}get_products`);
  return response;
}
