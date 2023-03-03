import styles from './About.module.css';
import pic from '../../assets/img/me.png';

import {ReactComponent as Github} from '../../assets/img/github.svg';
import {ReactComponent as Linkedin} from '../../assets/img/linkedin.svg';
import {ReactComponent as Instagram} from '../../assets/img/instagram.svg';
import {ReactComponent as Email} from '../../assets/img/email.svg';

export default function About() {
    return(
        <div className={ styles.wrapAbout }>
            <h1>About</h1>
            <div className={styles.cardAbout}>
                <div className={styles.profile}>
                    <div>
                        <img src={pic} alt="Foto de Noe" />
                    </div>
                    <div className={styles.icons}>
                        <a href="https://github.com/nalonsor" target="_blank" rel="noreferrer">
                            <Github alt="Github" className={styles.github} />
                        </a>

                        <a href="https://www.linkedin.com/in/noe-alonso-34437869/" target="_blank" rel="noreferrer">
                            <Linkedin alt="Github" className={styles.github} />
                        </a>

                        <a href="https://www.instagram.com/rabadan_an/" target="_blank" rel="noreferrer">
                            <Instagram alt="Github" className={styles.github} />
                        </a>

                        <a href="mailto:nalonsor@outlook.com?subject=Vamos a colaborar juntos&body=Hola! Vengo de tu app y quería decirte que... " target="_blank" rel="noreferrer">
                            <Email alt="Github" className={styles.github} />
                        </a>

                    </div>
                </div>
                <div className={styles.data}>
                    <p>Name: <span>No&eacute; Alonso </span></p>   
                    <p>Species: <span>Human</span></p>   
                    <p>Status: <span> Alive </span></p>   
                    <p>Gender: <span> Male </span></p>   
                    <p>Origin: <span> Earth (C-137) </span></p>   
                    <p>Location: <span>Cva.Mor.Mx</span></p>   
                </div>
            </div>
        </div>
    );
}