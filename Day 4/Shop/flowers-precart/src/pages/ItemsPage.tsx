import styles from './ItemsPage.module.css'
import ItemCard from '../components/ItemCard'

import { FC } from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ItemsPageProps {
  itemsData: Item[];
}

const ItemsPage: FC<ItemsPageProps> = ({ itemsData }) => {
  return (
    <>
      <h1 className={styles.header}>Our plants</h1>
      <div className={styles['items-grid']}>
        {
          itemsData.map((item) => (
            <ItemCard {...item} key={item.id} />
          ))
        }
      </div>
    </ >
  )
}

export default ItemsPage