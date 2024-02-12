import ItemCount from '../ItemCount/ItemCount';
import styles from './ItemDetail.module.css';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../notification/NotificationService';

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
    const { addItem, getProductQuantity } = useCart();
    const { showNotification } = useNotification();

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id,
            name,
            quantity,
            price,
            img
        };
        addItem(objProductToAdd);
        showNotification('success', `Agregado ${quantity} de ${name}`);
    };

    const productQuantity = getProductQuantity(id);

    return (
        <article className={styles.itemDetailContainer}>
            <img src={img} alt={name} className={styles.itemImage} />
            <div className={styles.itemDetailInfo}>
                <h3 className={styles.highlightedText}>{name}</h3>
                <p><strong>Categoria: </strong>{category}</p>
                <p><strong>Precio: </strong>U$s {price}</p>
                <p><strong>Descripcion: </strong>{description}</p>
                <ItemCount stock={stock} onAdd={handleOnAdd} initial={productQuantity} />
            </div>
        </article>
    );
};

export default ItemDetail;
