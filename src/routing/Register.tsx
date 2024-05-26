import { useFormik } from "formik";
import { registerSchema } from "../schema";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Link, useNavigate } from "react-router-dom";
import { FormRegister, InputStyled, MainRegister } from "./RegisterStyled";
import axios from "axios";

const onSubmit = async (values: any, actions: any) => {
  console.log("prosao"), console.log(values), console.log(actions);
  axios.post("/").then((res) => res.data);
};

const Register = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
        confirmPass: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });
  return (
    <>
      <MainRegister>
        <h1>Register</h1>
        <FormRegister onSubmit={handleChange}>
          <label htmlFor="userName">
            Username{" "}
            {touched && errors ? (
              <ClearIcon />
            ) : touched && !errors ? (
              <CheckIcon />
            ) : null}
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username ? "input-error" : ""}
          ></input>
          {errors.username && touched.username && (
            <p className="input_error_message">{errors.username}</p>
          )}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          ></input>
          {errors.password && touched.password && (
            <p className="input_error_message">{errors.password}</p>
          )}

          <label htmlFor="password">Confirm Password</label>
          <InputStyled
            id="confirmPass"
            type="password"
            name="confirmPass"
            value={values.confirmPass}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.confirmPass && touched.confirmPass ? "input-error" : ""
            }
          ></InputStyled>
          {errors.confirmPass && touched.confirmPass && (
            <p className="input_error_message">{errors.confirmPass}</p>
          )}

          <button type="submit">Sign Up</button>

          <p>
            Already registred?
            <br />
            <button onClick={() => navigate("/homePage")}>Sign In</button>
          </p>
        </FormRegister>
      </MainRegister>
    </>
  );
};

export default Register;
