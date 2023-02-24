import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Searchbar.module.css';

export default function SearchBar(props) {

   const [search, setSearch] = useState('');
   const location = useLocation();

   const handleInputChange = (e) => {
      setSearch(e.target.value);
   }

   const handleClick = () => {
      props.onSearch(search);
      setSearch('');
   }

   const handleKeyPress = (e) => {
      if(e.key === 'Enter'){
         handleClick();
      }
   }

   return (
      <div className={ styles.nav } >
         {
            location.pathname === '/home' &&
            <div className={ styles.form }>

               <input 
                  name="search" 
                  type='search' 
                  placeholder='Enter Id'
                  value={ search}
                  onChange={ handleInputChange }
                  onKeyDown={ handleKeyPress }
                  autoComplete='off'
               />
               <button onClick={ handleClick }>Add</button>

            </div>
         }
      </div>
   );
}
