import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
import styles from './Nav.module.css';
import Logo from '../../assets/img/logoApp.png';
import Avatar from '../../assets/img/rick_login.png';
import SearchBar from "../searchbar/SearchBar";


export default function Nav() {

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return(
        <div className={styles.nav}>
            <div className={styles.logoApp}>
                <NavLink to="/home">
                    <img src={Logo} alt="Rick & Morty app"/>
                </NavLink>
            </div>
            <SearchBar />
            <div className={ styles.navLinks}>
                <NavLink 
                    className={ location.pathname === '/home' && styles.active }
                    to="/home" 
                    end
                > Home </NavLink>
                <NavLink 
                    className={ location.pathname === '/favorites' && styles.active }
                    to="/favorites" 
                    end
                > Favorites </NavLink>
                <NavLink 
                    className={ location.pathname === '/about' && styles.active }
                    to="/about" 
                    end
                > About </NavLink>
            </div>
            <div className={styles.user}>
                <img 
                    src={Avatar} 
                    alt="user_avatar" 
                    className={styles.avatar}    
                />
                <Link
                    className={styles.btnLogout}
                    onClick={ handleLogout }
                    to="/"
                >
                    Logout
                </Link>
            </div>
        </div>
    )

}
