import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './CartView.module.css';
import CartItem from '../CartItem/CartItem';
import { useTitle } from '../../hooks/useTitle';

const CartView = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useCart();
    useTitle(cart, 'ComicShop | Carrito', [cart]);

    if (totalQuantity === 0) {
        return (
            <section className={styles.cartViewContainer}>
                <h2>Su carrito está vacío</h2>
                <Link to={'/'}>
                    <button className={styles.button}>Volver</button>
                </Link>
            </section>
        );
    }

    return (
        <section className={styles.cartViewContainer}>
            <h2>Carrito de Compras</h2>
            {cart.map((prod) => (
                <CartItem key={prod.id} {...prod} />
            ))}
            <div className={styles.cartViewInfo}>
                <button onClick={clearCart} className={styles.button}>Vaciar Carrito</button>
                <Link to={'/checkout'}>
                    <button className={styles.button}>Checkout</button>
                </Link>
                <p>
                    <strong>Total: </strong>U$s {totalPrice}
                </p>
            </div>
        </section>
    );
};

export default CartView;
