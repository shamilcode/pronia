import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import Cart from "../pages/Cart"
import AdminPanel from "../pages/AdminPanel"
import Details from "../pages/Details"
import NotFound from "../pages/NotFound"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router