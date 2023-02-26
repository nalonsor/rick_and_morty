import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Searchbar.module.css';

import { useDispatch } from 'react-redux';
import { onSearch } from '../../redux/actions';

export default function SearchBar(props) {

   const [search, setSearch] = useState('');
   const location = useLocation();
   const dispatch = useDispatch();

   const handleInputChange = (e) => {
      setSearch(e.target.value);
   }

   const handleClick = () => {
      if(search === ''){
         handleRandomSearch();
      }else{
         dispatch(onSearch(search));
         setSearch('');
      }
   }

   const handleKeyPress = (e) => {
      if(e.key === 'Enter'){
         handleClick();
      }
   }

   const handleRandomSearch = () => {
      let rnd = Math.floor(Math.random() * 826) + 1;
      dispatch(onSearch(rnd));
   }

   return (
      <div className={ styles.nav } >
         {
            location.pathname === '/home' &&
            <div className={ styles.form }>

               <input 
                  name="search" 
                  type='search' 
                  placeholder='Id or blank to random'
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
