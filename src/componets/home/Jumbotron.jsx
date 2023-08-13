import classses from "./Jumbotron.module.css";

const Jumbotron = () => {
  return (
    <div className={classses.jumbotron}>
      <div className={classses.header}>
        <h2 className={classses.logo}>
          <span>e</span>Shopping
        </h2>
        <h3 className={classses["sub-header"]}>Shopping made easier</h3>
      </div>
    </div>
  );
};

export default Jumbotron;
