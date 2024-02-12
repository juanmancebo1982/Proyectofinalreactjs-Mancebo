import React from 'react';
import logo from '../../assets/logocart.png';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './CartWidget.module.css';


const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <Link to="/cart" className={styles.linkCartWidget}>
            <div className={styles.cartWidget}>
                <img src={logo} alt="Cart Logo" />
                <p>{totalQuantity}</p>
            </div>
        </Link>
    );
};

export default CartWidget;
