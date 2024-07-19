import { CustomError } from "@/pages/auth/types/authTypes"
import { toast } from "react-toastify"
import { FormikProps } from "formik"
function normalizeFieldErrors(errorsList: Record<string, string | number>) {
  const keys = Object.keys(errorsList)
  let errors = {}
  keys?.forEach((item: string) => {
    errors = { ...errors, [item]: errorsList[item].toString() }
  })
  return errors
}

function handlerErrors({ err, formik }: { err: unknown; formik: FormikProps<any> }) {
  let errorTxt: string = "An unknown error occurred"
  if (err instanceof Error) {
    errorTxt = err.message
  } else if (typeof err === "object" && err !== null && "message" in err) {
    const customErr = err as CustomError
    errorTxt = customErr.message || errorTxt
    if (customErr.errors) {
      formik.setErrors({ ...normalizeFieldErrors(customErr.errors) })
    }
  }

  toast(errorTxt, { type: "error" })
}
export { normalizeFieldErrors, handlerErrors }
