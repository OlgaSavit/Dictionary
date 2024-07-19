import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { useState } from "react"
import { useFormik } from "formik"

import { setAuthStatus, setUserToken } from "@/store/slices/authSlice"
import { userLoginRequest } from "@/api/requests/auth"
import { getValidationRules } from "@/pages/auth/SignIn/validation"

import { responseInterface, valuesSignInInterface } from "@/pages/auth/types/authTypes"
import { handlerErrors } from "@/utils/normalize"

const useSignIn = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const formikInitialValues: valuesSignInInterface = {
    email: "",
    password: "",
  }
  const onSignIn = async (values: valuesSignInInterface) => {
    try {
      setIsLoading(true)
      const resp: responseInterface = await userLoginRequest(values)
      if (resp.status === 200) {
        if (resp.data.token) {
          toast("success", { type: "success" })
          dispatch(setUserToken(resp?.data?.token))
          localStorage.setItem("user_token", resp?.data?.token)
          dispatch(setAuthStatus(true))
        }
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
export { useSignIn }
