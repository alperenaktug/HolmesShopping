import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setSelectedProduct } from "../redux/slices/productSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { price, image, title, description } = selectedProduct;
  const dispatch = useDispatch();

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
            color: "red",
          }}
        >
          {" "}
          {price}₺{" "}
        </h1>
      </div>
    </div>
  );
}
export default ProductDetails;
