import * as Yup from "yup";

const getValidationRules = () => {
  return Yup.object().shape({
    email: Yup.string().email("incorrect email").required("field is required"),
    password: Yup.string().required("field is required"),
  });
};

export { getValidationRules };
