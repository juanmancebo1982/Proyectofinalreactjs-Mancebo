import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import styles from './ItemDetailContainer.module.css';
import { useNotification } from "../../notification/NotificationService"
import { useAsync } from "../../hooks/useAsync";
import { getProductById } from "../../services/firebase/firestore/products";
import { useTitle } from "../../hooks/useTitle"

const ItemDetailContainer = () => {
    const { showNotification } = useNotification()
    const { productId } = useParams();
    const asyncFunction = () => getProductById(productId);
    const { data: product, error, loading } = useAsync(asyncFunction, [productId])
    useTitle(product, `${product.name}`, [product]);

    if (loading) {
        return <h1 className={styles.loadingText}>Cargando...</h1>
    }

    if (error) {
        showNotification('error', 'El producto no existe')
    }

    return (
        <div className={styles.itemDetailContainer}>
            <h1 className={styles.detailHeader}>Detalle del Comic</h1>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;
