/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your first name"),
  lastName: yup
    .string("Enter your last name")
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your last name"),
  email: yup.string("Enter your email").trim().email("Please enter a valid email address").required("Email is required."),
  password: yup.string().required("Please specify your password").min(8, "The password should have at minimum length of 8"),

  nickname: yup
    .string("Enter a nickname for this card")
    .trim()
    .min(2, "Please enter a valid nickname for this card")
    .max(50, "Please enter a valid nickname for this card")
    .required("Please specify your last nickname for this card"),
  cardholderName: yup
    .string("Enter the cardholder name")
    .trim()
    .min(2, "Please enter a valid cardholder name")
    .max(50, "Please enter a valid cardholder name")
    .required("Please specify your cardholder name"),
  cardNumber: yup
    .string("Enter the card number (without spaces or dashes)")
    .trim()
    .min(2, "Please enter a valid card number")
    .max(50, "Please enter a valid card number")
    .required("Please specify a card number"),
  expiration: yup
    .string("Enter the experation date")
    .trim()
    .min(2, "Please enter a valid experation date")
    .max(50, "Please enter a valid experation date")
    .required("Please specify a experation date"),
  securityCode: yup
    .string("Enter the security code")
    .trim()
    .min(2, "Please enter a valid security code")
    .max(50, "Please enter a valid security code")
    .required("Please specify a security code"),
  network: yup
    .string("Enter the network")
    .trim()
    .min(2, "Please enter a valid network")
    .max(50, "Please enter a valid network")
    .required("Please specify your a network"),
});

const Form = () => {
  const [value, setValue] = React.useState(new Date());

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    nickname: "",
    cardholderName: "",
    cardNumber: "",
    experation: "",
    securityCode: "",
    network: "",
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Add a Card{" "}
        </Typography>
        <Typography color="text.secondary">Fill out the form to add a card to your wallet.</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter a nickname for this card
            </Typography>
            <TextField
              label="Nickname *"
              variant="outlined"
              name={"nickname"}
              type={"nickname"}
              fullWidth
              value={formik.values.nickname}
              onChange={formik.handleChange}
              error={formik.touched.nickname && Boolean(formik.errors.nickname)}
              helperText={formik.touched.nickname && formik.errors.nickname}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter the name of the card holder ( First Name and Last Name)
            </Typography>
            <TextField
              label="Cardholder name *"
              variant="outlined"
              name={"cardholderName"}
              type={"cardholderName"}
              fullWidth
              value={formik.values.cardholderName}
              onChange={formik.handleChange}
              error={formik.touched.cardholderName && Boolean(formik.errors.cardholderName)}
              helperText={formik.touched.cardholderName && formik.errors.cardholderName}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter the card number (without spaces or dashes)
            </Typography>
            <TextField
              label="Card number *"
              variant="outlined"
              name={"cardNumber"}
              type={"cardNumber"}
              fullWidth
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter the expiration date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DatePicker
                  views={["year", "month"]}
                  label="Month and Year *"
                  minDate={new Date("2022-01-01")}
                  maxDate={new Date("2032-12-01")}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name={"expiration  "}
                      type={"expiration "}
                      fullWidth
                      value={formik.values.expiration}
                      onChange={formik.handleChange}
                      error={formik.touched.expiration && Boolean(formik.errors.expiration)}
                      helperText={formik.touched.expiration && formik.errors.expiration}
                    />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter the security code
            </Typography>
            <TextField
              label="Security code *"
              variant="outlined"
              name={"securityCode"}
              fullWidth
              value={formik.values.securityCode}
              onChange={formik.handleChange}
              error={formik.touched.securityCode && Boolean(formik.errors.securityCode)}
              helperText={formik.touched.securityCode && formik.errors.securityCode}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </Grid>
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
                  Don't want to add a card? You can go back{" "}
                  <Link component={"a"} color={"primary"} href={"/"} underline={"none"}>
                    home.
                  </Link>
                </Typography>
              </Box>
              <Button size={"large"} variant={"contained"} type={"submit"}>
                Done
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
