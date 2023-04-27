import React, {useContext, useState} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { createPlayer } from '../api/playerApi';

const PlayerList = () => {
    const [newPlayer, setNewPlayer] = useState({
        firstName: '',
        lastName: '',
        world: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewPlayer((prevPlayer) => ({
            ...prevPlayer,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await createPlayer(newPlayer);
            console.log(response.data); // handle success response
        } catch (error) {
            console.error(error); // handle error response
        }
    };

    return (
        <div>
            <h2>Create New Player</h2>
            <form onSubmit={handleSubmit}>
                <div className="p-field">
                    <label htmlFor="firstName">First Name</label>
                    <InputText id="firstName" name="firstName" value={newPlayer.firstName} onChange={handleChange} />
                </div>
                <div className="p-field">
                    <label htmlFor="lastName">Last Name</label>
                    <InputText id="lastName" name="lastName" value={newPlayer.lastName} onChange={handleChange} />
                </div>
                <div className="p-field">
                    <label htmlFor="world">World</label>
                    <InputText id="world" name="world" value={newPlayer.world} onChange={handleChange} />
                </div>
                <Button label="Create Player" icon="pi pi-check" type="submit" />
            </form>
        </div>
    );
};

export default PlayerList;
