import { Link } from "react-router-dom";
import classes from "./FeaturedItem.module.css";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHTTPS";
import { useContext } from "react";
import UserContext from "../../store/user-context";
import { auth } from "../../../firebase";
import deal from "../../assets/deal.jpg";

const FeaturedItem = (props) => {
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();
  const [product, setProducts] = useState([]);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    if (props.keyword == "item") {
      return;
    }
    const transformProducts = (productObj) => {
      const loadedProducts = [];

      for (const key in productObj) {
        loadedProducts.push({
          id: key,
          keywords: productObj[key].keywords,
          image: productObj[key].image,
        });
      }

      //Get items by keywords assocoiated to them
      const productsKeywords = loadedProducts.filter(
        (product) =>
          product.keywords.filter((keyword) => keyword == props.keyword)
            .length >= 1
      );

      //Capepd at 4 entires
      const imageList = [];
      for (let i = 0; i < 4; i++) {
        imageList.push(productsKeywords[i]);
      }
      setProducts(imageList);
    };

    fetchProducts(
      {
        url: "https://eshoppi-b6671-default-rtdb.firebaseio.com/products.json",
      },
      transformProducts
    );
  }, [fetchProducts]);

  const signOutHandler = () => {
    userCtx.clearUser();
    auth.signOut();
  };

  return (
    <div className={classes.item}>
      {props.keyword != "item" && (
        <Link to={"/catalog/" + props.keyword}>
          <div className={classes.content}>
            <h3 className={classes.title}>{props.title}</h3>

            <div className={classes["image-container"]}>
              {!isLoading &&
                product.map((image) => (
                  <div key={image.id} className={classes.image}>
                    <img src={image.image} alt={props.keyword} />
                  </div>
                ))}
              {isLoading && <p className={classes.loading}>Loading..</p>}
            </div>
          </div>
        </Link>
      )}
      {props.keyword == "item" && (
        <div className={classes["signin-container"]}>
          <div className={classes.login}>
            {!userCtx.loggedIn && (
              <>
                <h3 className={classes.title}>Sign up Securely</h3>
                <div className={classes["login-button"]}>
                  <Link to="/signup">
                    <button type="button" className={classes.button}>
                      Sign Up
                    </button>
                  </Link>
                </div>
              </>
            )}
            {userCtx.loggedIn && (
              <>
                <h3 className={classes.title}>Logout Securely</h3>
                <div className={classes["login-button"]}>
                  <button
                    type="button"
                    className={classes.button}
                    onClick={signOutHandler}
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
          <div className={classes["login-item"]}>
            <Link to={`/item/tnwmdansw5ocdhkvdt03`}>
              <div className={classes["deal-container"]}>
                <h3 className={classes.title}>{props.title}</h3>
                <div className={classes["login-image"]}>
                  <div className={classes["deal-image"]}>
                    <img src={deal} alt="Set of wooden combs" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedItem;
