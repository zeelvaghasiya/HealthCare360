import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

function SignUp() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName:"", lastName:"", email:"", password:"", confirmPassword:"", phoneNumber:"" 
  });

  let name,value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault(); 

    const {firstName, lastName, email, password, confirmPassword, phoneNumber} = user;

    const res = await fetch("http://localhost:3000/api-patient/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        firstName, lastName, email, password, confirmPassword, phoneNumber
      })
    });

    const data = await res.json();

    if(data.status === 422 || !data)
    {
      window.alert("Invalid Registration");
      console.log("Invalid Registration")
    }
    else{
      window.alert("Successfull Registration");
      console.log("Successfull Registration")

      navigate("/signin");
    }
  }

  return (
    <section className="mb-6">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-0 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="w-48 h-48 mx-auto ">
            <dotlottie-player
              src="https://lottie.host/52ecf287-65a4-4cbd-a269-d45270894ae1/uHpEOaDjdw.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <h2 className="text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              title=""
              className="font-semibold   text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="fname"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  First Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    onChange={handleInputs}
                    placeholder="First Name"
                    id="fname"
                    name="firstName"
                    value={user.firstName}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Last Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    onChange={handleInputs}
                    placeholder="Last Name"
                    id="lname"
                    name="lastName"
                    value={user.lastName}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    onChange={handleInputs}
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={user.email}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    onChange={handleInputs}
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={user.password}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="cpassword"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Confirm Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    onChange={handleInputs}
                    placeholder="Confirm Password"
                    id="cpassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="phone"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Phone Number{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="tel"
                    onChange={handleInputs}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone Number"
                    id="phone"
                    name="phoneNumber"
                    value={user.phoneNumber}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  value="register"
                  onClick={PostData}
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;