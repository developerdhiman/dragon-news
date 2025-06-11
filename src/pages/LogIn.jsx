import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const LogIn = () => {
    const {setUser,signInUser} = useContext(AuthContext);
    // const [user, setUser] = useState(null);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);


    signInUser(email, password)
    .then(userCredensial => {
        
        setUser(userCredensial.user)
    })
    .catch(error => {
        console.log(error.message);
    })
  };
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="bg-base-100 w-full max-w-lg shrink-0">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">
              Login your account
            </h2>
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input bg-gray-100 w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input bg-gray-100 w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
                <p>
                  Do not have your account.
                  <Link to="/register" className="font-semibold">Register</Link>
                </p>
              </div>
              <button className="btn btn-neutral mt-4 w-full">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
