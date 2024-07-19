const commonColor = {
  colors: {
    transparent: "transparent",
    commonWhite: "#FFFFFF",
    commonBlack: "#000000",
    commonDark: "#181B23",
    red: "#F85C50",
  },
};

const ColorsTheme = {
  dark: {
    ...commonColor.colors,
    appBackground: "#181B23",
    textColor: "#ffffff",
    linkColor: "#90caf9",

    white: "#000",
    black: "#ffffff",
  },
  light: {
    ...commonColor.colors,
    appBackground: "#ffffff",
    textColor: "#000000",
    linkColor: "#ffffff",

    white: "#ffffff",
    black: "#000",
  },
};
export { ColorsTheme };
