import { useDispatch, useSelector } from "react-redux"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import { AppDispatch, RootState } from "../redux/store"
import { useEffect } from "react";
import { deleteCart, getCart } from "../redux/thunks/cart/thunks";
import { CiTrash } from "react-icons/ci";

function Cart() {
  const cart = useSelector((state: RootState) => state.cartSlice.cart);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div id="cart">
      <Header />
      <div id="page-content">
        <h2 style={{
          fontWeight: 700,
          fontSize: "24px",
          color: "#393939",
          textTransform: "uppercase",
          textAlign: "center"
        }}>
          Cart
        </h2>

        <div id="content">
          {cart && cart.map(product => {
            return (
              <div key={product._id} className="card">
                <img src={product.thumbnail} />
                <p id="title">{product.title}</p>
                <p id="price">{product.price}</p>

                <div id="button-container">
                  <button onClick={() => dispatch(deleteCart(product._id))}><CiTrash size={24} color="white" /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart