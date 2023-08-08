import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHTTPS";
import Results from "../componets/catalog/Results";
import Message from "../UI/Message";
import List from "../UI/List";
import CatalogItem from "../componets/catalog/CatalogItem";

const CatalogPage = () => {
  let item = "";
  let { itemName } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const { isLoading, error, sendRequest: fetchProducts } = useHttp();

  //Redirect empty searches
  useEffect(() => {
    if (!itemName || itemName.trim().length == 0) {
      navigate("/");
    }
    //lowercase for keyword db searches
    item = itemName.trim().toLowerCase();
  }, [itemName]);

  useEffect(() => {
    const transformProducts = (productObj) => {
      const loadedProducts = [];

      for (const key in productObj) {
        loadedProducts.push({
          id: key,
          name: productObj[key].name,
          keywords: productObj[key].keywords,
          price: productObj[key].price,
          image: productObj[key].image,
          rating: productObj[key].rating,
          reviews: productObj[key].reviews,
        });
      }
      //Get items by keywords assocoiated to them
      const productsKeywords = loadedProducts.filter(
        (product) =>
          product.keywords.filter(
            (keyword) => item.includes(keyword) || keyword.includes(item)
          ).length >= 1
      );
      setProducts(productsKeywords);
    };

    fetchProducts(
      {
        url: "https://eshoppi-b6671-default-rtdb.firebaseio.com/products.json",
      },
      transformProducts
    );
  }, [fetchProducts, itemName]);

  return (
    <main>
      <Results length={products.length} searchedItem={itemName} />
      <div className="container">
        {!error && !isLoading && (
          <List>
            {products.map((product) => (
              <CatalogItem key={product.id} product={product} />
            ))}
          </List>
        )}
        {isLoading && <Message message={"Loading..."} />}
        {!isLoading && error && (
          <Message message={"An error has eccoured."} error={error} />
        )}
        {!isLoading && !error && !products.length && (
          <Message message={"Sorry no item in stock with that name."} />
        )}
      </div>
    </main>
  );
};

export default CatalogPage;
