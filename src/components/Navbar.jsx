import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    return signOutUser();
  };
  return (
    <div className="flex justify-between items-center">
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        {user ? (
          <button onClick={handleLogOut}>Log Out</button>
        ) : (
          <>
            <div className=" ">
              <img src={userIcon} alt="" />
            </div>
            <Link to="/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
