import { useState } from "react";
import styles from './ItemCount.module.css';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className={styles.itemCountContainer}>
            <h3>{quantity}</h3>
            <button className={styles.countButton} onClick={decrement}>-</button>
            <button className={styles.addToCartButton} onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito
            </button>
            <button className={styles.countButton} onClick={increment}>+</button>
        </div>
    );
};

export default ItemCount;
