import { useState } from 'react';
import styles from './Searchbar.module.css';

export default function SearchBar(props) {

   const [search, setSearch] = useState('');

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
      </div>
   );
}
