import React, { useState } from "react";
import { useFormik } from "formik";
import { AddSchema } from "../schema";
import "../routing/Add.css";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import userService from "../services/user-Service";

interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const Add = () => {
  const onSubmit = async (values: any, actions: any) => {
    console.log("to je to"), console.log(values), console.log(actions);
    addUser();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        username: "",
        email: "",
        phone: "",
      },
      onSubmit,
      validationSchema: AddSchema,
    });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const addUser = () => {
    const newUser = {
      name: values.name,
      username: values.username,
      email: values.email,
      phone: values.phone,
    };

    userService
      .create(newUser)
      .then((res) => {
        alert("tako je breee");
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        style={{
          marginRight: 32,
          borderRadius: 20,
          backgroundColor: "GrayText",
          textTransform: "none",
          fontWeight: 500,
          borderColor: "#12c2e9",
        }}
      >
        Home
      </Button>

      <div className="prva">
        <form className="forma" onSubmit={handleSubmit}>
          {error && <p className="text-danger">{error}</p>}
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? "input-error" : ""}
          />
          {errors.name && touched.name && (
            <p className="input_error_message">{errors.name}</p>
          )}

          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="name"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username ? "input-error" : ""}
          />
          {errors.username && touched.username && (
            <p className="input_error_message">{errors.username}</p>
          )}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="input_error_message">{errors.email}</p>
          )}

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? "input-error" : ""}
          />
          {errors.phone && touched.phone && (
            <p className="input_error_message">{errors.phone}</p>
          )}

          <button className="button_submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
