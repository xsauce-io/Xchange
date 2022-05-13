// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
//import { colors } from "../foundations/colors"
export const ButtonStyles = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "normal",
    textTransform: "normal",
    borderRadius: "xl", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "1px solid",
      borderColor: "colors.gray.700",
      color: "colors.white",
      borderRadius: "base",
    },
    solid: {
      bg: "colors.primary.900",
      color: "colors.gray.500",
      border: "0px solid",
    },

    flashy: {
      bg: "colors.secondary.500",
      color: "colors.primary.900",
      border: "0px solid",
    },

    dimmy: {
      bg: "colors.gray.700",
      color: "colors.white",
      border: "0px solid",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
};
