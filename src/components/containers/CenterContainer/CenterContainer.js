import { CircularProgress } from "@mui/material";
import React from "react";
import { Container } from "./CenterContainer.styles";

const CenterContainer = (props) => {
  const { height, ...restProps } = props;
  return (
    <Container height={height} {...restProps}>
      <CircularProgress />
    </Container>
  );
};

export default CenterContainer;
