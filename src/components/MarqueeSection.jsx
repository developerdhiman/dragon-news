import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const MarqueeSection = () => {
  return (
    <div className="flex bg-gray-200 mt-4 py-2">
      <button className="bg-red-400 text-black px-8 py-1 ml-2 rounded">
        Latest
      </button>
      <Marquee speed={50} pauseOnHover={true}>
        <div className="flex gap-10">
          <Link to="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            earum.
          </Link>
          <Link to="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            earum.
          </Link>
          <Link to="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            earum.
          </Link>
          <Link to="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            earum.
          </Link>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
