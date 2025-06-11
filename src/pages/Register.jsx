import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSignUp = (e) => {
    const { setUser, createUser } = useContext(AuthContext);

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((userCredential) => {
        setUser(userCredential);
      })
      .catch((error) => error.message);
  };
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="bg-base-100 w-full max-w-lg shrink-0">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">
              Register your account
            </h2>
            <form onSubmit={handleSignUp} className="fieldset">
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
                  Already have your account.
                  <Link to="/login" className="font-semibold">
                    Log In
                  </Link>
                </p>
              </div>
              <button className="btn btn-neutral mt-4 w-full">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
