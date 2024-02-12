import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import styles from './ItemListContainer.module.css';
import { getProducts } from '../../services/firebase/firestore/products';
import { useAsync } from '../../hooks/useAsync';
import { useTitle } from '../../hooks/useTitle'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    useTitle(categoryId, `ComicShop | ${categoryId}`, [categoryId]);
    const asyncFunction = () => getProducts(categoryId)
    const { data: products, error, loading } = useAsync(asyncFunction, [categoryId])

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <h1 className={styles.loadingText}>Cargando Comics... 😊</h1>
            </div>
        );
    }

    if (error) {
        return <h1 className={styles.loadingText}>Hubo un error al cargar los productos</h1>
    }

    return (
        <div className={styles.container}>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
