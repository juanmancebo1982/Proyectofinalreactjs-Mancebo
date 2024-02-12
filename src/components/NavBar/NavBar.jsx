import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from './NavBar.module.css';
import { useCart } from "../../context/CartContext";
import { useAsync } from "../../hooks/useAsync";
import { getCategories } from "../../services/firebase/firestore/categories";

const NavBar = () => {

    const asyncFunction = () => getCategories()
    const {data: categories} = useAsync(asyncFunction, [])

    const { totalQuantity } = useCart()
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link to={'/'} className={styles.link}><h1>ComicShop</h1></Link>
                {totalQuantity > 0 ? <CartWidget /> : null}
                <section className={styles.navLinks}>
                    {
                        categories.map(cat => (
                            <Link key={cat.id} to={`/category/${cat.name}`}>{cat.name}</Link>
                            
                        ))
                    }
                </section>
            </div>
        </nav>
    );
};

export default NavBar;
