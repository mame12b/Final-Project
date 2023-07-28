import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { UserAuth } from "../context/AuthContext";
import Heator from "../components/Landing_page/Heator";

export default function Login() {
  const router = useRouter();
  const { Userlogin } = UserAuth();
  const [isdata, setIsData] = useState(false);
  const [error, setError] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const email = watch("email");
  const password = watch("password");
  const submitHandler = async (e) => {
    // e.preventDefault();
    Userlogin(email, password)
      .then((user_data) => {
        setIsData(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      if (user.roll === 2) {
        router.push("/admin1/dashboard");
      }
      // if (user.roll === 1) {
      //   router.push("/admin2");
      // }
      if (user.roll === 0) {
        router.push("/shareholder/dashboard");
      }
    }

    // if (userdata) {
    // //  Userlogin(email,password);
    // }
  }, [isdata]);
  return (
    <Heator>
      <div className="flex justify-center itmes-center bg-gray-300 h-screen  xl:justify-around gap-2  ">
        
        <div className="mt-16 w-1/2 h-3/5 bg-white p-8">
          <div>
         
          <div>
            <h2 className=" flex justify-center font-bold items-center">Log in to your account</h2>
          </div>
         
            <form
             
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="rounded-md shadow-sm -space-y-px">
                
                <div className="my-4 font-bold">
                <label htmlFor="email-address" className="">
                   Email address
                </label>
                </div>
                <input
                  className=" appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                           "
                  id="email"
                  type={"email"}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Please enter email",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    
                      message: "Please enter valid email",
                      
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-red-600">{errors.email.message}</div>
                )}
              </div>
              <div className="rounded-md shadow-sm -space-y-px">
               <div className="my-4">
               <label 
                className="font-bold "
                 htmlFor="">Password</label>
               </div>
                <input
                  className=" appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                           "
                  type={"password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Please enter password",
                    minLength: {
                      value: 6,
                      message: "password is more than 5 chars",
                    },
                  })}
                  id="password"
                />
                {errors.password && (
                  <div className="text-red-500 ">{errors.password.message}</div>
                )}
              </div>

              <div className="mb-8 mt-6">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-16"
                >
                  log in
                </button>
              </div>

            </form>
            {error && <div className="text-red-600 flex justify-center">{error}</div>}

            {/* <div className="-mt-6 flex items-center md:justify-center -ml-6">
              <Link href={"/"}>
                <p className=" py-5 md:pl-32 font-medium text-[20px] text-green-700 sm:pl-18">
                  Forget Password?
                </p>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </Heator>
  );
}
