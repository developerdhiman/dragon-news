import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogIn = () => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold">Login With</h2>
            <div className="flex flex-col gap-2">
                <button className="flex gap-2 items-center justify-center bg-gray-200 px-3 py-1 rounded cursor-pointer"><FaGoogle/> Login With Google</button>
                <button className="flex gap-2 items-center justify-center bg-gray-200 px-3 py-1 rounded cursor-pointer"><FaGithub/> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogIn;