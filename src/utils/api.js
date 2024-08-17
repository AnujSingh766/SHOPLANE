import axios from 'axios';

const API_URL = "https://fakestoreapi.com/products"; // Fake store API URL

// Fetch all products from the API
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the products data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Propagate error to be handled by the calling code
  }
};

// You can add other API functions here as needed
