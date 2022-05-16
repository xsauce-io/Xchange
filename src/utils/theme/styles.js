export const styles = {
  //global styles

  global: {
    html: {
      height: "100%",
      width: "100%",
      margin: 0,
    },
    body: { minHeight: "100vh", margin: "auto" },
    a: {
      color: "colors.grey.500",
    },

    // "button:focus": {
    //   background: "colors.gray.700",
    //   border: "1px solid colors.gray.700",
    //   borderRadius: "xs",
    //   color: "colors.white",
    // },
    "a.active": {
      color: "colors.white",
    },

    "button.active": {
      bg: "colors.secondary.500",
      color: "colors.primary.900",
      border: "0px solid",
    },

    "button.inactive": {
      background: "colors.gray.700",
      border: "1px solid colors.gray.700",
      color: "colors.white",
    },

    div: {
      //background: "colors.primary.900",
    },

    "h5.tooltip": {
      fontSize: "xs",
      fontWeight: "bold",
      color: "colors.gray.500",
    },
    "p.tooltip": {
      fontSize: "xs",
      fontWeight: "normal",
      color: "colors.white",
    },
  },
};
