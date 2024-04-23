import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useContext } from "react";
import { ThemeDarkMode } from "./routes";

const Layout = () => {
  const darkMode = useContext(ThemeDarkMode);

  console.log("Layout darkMode: ", darkMode);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <>
      <Outlet />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
};

export default Layout;
