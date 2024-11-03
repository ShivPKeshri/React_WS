import { useSelector } from "react-redux";
import InCarts from "../InCarts";

const CartItem = () => {
  const { inCarts, numberOfCart } = useSelector((state) => state);
  return (
    <div style={{ background: "#ffffff", padding: "20px" }}>
      <h2 className="text-center">In Your Cart ({numberOfCart} items)</h2>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Items</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {inCarts.map((item, index) => (
            <InCarts key={index} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CartItem;
