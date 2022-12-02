export const getColorModeValue =
  (lightVariant: string, darkVariant: string) => (props: any) => {
    const { colorMode } = props;
    return colorMode === "light" ? lightVariant : darkVariant;
  };

const ThemedText = {
  // 2. We can add a new colors size or extend existing
  sizes: {
    "2xs": {
      fontSize: "10px",
      lineHeight: "12.1px",
    },
    xs: {
      fontSize: "12px",
      lineHeight: "14.5px",
    },
    sm: {
      fontSize: "14px",
      lineHeight: "17px",
    },
    md: {
      fontSize: "15px",
      lineHeight: "18px",
    },
    lg: {
      fontSize: "16px",
      lineHeight: "19.5px",
    },
    xl: {
      fontSize: "18px",
      lineHeight: "22px",
    },
    "2xl": {
      fontSize: "20px",
      lineHeight: "24px",
    },
    "3xl": {
      fontSize: "24px",
      lineHeight: "29px",
    },
    "4xl": {
      fontSize: "28px",
      lineHeight: "34px",
    },
    "5xl": {
      fontSize: "32px",
      lineHeight: "39px",
    },
    "6xl": {
      fontSize: "36px",
      lineHeight: "44px",
    },
    "7xl": {
      fontSize: "42px",
      lineHeight: "51px",
    },
    "8xl": {
      fontSize: "48px",
      lineHeight: "58px",
    },
    "9xl": {
      fontSize: "56px",
      lineHeight: "68px",
    },

    "10xl": {
      fontSize: "64px",
      lineHeight: "78px",
    },

    "11xl": {
      fontSize: "72px",
      lineHeight: "88px",
    },

    "12xl": {
      fontSize: "80px",
      lineHeight: "98px",
    },
  },

  // 3. We can add a new visual variant
  variants: {
    primary: (props: any) => ({
      color: getColorModeValue("text.light.000", "text.dark.000")(props),
    }),

    text_white: (props: any) => ({
      color: getColorModeValue("text.dark.000", "text.dark.000")(props),
    }),
    text_black: (props: any) => ({
      color: getColorModeValue("text.light.000", "text.light.000")(props),
    }),

    black_white: (props: any) => ({
      color: getColorModeValue("text.light.000", "text.dark.000")(props),
    }),
    white_black: (props: any) => ({
      color: getColorModeValue("text.dark.000", "text.light.000")(props),
    }),
  },
  // 4. We can override existing variants
  defaultProps: {
    variant: "primary",
  },
};

export default ThemedText;
