import * as yup from "yup";

export const AddSchema = yup.object().shape({
  name: yup.string().required("Please enter Name"),
  username: yup.string().required("Please enter UserName"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup.number().required("Please enter Name"),
});

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const registerSchema = yup.object().shape({
  username: yup.string().required("Unesite ime"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Unesite lozinku"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Unesite lozinku jos jednom"),
});
