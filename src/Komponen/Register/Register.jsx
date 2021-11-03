import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./register.css";

function Register() {
    const formik = useFormik({
        initialValues: {
            user_name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object({
            user_name: Yup.string()
                .min(4, "Minimal 4 karakter")
                .max(8, "Maksimal 8 karakter")
                .required("Required!"),
            email: Yup.string()
                .email("Format email tidak valid")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimal 8 karakter")
                .required("Required!"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password yang Anda masukkan tidak cocok")
                .required("Required!")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <div className="register">
            <h1>Registration Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="user_name"
                        value={formik.values.user_name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.user_name && formik.touched.user_name && (
                        <p>{formik.errors.user_name}</p>
                    )}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p>{formik.errors.password}</p>
                    )}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirm_password"
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.confirm_password && formik.touched.confirm_password && (
                        <p>{formik.errors.confirm_password}</p>
                    )}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default Register;