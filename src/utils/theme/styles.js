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

    ".staking-card-link": {
      color: "colors.white",
      fontSize: "10px",
      alignSelf: "flex-end",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    ".overfow-hidden-ellipsis": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

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

    ".filter-divider": {
      color: "colors.gray.500",
      strokeWidth: "1px",
    },

    ".filter-category-link": {
      color: "colors.gray.500",
      fontSize: "2xl",
    },
    ".filter-category-link-active": {
      color: "colors.white",
      fontSize: "2xl",
    },

    ".select-BlockChain": {
      color: "colors.white",
      borderColor: "colors.gray.500",
    },
  },
};
