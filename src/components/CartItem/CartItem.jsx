import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../notification/NotificationService';
import styles from './CartItem.module.css';

const CartItem = ({ name, price, quantity, id, img }) => {
    const { showNotification } = useNotification();
    const { removeItem } = useCart();

    const handleRemoveItem = () => {
        removeItem(id);
        showNotification('success', 'Eliminado correctamente');
    };

    return (
        <div className={styles.cartItem}>
            <img src={img} alt={`Imagen de ${name}`} />
            <h3>{name}</h3>
            <p><strong>Precio Unitario: </strong>U$s {price}</p>
            <p><strong>Cantidad de Unidades: </strong>{quantity}</p>
            <p><strong>Subtotal: </strong>U$s {price * quantity}</p>
            <button onClick={handleRemoveItem}>X</button>
        </div>
    );
};

export default CartItem;
