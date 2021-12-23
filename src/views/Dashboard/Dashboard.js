import React from "react";
import Box from "@material-ui/core/Box";
import Container from "../../common/Container";
import { LoginDashboard } from "./components";

const Dashboard = () => {
  return (
    <Box position={"relative"} minHeight={"calc(100vh - 247px)"} display={"flex"} alignItems={"center"} justifyContent={"center"} height={"100%"}>
      <Container maxWidth={600}>
        <LoginDashboard />
      </Container>
    </Box>
  );
};

export default Dashboard;
