import ThemedText from "./ThemedText";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    text: {
      light: {
        "000": "#000000",
        100: "#171923",
        200: "#1A202C",
        300: "#2D3748",
        400: "#4A5568",
        500: "#718096",
      },
      dark: {
        "000": "#FFFFFF",
        100: "#F7FAFC",
        200: "#EDF2F7",
        300: "#E2E8F0",
        400: "#CBD5E0",
        500: "#A0AEC0",
      },
    },
    backgrounds: {
      light: {
        "000": "#FFFFFF",
        100: "#F7FAFC",
        200: "#EDF2F7",
        300: "#E2E8F0",
        400: "#CBD5E0",
        500: "#A0AEC0",
      },
      dark: {
        "000": "#000000",
        100: "#171923",
        200: "#1A202C",
        300: "#2D3748",
        400: "#4A5568",
        500: "#718096",
      },
    },
  },
  components: {
    Text: ThemedText,
  },
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "base",
      },
    }),
  },
});

export default theme;
