import * as Yup from "yup"

const getValidationRules = () => {
  return Yup.object().shape({
    name: Yup.string().required("field is required"),
    email: Yup.string().email("email incorrect").required("field is required"),
    password: Yup.string().required("field is required").min(6, "password must have at least 6 symbols"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password")], "password do not match")
      .required("field is required"),
  })
}

export { getValidationRules }
