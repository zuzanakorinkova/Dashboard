import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../theme";

const initialUserInput = {
  "current-savings": 1000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value, // the "+" converts the string value to a number
      };
    });
  };

  const schema = yup.object().shape({
    "current-savings": yup.number().required("required"),
    "yearly-contribution": yup.number().required("required"),
    "expected-return": yup.number().required("required"),
    duration: yup.number().required("required"),
  });

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const handleFormSubmit = () => {
    // event.preventDefault();
    props.onCalculateData(userInput);
  };

  return (
    <Box m="20px">
      <Typography variant="h5" color={colors.primary[200]} sx={{ mb: "15px" }}>
        Investment calculator
      </Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={userInput}
        validationSchema={schema}
      >
        {({ handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="10px"
              mt="20px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                variant="outlined"
                type="number"
                label="Current Savings"
                onBlur={handleBlur}
                onChange={(event) =>
                  inputChangeHandler("current-savings", event.target.value)
                }
                value={userInput["current-savings"]}
                id="current-savings"
                name="current-savings"
                sx={{ gridColumn: "span 2", marginTop: "10px" }}
              />

              <TextField
                variant="outlined"
                type="number"
                label="Yearly Contribution"
                onBlur={handleBlur}
                onChange={(event) =>
                  inputChangeHandler("yearly-contribution", event.target.value)
                }
                value={userInput["yearly-contribution"]}
                id="yearly-contribution"
                name="yearly-contribution"
                sx={{ gridColumn: "span 2", marginTop: "10px" }}
              />

              <TextField
                variant="outlined"
                type="number"
                label="Expected Return"
                onBlur={handleBlur}
                onChange={(event) =>
                  inputChangeHandler("expected-return", event.target.value)
                }
                value={userInput["expected-return"]}
                id="expected-return"
                name="expected-return"
                sx={{ gridColumn: "span 2", marginTop: "10px" }}
              />
              <TextField
                variant="outlined"
                type="number"
                label="Duration"
                onBlur={handleBlur}
                onChange={(event) =>
                  inputChangeHandler("duration", event.target.value)
                }
                value={userInput["duration"]}
                id="duration"
                name="duration"
                sx={{ gridColumn: "span 2", marginTop: "10px" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="reset" onClick={resetHandler}>
                Reset
              </Button>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disableElevation
              >
                Calculate
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
