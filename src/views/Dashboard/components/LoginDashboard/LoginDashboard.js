import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import CardDataDisplay from "../CardDataDisplay/CardDataDisplay";

const LoginDashboard = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: "medium",
            }}
            gutterBottom
            color={"textSecondary"}
          >
            Welcome
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Dashboard{" "}
          </Typography>
          <Typography color="text.secondary">Your digital wallet is secure using SHA256 encryption.</Typography>
        </Box>
        <Box marginTop={4} margin={"0 auto"} justifyContent={"space-between"} display="flex" width={"100%"} maxWidth={500} marginBottom={4}>
          <CardDataDisplay />
        </Box>
        <Grid item container xs={12}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "stretched", sm: "center" }}
            justifyContent={"space-between"}
            width={"100%"}
            maxWidth={600}
            margin={"0 auto"}
          >
            <Box marginBottom={{ xs: 1, sm: 0 }}>
              <Typography variant={"subtitle2"}>
                Is there a card you don't want to see?{" "}
                <Link component={"a"} color={"primary"} href={"/removecard"} underline={"none"}>
                  Remore a Card.
                </Link>
              </Typography>
            </Box>
            <Button href={"/addcard"} size={"large"} variant={"contained"} type={"submit"}>
              ADD A CARD
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginDashboard;
