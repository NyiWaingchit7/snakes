import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import TopBar from "./TopBar";
interface prop {
  children: ReactNode;
}

const Layout = ({ children }: prop) => {
  return (
    <Box sx={{}}>
      <TopBar />
      <Box>{children}</Box>
    </Box>
  );
};
export default Layout;
