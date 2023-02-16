import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {

   const { onDelete, id, name,species,gender,image } = props;

   const handleDelete = () => {
      onDelete(id);
   }

   return (
      <div className={styles.wrapCard}>
         <div className={styles.card}>
            <button className={styles.btn_close} onClick={ handleDelete }>X</button>
         
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
