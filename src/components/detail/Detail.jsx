import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./Detail.module.css";

export default function Detail() {

    const { id } = useParams();
    const [ character, setCharacter ] = useState({});
    const [ origin, setOrigin ] = useState({});
    const [location, setLocation ] = useState({});

    const navigate = useNavigate();

    const backToHome = () => {
        navigate("/home");
    }

    useEffect(() => {

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
            if (char.name) {
                setCharacter(char);
                setOrigin(char.origin);
                setLocation(char.location);
            } else {
                window.alert("No hay personajes con ese ID");
            }
            })
            .catch((err) => {
            window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});

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
                    <p>Origin: <span>{origin.name}</span></p>
                    <p>Location: <span>{location.name}</span></p>
                </div>
            </div>
        </div>
    );
}