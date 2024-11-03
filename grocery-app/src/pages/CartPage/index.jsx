import Navbar from "../../Components/Navbar";
import CartItem from "./CartItem";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CartItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
