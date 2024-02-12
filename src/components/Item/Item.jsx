import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({ id, name, img, price, stock}) => {
    return (
        <article className={styles.item}>
            <h3>{name}</h3>
            <img src={img} className={styles.img} alt={`Imagen de ${name}`} />
            <div className={styles.stockPrice}>
                <p><strong>Precio: </strong>U$s {price}</p>
                <p><strong>Stock: </strong>{stock}</p>
            </div>
            <Link to={`/detail/${id}`} className={styles.boton}>Ver detalle</Link>
        </article>
    );
}

export default Item;
