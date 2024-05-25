import { Button } from "@mui/material";
import apiClient from "../services/apiClient";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../services/user-service";

interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const Update = () => {
  const { id } = useParams();

  const [user, setUser] = useState<User>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      apiClient.get("http://localhost:8000/users/" + id).then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
    };

    fetchUser();
  }, []);

  const navigate = useNavigate();

  const onSubmit = async (values: any, actions: any) => {
    console.log("to je to"), console.log(values), console.log(actions);
    /* await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();*/

    //axios method type: PATCH\
    //send new user object to /users/{id}
    const updatedUser = { id: id, ...values };

    userService
      .update(updatedUser)
      .then((res) => {
        alert("POSLOOOOO");
        setUser(res.data);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  const initialValues = {
    name: user?.name,
    username: user?.username,
    email: user?.email,
    phone: user?.phone,
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues,
      enableReinitialize: true,
      onSubmit,
    });

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
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="name"
            name="username"
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button className="button_submit" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
