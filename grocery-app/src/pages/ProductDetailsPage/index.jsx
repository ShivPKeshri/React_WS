import axios from "axios";
import { useEffect, useState } from "react";
import Endpoints from "../../api/Endpoints";
import Navbar from "../../Components/Navbar";
import Constants from "../../api/Constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart-actions";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const fetchData = () => {
    console.log(Endpoints.PRODUCTS_BY_ID_URL + id);
    axios
      .get(Endpoints.PRODUCTS_BY_ID_URL + id)
      .then((r) => setProduct(r.data.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const onClickHandler = () => {
    dispatch(addToCart(product));
  };

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
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h3>{product.productName}</h3>
              <p>{product.unit}</p>
              <p>{product.description}</p>
              <h2>
                <span>&#8377;</span>
                {product.price}
                <span
                  style={{
                    fontSize: "22px",
                    color: "#888",
                    marginLeft: "10px",
                  }}
                >
                  <del>
                    <span>&#8377;</span>
                    {product.mrp}
                  </del>
                </span>
              </h2>
              <button onClick={onClickHandler} className="btn btn-primary">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailsPage;
