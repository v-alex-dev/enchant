import axios from 'axios';


// Fonction pour créer un nouveau joueur
export const createPlayer = async (newPlayer) => {

    const url = 'http://127.0.0.1:8000/api';

    const token = axios.post(`${url}/auth/`, {
        username: 'admin',
        password: '1234'
    })
        .then(response => {
            return response.data.token;

        })
        .catch(error => {
            console.log(error.response.data);
        });
    try {
        const playerResponse = await axios.post(`${url}/players/create/`,
            {
                firstName: newPlayer.firstName,
                lastName: newPlayer.lastName,
                world: newPlayer.world,
            }, {
                headers: {
                    'Authorization': `Token ${token}`
                }
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
        const response = await axios.get(`players/`);
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