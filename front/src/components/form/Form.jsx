import React, { useEffect } from 'react';
import styles from './Form.module.css';
import { validateUsername, validatePassword }  from './validations';
import Logo from '../../assets/img/logoApp.png';
import Avatar from '../../assets/img/rick_login.png';

export default function Form({ login, errorLogin }) {

    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [error, setError] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        if(e.target.name === 'username'){
            setError({
                ...error,
                username: validateUsername(e.target.value),
            });
        }else if(e.target.name === 'password'){
            setError({
                ...error,
                password: validatePassword(e.target.value),
            });
        }else{
            setError({
                username: validateUsername(userData.username),
                password: validatePassword(userData.password),
            });
            return;
        }
        setUserData({...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(error.username !== '' && error.password !== '') return;
        login(userData);
    }

    useEffect(() => {
    },[userData]);

    return(
        <div className={ styles.wrapContent }>
            
            <div className={styles.wrapLogo}>
                <img 
                    src={Logo} 
                    className={styles.logoAppLogin} alt="Rick_And_Morty_Logo_App" 
                />
            </div>

            <form className={styles.loginForm} autoComplete="off" onSubmit={ handleSubmit }>
                <img 
                    className={styles.avatar}
                    src={Avatar} 
                    alt="Login_avatar" 
                />
                <div className={styles.hint}>
                    Please use "mail@gmail.com" and "Secret33". Thanks!
                </div>
                <div className={styles.formGroup}>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Username"
                        autoComplete="off"
                        onChange={ handleChange }
                        value={ userData.username }
                    />
                    {
                        error.username &&
                        <span 
                            className={styles.error} 
                            id="errorUsername"
                        >{ error.username }</span>
                    }
                </div>

                <div className={styles.formGroup}>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        autoComplete="new-password"
                        onChange={ handleChange }
                        value={ userData.password }
                    />
                    {
                        error.password &&
                        <span 
                            className={styles.error} 
                            id="errorPassword"
                        >{ error.password }</span>
                    }

                    {
                        errorLogin &&
                        <span 
                            className={styles.error} 
                            id="errorPassword"
                        >{ errorLogin }</span>
                    }
                </div>

                <button onClick={handleChange}> Login </button>
        

            </form>

        </div>
    )
}