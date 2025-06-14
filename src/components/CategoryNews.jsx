import { useLoaderData } from "react-router";

const CategoryNews = () => {
    const news = useLoaderData();
    console.log(data);
    return (
const {
    image_url,
    title,
    details,
    author,
    total_view,
    rating,
  } = news.data;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 transition hover:shadow-lg">
      <img
        src={image_url}
        alt="news image"
        className="w-full h-64 object-cover"
      />
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {details.slice(0, 180)}...
        </p>

        <div className="flex justify-between items-center pt-4 border-t text-sm text-gray-500">
          {/* Author info */}
          <div className="flex items-center gap-2">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover border"
            />
            <div>
              <p className="font-medium text-gray-700">
                {author.name || "Unknown"}
              </p>
              <p className="text-xs">{author.published_date}</p>
            </div>
          </div>

          {/* Views and Rating */}
          <div className="text-right">
            <p>👁 {total_view} views</p>
            <p>⭐ {rating.number} ({rating.badge})</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CategoryNews;