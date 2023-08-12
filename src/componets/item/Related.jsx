import useHttp from "../../hooks/useHTTPS";
import { useEffect, useState } from "react";
import RelatedItem from "./RelatedItem";
import classes from "./Related.module.css";
import Message from "../../UI/Message";

const Related = (props) => {
  const [relatedItems, setRelatedItems] = useState([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();

  const getRelatedArray = (lists, related) => {
    const newList = lists.filter(
      (list) =>
        list.keywords.filter((li) => li == related && li != "all").length >=
          1 && list.id != props.item
    );

    return newList;
  };

  useEffect(() => {
    //Gather products infomation
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
      //Get items by keywords assocoiated to the item
      let related = [];
      for (const key in props.related) {
        related = [
          ...related,
          ...getRelatedArray(loadedProducts, props.related[key]),
        ];
      }

      //Get rid of duplicates entries
      const uniqueRelated = Array.from(new Set(related));

      if (uniqueRelated.length < 5) {
        setRelatedItems(uniqueRelated);
        return;
      }

      //Caps related at 5 entires
      const relatedList = [];
      for (let i = 0; i < 5; i++) {
        relatedList.push(uniqueRelated[i]);
      }

      setRelatedItems(relatedList);
    };

    fetchProducts(
      {
        url: "https://eshoppi-b6671-default-rtdb.firebaseio.com/products.json",
      },
      transformProducts
    );
  }, [fetchProducts]);

  return (
    <div className={classes.header}>
      <div className="container">
        {!error && !isLoading && (
          <>
            <h3 className={`mt-3 ${classes.title}`}>Related Items</h3>
            <ul className={`${classes.list}`}>
              {relatedItems.map((relatedItem) => (
                <RelatedItem key={relatedItem.id} item={relatedItem} />
              ))}
            </ul>
          </>
        )}
        {isLoading && <Message message={"Loading..."} />}
        {!isLoading && error && (
          <Message message={"An error has eccoured."} error={error} />
        )}
      </div>
    </div>
  );
};

export default Related;
