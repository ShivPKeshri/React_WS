import Navbar from "../../Components/Navbar";
// import ProductsList from "../../Components/ProductsList";
import SubCategory from "../../Components/SubCategory";
import ProductsList from "../../Components/ProductsList";
const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SubCategory />
          </div>
          <div className="col-md-9">
            <ProductsList />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
