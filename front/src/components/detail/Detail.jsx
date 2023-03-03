import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";

import { getCharacterDetail } from '../../redux/actions';

import styles from "./Detail.module.css";

export default function Detail() {

    const { id } = useParams();

    const character = useSelector(state => state.char);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const backToHome = () => {
        navigate("/home");
    }

    useEffect(() => {
        dispatch(getCharacterDetail(id));
    }, [id]);


    return(
        <div className={styles.wrapDetail}>
            <h1>Detail</h1>
            <div className={styles.cardDetail}>
                <div className={styles.profile}> 
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <button className={styles.btnBack} onClick={ backToHome }> Back </button>
                </div>
                <div className={styles.data}>
                    <p>Name: <span>{character.name}</span></p>
                    <p>Status: <span>{character.status}</span></p>
                    <p>Especie: <span>{character.species}</span></p>
                    <p>Gender: <span>{character.gender}</span></p>
                    <p>Origin: <span>{character.origin}</span></p>
                    <p>Location: <span>{character.name}</span></p>
                </div>
            </div>
        </div>
    );
}