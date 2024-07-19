import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"

import { RouterPath } from "@/routers/routerPath"
import { getValidationRules } from "@/pages/auth/SignUp/validation"
import { userSignUpRequest } from "@/api/requests/auth"
import { CustomError, responseInterface, valuesSignUpInterface } from "@/pages/auth/types/authTypes"
import { handlerErrors, normalizeFieldErrors } from "@/utils/normalize"

const useSignUp = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const formikInitialValues: valuesSignUpInterface = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  }
  const onSignIn = async (values: valuesSignUpInterface) => {
    try {
      setIsLoading(true)
      const resp: responseInterface = await userSignUpRequest(values)
      if (resp?.status === 201) {
        toast("Success! Go to Login", { type: "success" })
        setTimeout(() => {
          navigate(RouterPath.signInPage)
        }, 2000)
      }
    } catch (err: unknown) {
      handlerErrors({ err, formik })
    } finally {
      setIsLoading(false)
    }
  }
  const formik = useFormik({
    initialValues: formikInitialValues,
    validationSchema: getValidationRules(),
    onSubmit: onSignIn,
  })
  return { formik, isDisabledBtn: isLoading }
}

export { useSignUp }
