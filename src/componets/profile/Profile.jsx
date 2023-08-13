import { useContext, useState } from "react";
import UserContext from "../../store/user-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import useHttp from "../../hooks/useHTTPS";
import UserInfo from "./User";
import classes from "./Profile.module.css";
import Orders from "./Orders";

const Profile = () => {
  const userCtx = useContext(UserContext);
  const { isLoading, error, sendRequest: fetchUser } = useHttp();
  const [user, setUser] = useState([]);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userCtx.loggedIn) {
      navigate("/");
    }
  }, [userCtx]);

  useEffect(() => {
    const transformUser = (userObj) => {
      const userDetails = {
        email: userObj.email,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
      };
      setUser(userDetails);

      const loadedOrders = [];
      for (const key in userObj.orders) {
        loadedOrders.push({
          id: key,
          date: userObj.orders[key].date,
          cart: userObj.orders[key].cart,
          total: userObj.orders[key].total,
        });
      }

      const reverseOrders = loadedOrders.reverse();

      if (reverseOrders.length > 3) {
        const smallOrders = [];

        for (var i = 0; i < 3; i++) {
          smallOrders.push(reverseOrders[i]);
        }
        setOrders(smallOrders);
        return;
      }

      setOrders(reverseOrders);
    };

    fetchUser(
      {
        url: `https://eshoppi-b6671-default-rtdb.firebaseio.com/users/"${userCtx.id}".json`,
      },
      transformUser
    );
  }, [fetchUser]);

  return (
    <main className={"container"}>
      <Header />
      {!isLoading && !error && (
        <>
          <UserInfo info={user} />
          <Orders orders={orders} />
        </>
      )}

      {isLoading && <h3 className={classes.loading}>Loading...</h3>}

      {!isLoading && error && (
        <h3 className={classes.loading}>
          An error occured. Please try again later.
        </h3>
      )}
    </main>
  );
};
export default Profile;
