// theme/index.js
import { extendTheme } from "@chakra-ui/react";
// Component style overrides
import { ButtonStyles as Button } from "./components/buttonStyles";
// Foundational style overrides
import borders from "./foundations/borders";
import colors from "./foundations/colors";
import layerStyles from "./foundations/layerStyles";
// Global style overrides
import { styles } from "./styles";

const overrides = {
  styles,
  borders,
  colors,
  layerStyles,

  // Other foundational style overrides go here
  components: {
    Button,
    // Other components go here
  },
};

const Xtheme = extendTheme(overrides);

export default Xtheme;
