import axios from "axios";


export const getAllGame = async () =>{
    const url = 'http://127.0.0.1:8000/';
    try {
        const response = await axios.get(url + 'game/');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}