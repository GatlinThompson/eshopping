import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useHttp from "../hooks/useHTTPS";
import Product from "../componets/item/Product";

const ItemPage = () => {
  let { itemName } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const { isLoading, error, sendRequest: fetchProduct } = useHttp();

  useEffect(() => {
    if (!itemName || itemName.trim().length == 0) {
      navigate("/");
    }
  }, [itemName]);

  useEffect(() => {
    const transformProduct = (productObj) => {
      setProduct([productObj]);
    };

    fetchProduct(
      {
        url: `https://eshoppi-b6671-default-rtdb.firebaseio.com/products/${itemName}.json`,
      },
      transformProduct
    );
  }, [fetchProduct, itemName]);

  return (
    <main>
      {product.map((item) => (
        <Product key={item.name} item={item} id={itemName} />
      ))}
    </main>
  );
};

export default ItemPage;
