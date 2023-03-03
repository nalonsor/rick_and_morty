import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites, orderCards, filterCards } from '../../redux/actions';

import Card from '../cards/Card';
import styles from './Favorites.module.css';

export default function Cards(props) {

   const dispatch = useDispatch();
   const characters = useSelector(state => state.myfavorites);

   useEffect(() => {
      dispatch(fetchFavorites())
   },[]);

   const handleChangeOrder = (e) => {
      dispatch(orderCards(e.target.value));
   }

   const handleChangeGender = (e) => {
      dispatch(filterCards(e.target.value));
   }

   return <div className={styles.wrapCards}>

      <h1>My Favorites</h1>
      <div className={styles.filters}>
         <select 
            name='order'
            onChange={ handleChangeOrder}
         >
            <option default> ORDER </option>
            <option value='Ascendente'> Ascendente </option>
            <option value='Descendente'> Descendente </option>
         </select>

         <select 
            name='gender'
            onChange={ handleChangeGender }
         >
            <option value='allGenders' dafault> ALL GENDERS </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='unknown'>unknown</option>
            <option value='Genderless'>Genderless</option>
         </select>

      </div>

      {
         characters.map(character => <Card 
                                       key={character.id} 
                                       id={character.id} 
                                       name={character.name} 
                                       species={character.species}
                                       gender={character.gender}
                                       image={character.image} 
                                       character={character} 
                                       visibleClose={ false }
                                    />)
      }
   </div>;
}