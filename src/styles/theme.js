import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#F6F6F6",
      200: "#D4D4D4",
      300: "#8F99A6",
      400: "#737373",
    },
    black: {
      0: "#000",
    },
    yellow: {
      600: "#F3A126",
    },
    green: {
      600: "#21AE1E",
    },

    fontSizes: {
      xs: "0.75rem",
      sm: "0,875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    styles: {
      global: {
        body: {
          bg: "#E5E5E5",
          color: "gray.300",
        },
      },
    },
  },
});
