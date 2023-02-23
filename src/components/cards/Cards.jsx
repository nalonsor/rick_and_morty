import Card from './Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onDelete } = props;

   const onClose= () => window.alert('Emulamos que se cierra la card');

   return <div className={styles.wrapCards}>

      {
         characters.map(character => <Card 
                                       key={character.id} 
                                       id={character.id} 
                                       name={character.name} 
                                       species={character.species}
                                       gender={character.gender}
                                       image={character.image} 
                                       character={character} 
                                       onClose={ onClose } 
                                       onDelete={ onDelete } 
                                       visibleClose={ true }
                                    />)
      }
   </div>;
}
