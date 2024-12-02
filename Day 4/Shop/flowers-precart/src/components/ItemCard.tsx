
import styles from './ItemCard.module.css'

interface ItemCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ItemCard = ({ name, price, imageUrl }: ItemCardProps) => {


  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} width={200} height={250} alt={name} title={name} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>£{price.toFixed(2)}</p>
      
    </div>
  )
}

export default ItemCard