import React from "react";
import {
  Button,
  Container,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Switch,
} from "@mui/material";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useNavigate } from "react-router-dom";

import { RouterPath } from "@/routers/routerPath";
import Link from "@/components/Link";

import { useHeaderNavigation } from "@/components/Header/useHeaderNavigation";
import Icon from "@/components/Icon";
import { ColorsTheme } from "@/constants/theme";

interface HeaderComponentInterface {
  title: string;
  isDarkTheme: boolean;
  isAuthenticated: boolean;
  onChangeTheme: (val: boolean) => void;
}

const Header: React.FC<HeaderComponentInterface> = ({
  onChangeTheme,
  isDarkTheme,
  isAuthenticated,
}) => {
  const navigate = useNavigate();
  const { mobileMenuOpen, onOpenMobileMenu, onLogout } = useHeaderNavigation();
  const menuLinksList = [
    {
      label: "All topics",
      href: RouterPath.topicsPage,
    },
    {
      label: "My topics",
      href: RouterPath.myTopicPage,
    },
    {
      label: "Create topics",
      href: RouterPath.createTopicPage,
    },
  ];
  const goToLink = (path: string) => {
    path && navigate(path);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth={"xl"}>
            <Toolbar disableGutters>
              <Grid container>
                <Grid item xs={2} sm={5}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    height={"100%"}
                  >
                    <Box
                      sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                      onClick={() => {
                        onOpenMobileMenu(true);
                      }}
                    >
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Box>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      height={"100%"}
                      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                    >
                      {menuLinksList?.map((item, index) => {
                        return (
                          <Link key={index} href={item.href}>
                            {item.label}
                          </Link>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    height={"100%"}
                  >
                    <p>Dictionary</p>
                  </Stack>
                </Grid>
                <Grid item xs={8} sm={5}>
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={2}
                    height={"100%"}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={isDarkTheme}
                            onChange={() => {
                              onChangeTheme(!isDarkTheme);
                            }}
                            aria-label="login switch"
                          />
                        }
                        label={isDarkTheme ? "dark" : "light"}
                      />
                    </FormGroup>
                    {isAuthenticated ? (
                      <Box>
                        <Link href={RouterPath.accountPage}>
                          <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => {}}
                            color="inherit"
                          >
                            <AccountCircle />
                          </IconButton>
                        </Link>
                        <Button onClick={onLogout}>
                          <Icon
                            size={20}
                            color={
                              ColorsTheme[isDarkTheme ? "dark" : "light"]
                                .linkColor
                            }
                            icon={"logout"}
                          />
                        </Button>
                      </Box>
                    ) : (
                      <Link color={"secondary"} href={RouterPath.signInPage}>
                        Sign In
                      </Link>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <Drawer
                anchor={"left"}
                open={mobileMenuOpen}
                onClose={() => {
                  onOpenMobileMenu(false);
                }}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={() => onOpenMobileMenu(!mobileMenuOpen)}
                  onKeyDown={() => onOpenMobileMenu(!mobileMenuOpen)}
                >
                  <List>
                    {menuLinksList.map((item, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            goToLink(item.href);
                          }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Toolbar>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
