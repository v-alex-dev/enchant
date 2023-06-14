import axios from 'axios';
const url = 'http://127.0.0.1:8000/';


// Fonction pour créer un nouveau enchantement
export const createEnchantment = async (newEnchantement) => {

    try {
        const playerResponse = await axios.post(`${url}enchantement/`,
            {
                name: newEnchantement.name,
                description: newEnchantement.description,

            });
        // Retourner la réponse de l'API
        return playerResponse.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

// Fonction pour récupérer tous les enchantement
export const getEnchantments = async () => {
    try {
        const response = await axios.get(`${url}enchantement/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const getEnchantmentById = async (id) => {
    try {
        const response = await axios.get(`${url}enchantement/${id}`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fonction pour mettre à jour un enchantement existant
export const updateEnchantement = async (playerId, updatedPlayer) => {
    try {
        const response = await axios.put(`enchantement/${playerId}/`, updatedPlayer);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fonction pour supprimer un enchantement existant
export const deleteEnchantement = async (playerId) => {
    try {
        const response = await axios.delete(`enchantement/${playerId}/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};