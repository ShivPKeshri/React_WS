import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import Constants from "../../api/Constants";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart-actions";


const ProductDetailPage = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCTS_BY_ID_URL + id)
      .then((response) => setProduct(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const onClickHandler = () => {
    dispatch(addToCart(product))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">
              <img
                src={Constants.IMAGE_URL + product.image}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
                <h3>{ product.productName }</h3>
                <p>{ product.unit }</p>
                <p>{ product.description }</p>
                <h2>
            <span>&#8377;</span>
            {product.price}
            <span
              style={{ fontSize: "22px", color: "#888", marginLeft: "10px" }}
            >
              <del>
                <span>&#8377;</span>
                {product.mrp}
              </del>
            </span>
          </h2>
          <button onClick={ onClickHandler } class="btn btn-primary">
            Add To Cart
          </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;