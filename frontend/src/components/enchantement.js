import React, {useContext, useState} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { createEnchantment } from '../api/enchantementApi';

const Enchantement = () => {
    const [newEnchantement, setNewEnchantement] = useState({
        name: '',
        lastName: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewEnchantement((preEnchantement) => ({
            ...preEnchantement,
            [name]: value,
        }));
    };

    const handleRefreshPage = () => {
        window.location.reload();
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await createEnchantment(newEnchantement);
        } catch (error) {
            console.error(error); // handle error response
        }
    };

    return (
        <div>
            <h2>Create new enchantement</h2>
            <form onSubmit={handleSubmit}>
                <div className="p-field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" name="name" value={newEnchantement.name} onChange={handleChange} />
                </div>
                <div className="p-field">
                    <label htmlFor="description">Description</label>
                    <InputText id="description" name="description" value={newEnchantement.description} onChange={handleChange} />
                </div>
                <Button label="Create Enchantement" icon="pi pi-check" type="submit" onClick={handleRefreshPage} />
            </form>
        </div>
    );
};

export default Enchantement;