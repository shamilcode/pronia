import { useLocation, useNavigate } from "react-router"

function Details() {
  const location = useLocation();
  const product = location.state.product;
  const navigate = useNavigate();
  
  return (
    <div id="details">
      <img src={product.thumbnail} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  )
}

export default Details