import { useDispatch, useSelector } from "react-redux";
import AdminPanelForm from "../components/AdminPanelForm"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../redux/thunks/products/thunks";
import { CiTrash } from "react-icons/ci";

function AdminPanel() {
  const products = useSelector((state: RootState) => state.productsSlice.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (products === undefined)
      dispatch(getProducts())
    else
      setFilteredProducts(products)
  }, [products]);

  const sortProducts = (order: "asc" | "desc" | "normal") => {
    if (!filteredProducts || !products) return;

    if (order === "asc") {
      const myProducts = filteredProducts.concat();
      setFilteredProducts(myProducts.sort((a, b) => b.price - a.price))
    }

    if (order === "desc") {
      const myProducts = filteredProducts.concat();
      setFilteredProducts(myProducts.sort((a, b) => a.price - b.price))
    }

    if (order === "normal") {
      setFilteredProducts(products)
    }
  }

  const searchByName = (text: string) => {
    if (!filteredProducts || !products) return;

    const myProducts = products?.concat();

    setFilteredProducts(myProducts.filter(item => item.title.toLowerCase().startsWith(text.toLowerCase())))
  }

  return (
    <div id="adminpanel">
      <Header />

      <div id="page-content">
        <h2 style={{
          fontWeight: 700,
          fontSize: "24px",
          color: "#393939",
          textTransform: "uppercase",
          textAlign: "center"
        }}>
          Post A Product
        </h2>

        <div id="form-container">
          <AdminPanelForm />
        </div>

        <h2 style={{
          fontWeight: 700,
          fontSize: "24px",
          color: "#393939",
          textTransform: "uppercase",
          textAlign: "center",
          marginTop: "32px"
        }}>
          Products
        </h2>

        <div id="functions">
          <div id="sorting">
            <button onClick={() => sortProducts("asc")}>Sort by HIGHER</button>
            <button onClick={() => sortProducts("desc")}>Sort by LOWER</button>
            <button onClick={() => sortProducts("normal")}>Normal</button>
          </div>
          <div id="search">
            <input onChange={(e) => searchByName(e.target.value)} />
          </div>
        </div>
        <table>
          <thead>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {filteredProducts && filteredProducts.map(product => {
              return <tr key={product._id}>
                <td><img src={product.thumbnail} /></td>
                <td><p>{product.title}</p></td>
                <td><p>{product.price}</p></td>
                <td><button onClick={() => dispatch(deleteProduct(product._id))}><CiTrash size={24} color="white" /></button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default AdminPanel