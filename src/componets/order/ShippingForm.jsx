import { useEffect, useState } from "react";
import classes from "./ShippingForm.module.css";
import { useContext } from "react";
import UserContext from "../../store/user-context";

const ShippingForm = (props) => {
  const userCtx = useContext(UserContext);

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");

  const [validState, setValidState] = useState(false);
  const [validCity, setValidCity] = useState(false);
  const [validAddress, setValidAddress] = useState(false);
  const [validZip, setValidZip] = useState(false);

  const [stateTouched, setStateTouch] = useState(false);
  const [cityTouched, setCityTouch] = useState(false);
  const [addressTouched, setAddressTouch] = useState(false);
  const [zipTouched, setZipTouch] = useState(false);

  let zipValid = "";
  let addressValid = false;

  useEffect(() => {
    let valid = false;

    if (validState && validCity && validAddress && validZip) {
      valid = true;
    }
    const formData = {
      state: state,
      city: city,
      zip: zip,
      address: address,
    };
    props.valid(valid, formData);
  }, [state, city, address, zip]);

  const stateChangeHandler = (event) => {
    setStateTouch(true);
    setState(event.target.value);
    if (event.target.value.trim().length != 0) {
      setValidState(true);
      zipValid = classes.valid;
    } else {
      setValidState(false);
    }
  };

  const cityChangeHandler = (event) => {
    setCityTouch(true);
    setCity(event.target.value);
    if (event.target.value.trim().length != 0) {
      setValidCity(true);
    } else {
      setValidCity(false);
    }
  };

  const addressChangeHandler = (event) => {
    setAddressTouch(true);
    setAddress(event.target.value);
    if (event.target.value.trim().length != 0) {
      setValidAddress(true);
      addressValid = true;
    } else {
      setValidAddress(false);
    }
  };

  const zipChangeHandler = (event) => {
    setZipTouch(true);
    setZip(event.target.value);
    if (event.target.value.trim().length != 0) {
      setValidZip(true);
    } else {
      setValidZip(false);
    }
  };

  return (
    <div className="container">
      <form className={`${classes.form} mx-auto mt-5 pt-5`}>
        <h1>Shipping Infomation</h1>
        <div
          className={` ${classes["form-control"]} ${
            stateTouched && validState ? `${classes.valid}` : ""
          } ${stateTouched && !validState ? `${classes.invalid}` : ""}`}
        >
          <input
            type="text"
            placeholder="State"
            onChange={stateChangeHandler}
            value={state}
          />
          {stateTouched && !validState && (
            <p className={classes.error}>State cannot be empty</p>
          )}
        </div>
        <div
          className={` ${classes["form-control"]} ${
            cityTouched && validCity ? `${classes.valid}` : ""
          } ${cityTouched && !validCity ? `${classes.invalid}` : ""}`}
        >
          <input
            type="text"
            placeholder="City"
            onChange={cityChangeHandler}
            value={city}
          />
          {cityTouched && !validCity && (
            <p className={classes.error}>City cannot be empty</p>
          )}
        </div>
        <div
          className={` ${classes["form-control"]} ${
            addressTouched && validAddress ? `${classes.valid}` : ""
          } ${addressTouched && !validAddress ? `${classes.invalid}` : ""}`}
        >
          <input
            type="text"
            placeholder="Address"
            onChange={addressChangeHandler}
            value={address}
          />
          {addressTouched && !validAddress && (
            <p className={classes.error}>Address cannot be empty</p>
          )}
        </div>
        <div
          className={` ${classes["form-control"]} ${
            zipTouched && validZip ? `${classes.valid}` : ""
          } ${zipTouched && !validZip ? `${classes.invalid}` : ""}`}
        >
          <input
            type="number"
            placeholder="Zipcode"
            onChange={zipChangeHandler}
            value={zip}
          />
          {zipTouched && !validZip && (
            <p className={classes.error}>Zip cannot be empty</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
