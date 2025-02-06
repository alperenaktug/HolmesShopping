import PropTypes from "prop-types";
import "../css/Product.css";
function Product({ product }) {
  const { id, price, image, title, description } = product;
  console.log(product);
  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center", height: "50px" }}>{title}</p>
        <h3>{price}₺</h3>
      </div>
      <div className="flex-row">
        <button className="detail-button">Go to detail page</button>
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
