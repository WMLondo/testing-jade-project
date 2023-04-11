import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    neutralColorMax: "#ffffff",
    neutralColorMax50: "#F1F1F1",
    neutralColorMax100: "#121212",
    neutralColorMin100: "#2C2C2C",
    neutralColorMin200: "#454545",
    neutralColorMin300: "#5E5E5E",
    neutralColorMin400: "#787878",
    primaryColor200: "#10A282",
    primaryColor300: "#10A26A",
    primaryColor: "#10A252",
    primaryColor500: "#10A23A",
    primaryColorDisabled: "#52A384",
    dangerColor: "#A21010",
    dangerColor500: "#A22910",
    dangerColor600: "#8A0E0E",
    dangerColorDisabled: "#BD3939",
  },
  gradients: {
    primaryColorRadialGradient500To400:
      "radial-gradient(50% 50% at 50% 50%, #10A23A 0%, #10A252 100%)",
    primaryColorLinearGradient300To400Transform180:
      "linear-gradient(180deg,#10A26A 0%,#10A252 100%",
    dangerColorLinearGradient500To400Transform180:
      "linear-gradient(180deg,#A22910 0%, #A21010 100%",
  },
  fonts: ["PTSans", "sans-serif"],
  fontSize: {
    s: "13px",
    m: "16px",
    l: "20px",
    xl: "26px",
    xxl: "32px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
