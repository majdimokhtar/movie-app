import { Box, styled } from "@mui/material";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "height",
})(({ height }) => ({
  width: "100%",
  height: height ? height : "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
