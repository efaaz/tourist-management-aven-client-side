import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";

function Login() {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, googleSignin, gitHubSignin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const login = async (data) => {
    setError("");
    try {
      // console.log("Login function called with data:", data);
      await signIn(data.Email, data.Password);
      toast("sign-in successful");
      navigate(location?.pathname ? location.state : "/");

      // Perform additional login logic here, e.g. redirecting the user
    } catch (error) {
      setError(error.message);
      toast("Invalid user credential");
    }
  };

  const handleGitHubSignin = async (event) => {
    setError("");
    try {
      const result = await gitHubSignin();
      toast("sign-in successful");
      navigate(location?.pathname ? location.state : "/");
    } catch (err) {
      setError(error.message);
    }
  };
  const handleGoogleSignin = async (event) => {
    setError("");
    try {
      const result = await googleSignin();
      toast("sign-in successful");
      navigate(location?.pathname ? location.state : "/");
    } catch (err) {
      setError(error.message);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Be the first to know about properties matching your criteria. Send
              inquiries and schedule viewings with ease – all in one place.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(login)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.Email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("Password", { required: true })}
                />
                {errors.Password && (
                  <p className="text-red-500">Password is required</p>
                )}
                <p className="text-red-600">{error}</p>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-success text-white"
                  value="Login"
                />
                <p className="text-center">or</p>
                <button
                  type="button"
                  className="btn btn-primary my-1"
                  onClick={handleGoogleSignin}
                >
                  Sign in with Google
                </button>
                <p className="text-center">or</p>
                <button
                  type="button"
                  className="btn btn-primary my-1"
                  onClick={handleGitHubSignin}
                >
                  Sign in with GitHub
                </button>
                <p className="text-center">
                  Don't have an account?{" "}
                  <Link className="text-red-700 underline" to="/Sign-up">
                    Register Now
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
