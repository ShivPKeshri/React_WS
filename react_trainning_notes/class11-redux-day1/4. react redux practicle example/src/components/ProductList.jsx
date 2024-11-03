import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux-module/actions/product-action";

const ProductList = () => {
  //const [products, setProducts] = useState([]);

  const products = useSelector(state => state.allProducts.products)
  const dispatch = useDispatch()

  const fetchData = () => {
    axios
      .get("https://orca-app-jhg4l.ondigitalocean.app/api/products")
      .then((response) => {
        //setProducts(response.data.data)
        dispatch(setProducts(response.data.data))
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">All Photos</h2>
      <div class="row">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
