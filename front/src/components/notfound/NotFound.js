import { useNavigate } from "react-router-dom";
import styles from './NotFound.module.css';
import Img from '../../assets/img/404.png';

export default function NotFound() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    }

    return(
        <div className={styles.wrap404}>
            <div className={styles.card404}>
                <h1>404 - Page not found</h1>
                <img src={Img} alt="404" />
                <button className={styles.btnBack} onClick={ goBack }> Go back </button>
            </div>
        </div> 
    )
}