const commonColor = {
  colors: {
    transparent: "transparent",
    commonWhite: "#FFFFFF",
    commonBlack: "#000000",
    commonDark: "#181B23",
    red: "#F85C50",
  },
}

const light = {
  colors: {
    ...commonColor.colors,
    appBackground: "#ffffff",
    textColor: "#000000",

    white: "#ffffff",
    black: "#000",
  },
}
const dark = {
  colors: {
    ...commonColor.colors,
    appBackground: "#181B23",
    textColor: "#ffffff",
    white: "#000",
    black: "#ffffff",
  },
}

export { light, dark }
