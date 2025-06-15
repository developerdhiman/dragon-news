import { useLoaderData } from "react-router";
import SingleNews from "./SingleNews";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
      {news.map((single) => (
        <SingleNews key={single._id} news={single}></SingleNews>
      ))}
    </div>
  );
};

export default CategoryNews;
