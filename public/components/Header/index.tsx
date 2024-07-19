import { Switch } from "@mui/material";
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
interface HeaderComponentInterface {
  title: string;
  isDarkTheme: boolean;
  onChangeTheme: (val: boolean) => void;
}

const Header = ({
  title,
  onChangeTheme,
  isDarkTheme,
}: HeaderComponentInterface) => {
  return (
    <div>
      Header {title}
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <div>
        isDark mode{" "}
        <Switch
          checked={isDarkTheme}
          onChange={(e) => {
            onChangeTheme(!isDarkTheme);
          }}
        />
      </div>
    </div>
  );
};
export default Header;
