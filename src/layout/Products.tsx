import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { useEffect } from "react";
import { getProducts } from "../redux/thunks/products/thunks";
import { CiShoppingCart } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from "react-router";
import { postCart } from "../redux/thunks/cart/thunks";

function Products() {
    const products = useSelector((state: RootState) => state.productsSlice.paginatedProducts);
    const productsCount = useSelector((state: RootState) => state.productsSlice.length);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    return (
        <section id="products">
            <h2 style={{
                fontWeight: 700,
                fontSize: "36px",
                color: "#393939",
                textTransform: "uppercase",
                textAlign: "center"
            }}>
                Our Products
            </h2>

            {productsCount && <select onChange={(e) => dispatch(getProducts(Number(e.target.value)))}>
                {Array.from({ length: productsCount % 4 === 0 ? productsCount / 4 : Math.trunc(productsCount / 4) + 1 }).map((_, i) => i).map(item => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>}

            <div id="content">
                {products && products.map(product => {
                    return (
                        <div key={product._id} className="card">
                            <img src={product.thumbnail} />
                            <p id="title">{product.title}</p>
                            <p id="price">{product.price}</p>

                            <div id="button-container">
                                <button onClick={() => dispatch(postCart(product))}><CiShoppingCart size={24} color="white" /></button>
                                <button onClick={() => navigate("/details", { state: { product } })}><CgDetailsMore size={24} color="white" /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Products