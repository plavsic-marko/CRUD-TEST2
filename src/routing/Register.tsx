import { useFormik } from "formik";
import { registerSchema } from "../schema";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Link, useNavigate } from "react-router-dom";
import {
  ButtonStyledGray,
  CheckIconStyledGreen,
  ClearIconStyledRed,
  DivStyledFlexCenter,
  ErrorParagraph,
  FormRegister,
  H1Styled,
  InputParagraphStyled,
  InputStyled,
  LabelStyled,
  MainRegister,
  ParagraphStyled,
} from "./RegisterStyled";
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
        <H1Styled>Sada cekamo Dusana, da nam napravi Server </H1Styled>
        <FormRegister onSubmit={handleChange}>
          <LabelStyled htmlFor="userName">
            Username
            {touched.username && errors.username ? (
              <ClearIconStyledRed />
            ) : touched.username && !errors.username ? (
              <CheckIconStyledGreen />
            ) : null}
          </LabelStyled>
          <InputStyled
            id="username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          ></InputStyled>
          {errors.username && touched.username && (
            <ErrorParagraph>{errors.username}</ErrorParagraph>
          )}

          <LabelStyled htmlFor="password">
            Password
            {touched.password && errors.password ? (
              <ClearIconStyledRed />
            ) : touched.password && !errors.password ? (
              <CheckIconStyledGreen />
            ) : null}
          </LabelStyled>
          <InputStyled
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></InputStyled>
          {errors.password && touched.password && (
            <ErrorParagraph>{errors.password}</ErrorParagraph>
          )}

          <LabelStyled htmlFor="password">Confirm Password</LabelStyled>
          <InputStyled
            id="confirmPass"
            type="password"
            name="confirmPass"
            value={values.confirmPass}
            onChange={handleChange}
            onBlur={handleBlur}
          ></InputStyled>
          {values.confirmPass !== values.password ? (
            <InputParagraphStyled>
              Proveri kako si nakucao sifru
            </InputParagraphStyled>
          ) : (
            <ErrorParagraph>{errors.confirmPass}</ErrorParagraph>
          )}

          <ButtonStyledGray type="submit">Sign Up</ButtonStyledGray>
          <DivStyledFlexCenter>
            <ParagraphStyled>Already registred?</ParagraphStyled>
            <ButtonStyledGray onClick={() => navigate("/homePage")}>
              Sign In
            </ButtonStyledGray>
          </DivStyledFlexCenter>
        </FormRegister>
      </MainRegister>
    </>
  );
};

export default Register;
