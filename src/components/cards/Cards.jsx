import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import generalStyles from '../../assets/styles/GeneralStyles.module.css';
import styles from './Cards.module.css';
import { getCharacters } from '../../redux/actions';

export default function Cards(props) {

   const dispatch = useDispatch();

   const { onDelete } = props;
   const [ page, setPage ] = useState(1);

   const characters = useSelector(state => state.characters);

   useEffect(() => {
      dispatch(getCharacters(page));
   },[page]);

   return <div className={styles.wrapCards}>

      <div className={styles.wrapPagination}>
         <button 
            className={generalStyles.btn}
            onClick={() => setPage(page - 1)}
         >
            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
            Prev 
         </button>
         <button
            className={generalStyles.btn}
            onClick={() => setPage(page + 1)}
         >
            Next
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
         </button>
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
                                       onDelete={ onDelete } 
                                       visibleClose={ true }
                                    />)
      }
   </div>;
}
