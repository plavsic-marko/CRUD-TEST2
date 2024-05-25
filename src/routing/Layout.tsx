import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import { ThemeProvider } from "../context/themeContext";
import Register from "./Register";

const Layout = () => {
  return (
    <>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Layout;
