import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Base_url } from "../../../utils/Base_url";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/productSlice";

const Login = () => {
    const dispath = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axios.post(
              `${Base_url}/user/login`,
              values
            );
      
      
            if (response?.data?.status === 'success') {
                console.log(response?.data?.data)
              toast.success(response?.data?.message)
              dispath(addUser(response?.data?.data))
              navigate('/')
              resetForm();
            } else {
              toast.error(response?.data?.message)
            }
            console.log(response?.data);
          } catch (error) {
            toast.error(error)
          } finally {
            setSubmitting(false);
          }
    
    };

    return (
        <>
            <div className="py-20 flex items-center justify-center">
                <div className="w-full max-w-md bg-white rounded-lg border shadow-md p-6">
                    <h2 className="text-2xl font-bold text-left mb-6">Sign in</h2>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>

                                <div className="mb-4">
                                    <label
                                        className=" flex gap-1 text-gray-700 font-medium"
                                        htmlFor="email"
                                    >
                                        Email<p className=" text-red-500"> * </p> 
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="flex gap-1 text-gray-700 font-medium"
                                        htmlFor="password"
                                    >
                                        Password <p className=" text-red-500"> * </p> 
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-3 text-sm text-blue-500 focus:outline-none"
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>


                                <div className="flex justify-end mb-4">
                                    <a
                                        href="/forgot-password"
                                        className="text-blue-500 font-semibold text-sm"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-blue text-white rounded-lg py-2 font-medium ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "hover:bg-blue"
                                        }`}
                                >
                                    {isSubmitting ? "Signing in..." : "Sign in"}
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-center text-gray-500 text-sm mt-6">
                        New to Dgmarq?{" "}
                        <a href="/register" className="text-blue-500">
                            Create an account
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
