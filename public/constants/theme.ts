const commonColor = {
  colors: {
    transparent: "transparent",
    commonWhite: "#FFFFFF",
    commonBlack: "#000000",
    commonDark: "#181B23",
    red: "#F85C50",
  },
};

const light = {
  colors: {
    ...commonColor.colors,
    appBackground: "#ffffff",

    white: "#ffffff",
    black: "#000",
  },
};
const dark = {
  colors: {
    ...commonColor.colors,
    appBackground: "#181B23",

    white: "#000",
    black: "#ffffff",
  },
};

export default { light, dark };
