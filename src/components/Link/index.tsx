import React from "react"
import { LinkProps, Link as MuiLink } from "@mui/material"
import { Link as ReactRouterLink } from "react-router-dom"

const Link: React.FC<LinkProps> = (props) => {
  return <MuiLink {...props} component={ReactRouterLink} to={props.href ?? "#"} />
}

export default Link
