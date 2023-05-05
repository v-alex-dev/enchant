import { useNavigate } from 'react-router-dom';
import {GiDiceFire} from 'react-icons/gi';
import moment from "moment";
import './style.css'
import {postPartyDate} from "../api/gameApi";


const NewGame = () => {

    const history = useNavigate();
    const postDate = async () => {
        let dateNow = new Date().toISOString();
        dateNow = moment(dateNow).format('YYYY-MM-DD')
        try{
            await postPartyDate(dateNow);
            history('/games');
        }catch (e) {
            throw e;
        }
    }

    return (
        <section className='mainPage'>
            <div className='newGame' onClick={postDate}>
                <GiDiceFire className='icone'/>
                <span>Nouvelle partie</span>
            </div>
        </section>

    )
}

export default NewGame;