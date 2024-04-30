import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../home-page/Homepage";
import Shop from "../shop/Shop";



export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
