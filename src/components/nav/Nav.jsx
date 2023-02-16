import React from "react";
import SearchBar from '../searchbar/SearchBar';

import { NavLink } from "react-router-dom";

import styles from './Nav.module.css';
import Logo from '../../assets/img/logoApp.png';

class Nav extends React.Component {

    constructor(props) {
        super();
    }

    render(){
        return(
            <div className={styles.nav}>
                <div className={styles.logoApp}>
                    <NavLink to="/characters">
                        <img src={Logo} alt="Rick & Morty app"/>
                    </NavLink>
                </div>
                <SearchBar onSearch={ this.props.onSearch } />
                <div className={styles.navLinks}>
                    <NavLink to="/about" end> About </NavLink>
                    <NavLink to="/contact" end> Contact </NavLink>
                </div>
            </div>
        )
    }

}

export default Nav;