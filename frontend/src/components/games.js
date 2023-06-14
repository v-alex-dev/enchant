import React, { useState, useEffect } from 'react';
import { getPlayers, getPlayerById } from "../api/playerApi";
import {getEnchantments, getEnchantmentById } from "../api/enchantementApi";
import "./style.css";
import {createGame, getGameByParty, last_party, updateGame} from "../api/gameApi";
import PlayerList from "./playerlist";
import Enchantement from "./enchantement";

function Games() {
    const [lastParty, setLastParty] = useState();
    const [game, setGame] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [player, setPlayers] = useState([]);
    const [enchantments, setEnchantments] = useState([]);
    const [selectedEnchantment, setSelectedEnchantment] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const [diceNumber, setDiceNumber] = useState(0);
    const [showPlayerList, setShowPlayerList] = useState(false);
    const [showEnchantement, setShowEnchantement] = useState(false);



    const fetchEnchantments = async () => {
        try {
            const response = await getEnchantments();
            setEnchantments(response.data);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchLastParty = async () => {
        try {
            const response = await last_party();
            setLastParty(response.id);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPlayers = async () =>{
        try {
            const response = await getPlayers();
            setPlayers(response.data);
        } catch (error){
            console.error(error);
        }
    }

    const fetchGameByParty = async (id) => {
        try {
            const response = await getGameByParty(id);
            const games = response.map(async (item) => {
                const playerResponse = await getPlayerById(item.player_FK);
                const enchantementResponse = await getEnchantmentById(item.enchantement_FK);
                return {
                    ...item,
                    player_FK: playerResponse.data,
                    enchantement_FK: enchantementResponse.data
                };
            });
            const gamesData = await Promise.all(games);
            setGame(gamesData);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchLastParty();
        fetchEnchantments();
    }, []);

    useEffect(() => {
        if (lastParty) {
            fetchGameByParty(lastParty); // Ajoutez l'argument lastParty ici
        }
    }, [lastParty]);

    useEffect(() => {
        fetchPlayers()
    }, []);

    const handlePlayerSelection = (e) => {
        setSelectedPlayer(e.target.value);
    };

    const handleEnchantmentSelection = (e) => {
        setSelectedEnchantment(e.target.value);
    };
    const handleDiceNumberChange = (e) => {
        setDiceNumber(e.target.value);
    };

    const togglePlayerList = () => {
        setShowPlayerList(!showPlayerList);
    };
    const toggleEnchantement = () => {
        setShowEnchantement(!showEnchantement);
    };

    const toggleModal = () => {
        setShowModal(true);
        setSelectedPlayers(player);
    }
    const addGame = async () => {
        try {
            const newGame = {
                player_FK: parseInt(selectedPlayer),
                enchantement_FK: parseInt(selectedEnchantment),
                party_FK: lastParty,
                des_number: parseInt(diceNumber),
            };

            await createGame(newGame);
            setShowModal(false);
            fetchGameByParty(lastParty); // Rafraîchir la liste des jeux après l'ajout d'un nouveau jeu
        } catch (error) {
            console.error(error);
        }
    };

    const modalAddPlayer = () => {
        return (
            showModal && (
                <div className="modal">
                    <h3>Add Game</h3>
                    <form>
                        <label htmlFor="player">Player:</label>
                        <select id="player" name="player" value={selectedPlayer} onChange={handlePlayerSelection}>
                            <option value="">Select a player</option>
                            {player.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.firstName} {item.lastName}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="enchantment">Enchantment:</label>
                        <select id="enchantment" name="enchantment" value={selectedEnchantment} onChange={handleEnchantmentSelection}>
                            <option value="">Select an enchantment</option>
                            {enchantments.map((enchantment) => (
                                <option key={enchantment.id} value={enchantment.id}>
                                    {enchantment.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="diceNumber">Dice Number (1-100):</label>
                        <input
                            type="number"
                            id="diceNumber"
                            name="diceNumber"
                            value={diceNumber}
                            min={1}
                            max={100}
                            onChange={handleDiceNumberChange}
                        />
                    </form>



                    <button onClick={addGame}>Add Game</button>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            )
        );
    };

    return (
        <section>
            <h1>Game Page</h1>
            {lastParty && (
                <div>
                    <h2>Last Party: {lastParty}</h2>
                    {game.length > 0 && (
                        <table>
                            <thead>
                            <tr>
                                <th>Player</th>
                                <th>Enchantment</th>
                                <th>Description</th>
                                <th>Dice Number</th>
                            </tr>
                            </thead>
                            <tbody>
                            {game.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.player_FK.firstName} {item.player_FK.lastName}</td>
                                    <td>{item.enchantement_FK.name}</td>
                                    <td>{item.enchantement_FK.description}</td>
                                    <td>{item.des_number}</td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>


            )}
            <div className="panel">
                <div >
                    <button onClick={togglePlayerList}>New Player</button>
                </div>
                <div>
                    <button onClick={toggleEnchantement}>New Enchantement</button>
                </div>
                <div>
                    <button onClick={toggleModal}>Add player</button>
                </div>
            </div>
            {showPlayerList && (
                <PlayerList players={player} />
            )}
            {showEnchantement && (
                <Enchantement players={player} />
            )}
            {modalAddPlayer()}
        </section>

    );
}
export default Games;

