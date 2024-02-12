import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./notification/NotificationService";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NotificationProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Listado de Comics'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de Comics filtrados'} />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </NotificationProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App