import React from "react"
import { Box, Button, FormControl, Paper, TextField, Typography } from "@mui/material"

import LayoutComponent from "@/components/Layout"
import Link from "@/components/Link"
import { RouterPath } from "@/routers/routerPath"
import { useSignUp } from "@/pages/auth/SignUp/useSignUp"

const SignUpPage: React.FC = () => {
  const { formik, isDisabledBtn } = useSignUp()

  return (
    <LayoutComponent title={"test"} containerFullHeight={true}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            maxWidth: 600,
            display: { xs: "flex", justifyContent: "center", padding: 40 },
          }}
        >
          <Box
            sx={{
              display: {
                xs: "flex",
                justifyContent: "center",
                flexDirection: "column",
              },
            }}
          >
            <Typography variant="h3" component="h3" textAlign={"center"}>
              SignUp
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <FormControl fullWidth={true} margin={"normal"}>
                <TextField
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.name && formik.errors.name}
                  id="name"
                  label="Username"
                  name="name"
                />
              </FormControl>
              <FormControl fullWidth={true} margin={"normal"}>
                <TextField
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.email && formik.errors.email}
                  id="email"
                  label="Email"
                  name="email"
                />
              </FormControl>
              <FormControl fullWidth={true} margin={"normal"}>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </FormControl>
              <FormControl fullWidth={true} margin={"normal"}>
                <TextField
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  label="Confirm password"
                  type="password"
                  value={formik.values.passwordConfirmation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                  helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                />
              </FormControl>
              <Box
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Button disabled={isDisabledBtn} color="primary" variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    justifyContent: "center",
                  },
                  mt: 2,
                }}
              >
                <Link textAlign={"center"} className={"defaultLink"} href={RouterPath.signInPage}>
                  SignIn
                </Link>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </LayoutComponent>
  )
}
export default SignUpPage
