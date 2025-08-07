import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgetPassword = () => {
    const [emailSent, setEmailSent] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
        }),
        onSubmit: (values) => {
            // Simulate API call
            console.log("Submitted Email:", values.email);
            setEmailSent(true);
        },
    });

    return (
        <>
            <div className="max-w-md mx-auto bg-white my-20 border shadow-md rounded-lg p-6">
                {!emailSent ? (
                    <div className="text-center">
                        <div className="bg-[#F1521B] w-20 h-20 mx-auto mb-3 rounded-full flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                fontSize="38"
                            >
                                <g
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeMiterlimit="10"
                                >
                                    <path d="M3 11h18v12H3z"></path>
                                    <circle cx="12" cy="17" r="2"></circle>
                                    <path d="M17 6a4.951 4.951 0 00-4.9-5H12a4.951 4.951 0 00-5 4.9V11"></path>
                                </g>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Forgot your password?
                        </h2>
                        <p className="text-sm text-black mt-2">
                            Enter the email address associated with your DGMARQ
                        </p>

                        <form onSubmit={formik.handleSubmit} className="mt-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className={`mt-1 block w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                                        formik.errors.email && formik.touched.email
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    }`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <p className="text-sm text-left text-red-500 mt-1">
                                        {formik.errors.email}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                            >
                                Continue
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-600">
                            <a href="/login" className="text-blue-500">
                                Back to sign in
                            </a>
                        </p>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="bg-[#F1521B] w-20 h-20 mx-auto mb-3 rounded-full flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                fontSize="38"
                            >
                                <g
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeMiterlimit="10"
                                >
                                    <path d="M3 11h18v12H3z"></path>
                                    <circle cx="12" cy="17" r="2"></circle>
                                    <path d="M17 6a4.951 4.951 0 00-4.9-5H12a4.951 4.951 0 00-5 4.9V11"></path>
                                </g>
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            We've sent you an email at {formik.values.email}
                        </h2>
                        <p className="text-sm text-black mt-2">
                            Open the email and click the button you'll see inside to change
                            your password.
                        </p>
                        <p className="text-sm text-black mt-2">
                            Haven't received the email? Check your inbox again in 10
                            minutes. It might also be in your Spam folder. Make sure you
                            entered a correct email address as well.
                        </p>

                        <p className="mt-6 text-center text-sm text-gray-600">
                            Still can't find the email?{" "}
                            <a href="/login" className="text-blue-500 font-medium">
                                Get a new one.
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default ForgetPassword;
