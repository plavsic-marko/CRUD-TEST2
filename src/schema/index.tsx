import * as yup from "yup";

export const AddSchema = yup.object().shape({
  name: yup.string().required("Please enter Name"),
  username: yup.string().required("Please enter UserName"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup.number().required("Please enter Name"),
});
