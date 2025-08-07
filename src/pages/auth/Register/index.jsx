import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Base_url } from "../../../utils/Base_url";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9!@#$%^&*]/, "Must contain at least one number or special character"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        `${Base_url}/user/register`,
        values
      );


      if (response?.data?.status === 'success') {
        toast.success(response?.data?.message)
        navigate('/login')
        resetForm();
      } else {
        toast.error(response?.data?.message)
      }
      console.log(response?.data);
    } catch (error) {
      toast.error(error?.response?.data?.message)

    } finally {
      setSubmitting(false);
    }
  };

  const validatePassword = (password) => ({
    length: password.length >= 8,
    specialChar: /[0-9!@#$%^&*]/.test(password),
    smallLetter: /[a-z]/.test(password),
    capitalLetter: /[A-Z]/.test(password),
  });

  return (
    <>
      <div className="max-w-md mx-auto bg-white my-20 border shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Create an account</h2>
        <p className="text-sm text-gray-600 mt-2">
          See order history, get a game library and check out faster!
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }) => {
            const passwordValidation = validatePassword(values.password);
            return (
              <Form>
                {/* Username Input */}
                <div className="mt-6">
                  <label className=" flex text-sm  gap-1 font-medium text-gray-700">Username <p className=" text-red-500"> * </p> </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Email Input */}
                <div className="mt-4">
                  <label className="flex text-sm gap-1  font-medium text-gray-700">Email <p className=" text-red-500"> * </p>  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Password Input */}
                <div className="mt-4">
                  <label className="flex gap-1 text-sm font-medium text-gray-700">Password <p className=" text-red-500"> * </p>  </label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-blue-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Password Strength Checklist */}
                <div className="mt-3 space-y-1">
                  <p
                    className={`text-sm ${passwordValidation.length ? "text-green-600" : "text-gray-500"
                      }`}
                  >
                    ● At least 8 characters
                  </p>
                  <p
                    className={`text-sm ${passwordValidation.specialChar ? "text-green-600" : "text-gray-500"
                      }`}
                  >
                    ● Special character or a digit
                  </p>
                  <p
                    className={`text-sm ${passwordValidation.smallLetter ? "text-green-600" : "text-gray-500"
                      }`}
                  >
                    ● At least 1 small letter
                  </p>
                  <p
                    className={`text-sm ${passwordValidation.capitalLetter ? "text-green-600" : "text-gray-500"
                      }`}
                  >
                    ● At least 1 capital letter
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-6 w-full py-2 rounded-md ${isSubmitting ? "bg-gray-400" : "bg-blue hover:bg-blue-700"
                    } text-white`}
                >
                  {isSubmitting ? "Creating account..." : "Create account"}
                </button>
              </Form>
            );
          }}
        </Formik>

        <p className="mt-6 text-center text-sm text-gray-600">
          Have an account already?{" "}
          <Link to="/login" className="text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
