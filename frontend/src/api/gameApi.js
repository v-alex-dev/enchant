import axios from "axios";

const url = 'http://127.0.0.1:8000/';
export const getAllGame = async () =>{
    try {
        const response = await axios.get(url + 'game/');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getGameByParty = async (id) =>{
    try {
        const response = await axios.get(`${url}game/${id}/party_games`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const postPartyDate = async (date) =>{
    try {
        const response = await axios.post(`${url}partyDate/`,
            {
                "party_date": date
            });
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};
export const createGame  = async (newGame) => {
    try {
        const gameResponse = await axios.post(`${url}game/`, newGame);
        return gameResponse.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

export const last_party = async () =>{
    try {
        const response = await  axios.get(`${url}partyDate/last_party`)
        return response.data
    }catch (e) {
        throw e;
    }
}