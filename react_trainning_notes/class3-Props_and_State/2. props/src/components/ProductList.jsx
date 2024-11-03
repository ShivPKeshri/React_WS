import Product from "./Product";

const ProductList = () => {
  return (
    <div>
      <h2 className="text-center">All Products</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Pid</th>
            <th>Name</th>
            <th>Price</th>
            <th>Mrp</th>
          </tr>
        </thead>
        <tbody>
          <Product pid="1" name="Laptop" price="10000" mrp="12000" />
          <Product pid="1" name="Laptop" price="10000" mrp="12000" />
          <Product pid="1" name="Laptop" price="10000" mrp="12000" />
          <Product pid="1" name="Laptop" price="10000" mrp="12000" />
        </tbody>
      </table>
    </div>
  );
};
export default ProductList;
