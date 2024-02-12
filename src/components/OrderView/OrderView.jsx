import { Link } from 'react-router-dom'
import styles from './OrderView.module.css'
import { orderData } from '../../services/firebase/firestore/order'
import { useAsync } from '../../hooks/useAsync'
import { useTitle } from '../../hooks/useTitle'

const OrderView = ({ orderSnapshot }) => {
    useTitle(true, `ComicShop | Orden de Compra`, []);
    const asyncFunction = () => orderData(orderSnapshot)
    const { data, loading, error } = useAsync(asyncFunction, [orderSnapshot])
    const { buyer, item, total } = data

    if (loading) {
        return <h1 className={styles.loadingText}>Generando comprobante...</h1>
    }

    if (error) {
        return <h1 className={styles.loadingText}>Hubo un error al generar la orden</h1>
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2>¡Gracias por comprar con nosotros!</h2>
                <p className={styles.order}>
                    el ID de su compra es: <strong>{data.id}</strong>
                </p>
                <div className={styles.data}>

                    <div className={styles.buyer}>
                        <h3>Datos del Comprador:</h3>
                        <p>Nombre: {buyer.name}</p>
                        <p>Teléfono: {buyer.phone}</p>
                        <p>Email: {buyer.email}</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Detalles de la Compra:</h3>
                        <ul>
                            {item.map((product) => (
                                <li key={product.id}>
                                    Producto: {product.name}, Cantidad: {product.quantity}
                                </li>
                            ))}
                            <p className={styles.total}>Total de la compra: U$s {total}</p>

                        </ul>
                    </div>

                </div>
                <p>Pronto nos comunicaremos con usted</p>
                <Link to={'/'}><button className={styles.button}>Volver al inicio</button></Link>
            </div>
        </div>
    )
}

export default OrderView