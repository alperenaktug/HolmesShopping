import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setSelectedProduct } from "../redux/slices/productSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, selectedProduct } = useSelector((store) => store.product);

  console.log("Tüm Ürünler:", products);
  console.log("Seçili Ürün:", selectedProduct);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((product) => product.id == id);
      if (foundProduct) {
        dispatch(setSelectedProduct(foundProduct));
      }
    }
  }, [id, products, dispatch]);

  return (
    <div>
      {selectedProduct ? (
        <>
          <h1>{selectedProduct.title}</h1>
          <p>{selectedProduct.description}</p>
        </>
      ) : (
        <p>Ürün bulunamadı...</p>
      )}
    </div>
  );
}

export default ProductDetails;
