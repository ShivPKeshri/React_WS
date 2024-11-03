import axios from "axios";
import { useEffect, useState } from "react";
import Endpoints from "../../api/Endpoints";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { catId } = useParams();

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCT_BY_CART_ID_URL + catId)
      .then((r) => setProducts(r.data.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchData();
  }, [catId]);
  return (
    <div>
      <h2 className="text-center">All Products</h2>
      <div className="row">
        {products.map((p) => (
          <Product key={p._id} data={p} />
        ))}
      </div>
    </div>
  );
};
export default ProductsList;
