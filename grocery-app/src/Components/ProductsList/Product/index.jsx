import { Link } from "react-router-dom";
import Constants from "../../../api/Constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cart-actions";

const Product = (product) => {
  const { _id, productName, unit, price, mrp, image } = product.data;
  const dispatch = useDispatch();

  const onClickHandler = () => {
    // console.log(product);
    dispatch(addToCart(product.data));
  };

  return (
    <div className="col-sm-4">
      <div className="card" style={{ marginBottom: "2rem" }}>
        <Link
          to={"/products/detail/" + _id}
          // style={{ color: "black" }}
        >
          <img
            src={Constants.IMAGE_URL + image}
            className="card-img-top"
            style={{ height: "250px" }}
            alt=""
          />
        </Link>
        <div className="card-body">
          <Link to={"/products/detail/" + _id} style={{ color: "black" }}>
            <h5 className="card-title">{productName}</h5>
          </Link>
          <p className="card-text">{unit}</p>
          <h2>
            <span>&#8377;</span>
            {price}
            <span
              style={{ fontSize: "22px", color: "#888", marginLeft: "10px" }}
            >
              <del>
                <span>&#8377;</span>
                {mrp}
              </del>
            </span>
          </h2>
          {/* <Link
            to={"/products/detail/" + _id}
            className="btn btn-primary btn-block"
          >
            Show Details
          </Link> */}
          <button
            onClick={onClickHandler}
            className="btn btn-primary btn-block"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
