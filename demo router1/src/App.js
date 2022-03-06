import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
function useQuery() {
  const { search } = useLocation();
  console.log({ search });
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const products = [
  { id: 1, name: "Pen" },
  { id: 2, name: "Pencil" },
  { id: 3, name: "Marker" },
  { id: 4, name: "Eraser" },
  { id: 5, name: "Sharpner" },
];
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/abc" element={<ABC />} />
        </Routes>
      </Router>
    </>
  );
}
function ABC() {
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </button>
      <h1>ABC </h1>
    </>
  );
}

function Nav() {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function Product() {
  const id = useParams().id;

  return (
    <>
      <h1>Product </h1>
      <p>{id}</p>
    </>
  );
}

export default App;
