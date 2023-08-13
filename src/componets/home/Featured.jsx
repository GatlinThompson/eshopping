import classes from "./Featured.module.css";
import FeaturedItem from "./FeaturedItem";

const Featured = () => {
  const featured = [
    {
      id: 0,
      title: "Popular Toys",
      keyword: "toy",
    },
    {
      id: 1,
      title: "Hot Electroinics",
      keyword: "electronic",
    },
    {
      id: 2,
      title: "Fun Times Ahead",
      keyword: "fun",
    },
    {
      id: 3,
      title: "Daily Item Deal",
      keyword: "item",
    },
    {
      id: 4,
      title: "Back to School",
      keyword: "school",
    },
    {
      id: 5,
      title: "Loud Items",
      keyword: "music",
    },
    {
      id: 6,
      title: "Popular with Kids",
      keyword: "kid",
    },
    {
      id: 7,
      title: "The Perfect Gifts",
      keyword: "gift",
    },
  ];
  return (
    <div className={classes.featured}>
      <div className={classes.content}>
        {featured.map((feature) => (
          <FeaturedItem
            key={feature.id}
            title={feature.title}
            keyword={feature.keyword}
          />
        ))}
      </div>
    </div>
  );
};
export default Featured;
