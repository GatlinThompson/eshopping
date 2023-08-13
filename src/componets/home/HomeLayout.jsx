import Jumbotron from "./Jumbotron";
import Featured from "./Featured";

const HomeLayout = () => {
  return (
    <main className={"container"}>
      <Jumbotron />
      <Featured />
    </main>
  );
};

export default HomeLayout;
