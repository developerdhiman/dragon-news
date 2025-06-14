import { Link } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full mt-2.5">
            <div></div>
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="flex items-center gap-2">
                <img src={user} alt="user" />
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;