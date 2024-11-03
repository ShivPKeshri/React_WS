import Constants from "../../../api/Constants";

const InCarts = (items, index) => {
  const { image, productName, unit, price, mrp, quantity } = items.data;
  console.log(index);
  return (
    <tr key={index}>
      <td>
        <img
          src={Constants.IMAGE_URL + image}
          style={{ width: "120px" }}
          alt=""
          className="img-thumbnail"
        />
      </td>
      <td>
        <h3>{productName}</h3>
        <p>{unit}</p>
      </td>
      <td>
        <h2>
          <span>&#8377;</span>
          {price}
          <span style={{ fontSize: "22px", marginLeft: "10px", color: "#888" }}>
            <del>
              <span>&#8377;</span>
              {mrp}
            </del>
          </span>
        </h2>
      </td>
      <td>
        <h2>{quantity}</h2>
      </td>
      <td>
        <h2>
          <span>&#8377;</span>
          {price * quantity}
        </h2>
      </td>
    </tr>
  );
};
export default InCarts;
