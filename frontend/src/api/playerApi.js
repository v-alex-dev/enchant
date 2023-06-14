import axios from 'axios';
const url = 'http://127.0.0.1:8000/';

// Fonction pour créer un nouveau joueur
export const createPlayer = async (newPlayer) => {


    try {
        const playerResponse = await axios.post(`${url}players/`,
            {
                firstName: newPlayer.firstName,
                lastName: newPlayer.lastName,
                world: newPlayer.world,

            });
        // Retourner la réponse de l'API
        return playerResponse.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

// Fonction pour récupérer tous les joueurs
export const getPlayers = async () => {
    try {
        const response = await axios.get(`${url}players/`);
        console.log(response.data)
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const getPlayerById = async (id) => {
    try {
        const response = await axios.get(`${url}players/${id}`);
        console.log(response.data)
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fonction pour mettre à jour un joueur existant
export const updatePlayer = async (playerId, updatedPlayer) => {
    try {
        const response = await axios.put(`players/${playerId}/`, updatedPlayer);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fonction pour supprimer un joueur existant
export const deletePlayer = async (playerId) => {
    try {
        const response = await axios.delete(`players/${playerId}/`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};