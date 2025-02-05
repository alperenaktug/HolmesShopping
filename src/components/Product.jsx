import PropTypes from "prop-types";
import "../css/Product.css";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  console.log(product);
  return (
    <div className="card">
      <img style={{ width: 150, height: 200 }} src={image} alt="" />
      <div>
        <p style={{ textAlign: "center" }}>{title}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
