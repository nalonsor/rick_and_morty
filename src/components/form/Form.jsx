import React, { useEffect } from 'react';
import styles from './Form.module.css';
import { validateUsername, validatePassword }  from './validations';

export default function Form({ login }) {

    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [error, setError] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value });
        if(e.target.name === 'username'){
            setError({
                ...error,
                username: validateUsername(e.target.value),
            });
        }

        if(e.target.name === 'password'){
            setError({
                ...error,
                password: validatePassword(e.target.value),
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    useEffect(() => {
    },[userData]);

    return(
        <div className={ styles.wrapContent }>

            <form autoComplete="off" onSubmit={ handleSubmit }>
                <div className="hint">
                    Please use the suggestion data for username and password to login. thanks!
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="jhon@doe.com"
                        autoComplete="off"
                        onChange={ handleChange }
                        value={ userData.username }
                    />
                    <span id="errorUsername">{ error.username }</span>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Secret33"
                        autoComplete="new-password"
                        onChange={ handleChange }
                        value={ userData.password }
                    />
                    <span id="errorPassword">{ error.password }</span>
                </div>

                <button> Login </button>

            </form>

        </div>
    )
}