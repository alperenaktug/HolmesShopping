import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { price, image, title, description } = selectedProduct;
  const [count, setCount] = useState(0); // useState doğru şekilde kullanıldı
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "50px" }}>
        <img src={image} width={250} height={400} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamily: "arial" }}> {title} </h1>
        <p style={{ fontFamily: "arial", fontSize: "20px" }}> {description} </p>
        <h1
          style={{
            fontSize: "40px",
            fontFamily: "arial",
            fontWeight: "bold",
            color: "hotpink",
          }}
        >
          {" "}
          {price}₺{" "}
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FiPlusSquare
            onClick={increment}
            style={{ fontSize: "40px", marginRight: "5px" }}
          />
          <span
            style={{
              fontSize: "35px",
            }}
          >
            {count}
          </span>
          <FiMinusSquare
            onClick={decrement}
            style={{ fontSize: "40px", marginLeft: "5px" }}
          />
        </div>
        <div>
          <button
            style={{
              marginTop: "20px",
              padding: "12px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "hotpink",
            }}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
