import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const {characters} = props;
   return (<div className={styles.divGeneral}>
      {
         characters.map((c, i) => <Card key={c.id} name={c.name} species={c.species} gender={c.gender} image={c.image} onClose={() => {props.onClose(c.id)}}/>)
      }
   </div>);
}
