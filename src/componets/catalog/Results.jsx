import classes from "./Results.module.css";

const Results = (props) => {
  let results = "results";
  if (props.length == 1) {
    results = "result";
  }
  return (
    <div className={`pt-3 ${classes.results}`}>
      <div className="container">
        <p className={classes["results-text"]}>
          {props.length} {results} for{" "}
          <span className={classes.span}>"{props.searchedItem}"</span>
        </p>
      </div>
    </div>
  );
};

export default Results;
