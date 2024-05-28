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
  DivStyledFlexCenterMT1,
  ErrorParagraph,
  FormRegister,
  H1Styled,
  H1StyledItalic,
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
        <H1StyledItalic>
          Sada cekamo Dusana, da nam napravi Server{" "}
        </H1StyledItalic>
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
            placeholder="Upisi Username..."
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
            placeholder="Budi mastovit..."
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
            placeholder="Potvrdi sifru..."
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
          <DivStyledFlexCenterMT1>
            <ParagraphStyled>Already registered?</ParagraphStyled>
            <ButtonStyledGray onClick={() => navigate("/homePage")}>
              Sign In
            </ButtonStyledGray>
          </DivStyledFlexCenterMT1>
        </FormRegister>
      </MainRegister>
    </>
  );
};

export default Register;
