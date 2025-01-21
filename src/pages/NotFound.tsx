import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div id="notfound">
      <h2>Error 404 Not Found</h2>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}

export default NotFound