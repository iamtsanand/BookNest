import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // Extract email from URL query parameters
  const urlParams = new URLSearchParams(location.search);
  const emailFromParams = urlParams.get("email") || "";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Populate the email field if query parameter exists
  useEffect(() => {
    if (emailFromParams) {
      setValue("email", emailFromParams);
    }
  }, [emailFromParams, setValue]);

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/signup`,
        userInfo
      );
      if (response.data) {
        toast.success("Signup Successfully");
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        navigate(from, { replace: true });
      }
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
            
              <h3 className="font-bold text-2xl text-center ">SignUp</h3>

              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-6 py-3 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
