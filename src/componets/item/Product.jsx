import Related from "./Related";
import ProductItem from "./ProductItem";

const Product = (props) => {
  return (
    <>
      <ProductItem item={props.item} />
      <Related related={props.item.keywords} item={props.id} />
    </>
  );
};

export default Product;
