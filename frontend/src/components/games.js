import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import {useNavigate} from 'react-router';
import {getPlayers} from "../api/playerApi";
import {Dropdown} from "primereact/dropdown";

function Games() {
    const [visible, setVisible] = useState(false);
    const [players, setPlayers] = useState()
    const history = useNavigate();
    const link = () => {
        history('/party')
    }
    useEffect(() => {
        getPlayers().then((data => setPlayers(data)))
    })



    return (
        <section className={'game'}>
            <Button className={'new_game'} label="New Game" onClick={() => setVisible(true)}  />
            <Dialog className={'popUp'} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <Dropdown value={players} onChange={(e) => setPlayers(e.value)}  optionLabel="lastName"
                          placeholder="Select a City" className="w-full md:w-14rem" />
            </Dialog>
        </section>
    );
}

export default Games;