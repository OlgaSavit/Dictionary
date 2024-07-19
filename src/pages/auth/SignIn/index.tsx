import React from "react"
import { Box, Button, FormControl, Paper, TextField, Typography } from "@mui/material"
import LayoutComponent from "@/components/Layout"
import Link from "@/components/Link"
import { RouterPath } from "@/routers/routerPath"

import { useSignIn } from "@/pages/auth/SignIn/useSignIn"

const SignInPage: React.FC = () => {
  const { formik, isDisabledBtn } = useSignIn()
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
              SignIn
            </Typography>
            <form onSubmit={formik.handleSubmit}>
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
                <Link textAlign={"center"} className={"defaultLink"} href={RouterPath.signUpPage}>
                  SignUp
                </Link>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </LayoutComponent>
  )
}
export default SignInPage
