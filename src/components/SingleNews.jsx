
const SingleNews = ({ news }) => {
    console.log(news);
  const {
    title = "",
    details = "",
    image_url = "",
    thumbnail_url = "",
    total_view = 0,
    rating = {},
    author = {},
    others_info = {},
  } = news || {};

  // Date formatting
  const formattedDate = author?.published_date
    ? author.published_date.slice(0, 10)
    : "";

  // details preview
  const detailsPreview =
    details && details.length > 200 ? details.slice(0, 200) + "..." : details;

  // Star rating
  const maxStars = 5;
  const fullStars = Math.floor(rating?.number ?? 0);

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 max-w-xl mx-auto relative">
      {/* Share Icon */}
      <div className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-600">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path d="M15 8a3 3 0 1 0-2.83-4H6a3 3 0 1 0 0 2h6.17A3 3 0 0 0 15 8zm0 2a3 3 0 0 0-2.83 2H6a3 3 0 1 0 0 2h6.17A3 3 0 1 0 15 10z" />
        </svg>
      </div>
      {/* Trending badge */}
      {others_info?.is_trending && (
        <span className="badge badge-warning absolute top-4 left-4 font-semibold text-xs px-3 py-2">
          Trending
        </span>
      )}
      {/* Card Body */}
      <div className="card-body space-y-2">
        {/* Author info */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-1">
          <div className="avatar">
            <div className="w-9 rounded-full">
              <img
                src={author?.img}
                alt={author?.name}
              />
            </div>
          </div>
          <div>
            <p className="font-medium text-gray-700">{author?.name}</p>
            <p>{formattedDate}</p>
          </div>
        </div>
        {/* Title */}
        <h2 className="card-title text-gray-800">{title}</h2>
        {/* News Image */}
        <figure>
          <img
            src={image_url || thumbnail_url}
            alt="News Main"
            className="w-full h-56 object-cover rounded"
          />
        </figure>
        {/* Details */}
        <p className="text-gray-700 text-sm leading-relaxed mt-2">
          {detailsPreview}
          {details && details.length > 200 && (
            <span className="text-orange-500 font-semibold cursor-pointer">
              {" "}
              Read More
            </span>
          )}
        </p>
        {/* Rating & Views */}
        <div className="flex items-center justify-between pt-2 border-t mt-2 text-gray-700">
          {/* Star rating */}
          <div className="flex items-center text-[18px]">
            {[...Array(maxStars)].map((_, i) => (
              <span
                key={i}
                className={
                  i < fullStars
                    ? "text-orange-400"
                    : "text-orange-400 opacity-30"
                }
              >
                ★
              </span>
            ))}
            <span className="ml-2 font-bold text-base">{rating?.number}</span>
          </div>
          {/* Views */}
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-lg">👁️</span>
            <span className="font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;