import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="flex flex-col gap-4 mt-6">
        <h2 className="text-[15px] font-semibold">Find Us On</h2>
      <div className="flex flex-col border-[1px]">
        <button className="flex items-center gap-2 px-3 py-1 cursor-pointer w-full border-b-[1px]">
          <FaFacebook className="text-blue-400"/> Facebook
        </button>
        <button className="flex items-center gap-2 px-3 py-1 cursor-pointer w-full border-b-[1px]">
          <FaTwitter className="text-sky-500"/> Twitter
        </button>
        <button className="flex items-center gap-2 px-3 py-1 cursor-pointer w-full">
          <FaInstagram className="text-rose-500"/> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
