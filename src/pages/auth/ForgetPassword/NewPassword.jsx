import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Formik with Yup validation schema
    const formik = useFormik({
        initialValues: {
            password: "",
            signOutDevices: false,
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .matches(/[!@#$%^&*(),.?":{}|<>0-9]/, "Must include a special character or digit")
                .matches(/[a-z]/, "Must include at least one lowercase letter")
                .matches(/[A-Z]/, "Must include at least one uppercase letter")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log("Form Values:", values);
            alert("Password has been updated!");
        },
    });

    return (
        <>
            <div className="max-w-md mx-auto bg-white my-20 border shadow-md rounded-lg p-6">
                <div className="text-center">
                    <div className="bg-[#F1521B] w-20 h-20 mx-auto mb-3 rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" fontSize="38">
                            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" fill="none" strokeMiterlimit="10">
                                <path d="M3 11h18v12H3z"></path>
                                <circle cx="12" cy="17" r="2"></circle>
                                <path d="M17 6a4.951 4.951 0 00-4.9-5H12a4.951 4.951 0 00-5 4.9V11"></path>
                            </g>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Set new password</h2>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    {/* Password Input */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Your new password"
                                className={`mt-1 block w-full p-3 border ${formik.touched.password && formik.errors.password
                                    ? "border-red-500"
                                    : "border-gray-300"
                                    } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-blue-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                        )}
                    </div>

                    {/* Checkboxes */}
                    <div className="mt-4">
                        <label className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                name="signOutDevices"
                                checked={formik.values.signOutDevices}
                                onChange={formik.handleChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="ml-2">Sign me out on other devices</span>
                        </label>
                    </div>

                    {/* Buttons */}
                    <button
                        type="submit"
                        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Save and sign in
                    </button>
                </form>
            </div>

        </>
    );
};

export default NewPassword;
