import { useState } from 'react'
import { useNotification } from '../../notification/NotificationService'
import styles from './OrderForm.module.css';
import { useTitle } from '../../hooks/useTitle'

const OrderForm = ({ onCreate }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { showNotification } = useNotification()
    const [formSubmitted, setFormSubmitted] = useState(false)
    useTitle(true, `ComicShop | Generar Orden`, []);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormSubmitted(true)

        if (!name || !phone || !email) {
            showNotification('error', 'Debe completar todos los campos')
            return
        }

        const userData = {
            name,
            phone,
            email,
        };

        onCreate(userData)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <legend>Complete los campos para generar la orden</legend>
                <div className={styles.formCampo}>
                    <label>Nombre:</label>
                    <input type="text" placeholder="Tu Nombre" value={name} onChange={handleNameChange} />
                </div>

                <div className={styles.formCampo}>
                    <label>Teléfono:</label>
                    <input type="tel" pattern="[0-9]*" placeholder="Tu Teléfono" value={phone} onChange={handlePhoneChange} />
                </div>

                <div className={styles.formCampo}>
                    <label>E-mail:</label>
                    <input type="email" placeholder="Tu E-mail" value={email} onChange={handleEmailChange} />
                </div>

                <input className={styles.button} type="submit" value='Generar Orden' />
            </form>
        </div>
    )
}

export default OrderForm;
