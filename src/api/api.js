import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});


// Fonction pour récupérer les utilisateurs
export const getUsers = async () => {
  try {
    const response = await apiClient.get('/api/users');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs', error);
    throw error;
  }
};


// Fonction pour récupérer les items
export const getItems = async () => {
    try {
      const response = await apiClient.get('/api/items'); // Assurez-vous que cette route est correcte
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des items', error);
      throw error;
    }
  };


  // Fonction pour récupérer les categories
export const getCategories = async () => {
    try {
      const response = await apiClient.get('/api/categories'); // Assurez-vous que cette route est correcte
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des items', error);
      throw error;
    }
  };