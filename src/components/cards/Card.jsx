import { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addFavorite, removeFavorite} from '../../redux/actions';

export default function Card(props) {

   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
   const { onDelete, id, name,species,gender,image, visibleClose } = props;

   let myFavs = useSelector(state => state.myfavorites) ;

   useEffect(() => {
      //dispatch(fetchFavorites());
      myFavs.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      console.log('dispatch');
   },[myFavs,id]);

   const handleDelete = () => {
      onDelete(id);
   }

   const handleFav = () => {
      dispatch(addFavorite(props.character));
   }

   const handleRemoveFav = () => {
      dispatch(removeFavorite(id));
   }

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         handleRemoveFav();
      }else{
         setIsFav(true);
         handleFav();
      }
   }

   return (
      <div className={styles.wrapCard}>
         <div className={styles.card}>
            {
               visibleClose && <button className={styles.btn_close} onClick={ handleDelete }>X</button>
            }

            {
               isFav ? 
                  <button className={ [styles.btnFav, styles.btnFavVisible ].join(' ') } onClick={handleFavorite}>❤️</button>
               : 
                  <button className={styles.btnFav} onClick={handleFavorite}>🤍</button>
            }
         
            <img  src={ image } alt={name + ' - ' + gender} />
            <div className={styles.data}>

               <Link to={`/detail/${id}`} >
                  {name}
               </Link>
               <h3>{species}</h3>
               <h3>{gender}</h3>


            </div>
            
         </div>
      </div>
   );
}
