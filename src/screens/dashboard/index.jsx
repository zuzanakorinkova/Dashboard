import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import Form from "../../components/Form";
import React, { useState } from "react";
import Output from "../../components/Output";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["current-savings"];
    const yearlySavings = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlySavings;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlySavings: yearlySavings,
      });
    }
  }

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" />
        <Box></Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        sx={{ borderBottom: `1px solid ${colors.primary[500]}` }}
      >
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          sx={{ borderRight: `1px solid ${colors.primary[500]}` }}
        >
          <Box p="0 30px">
            <Typography variant="h5" color={colors.primary[200]}>
              Revenue Generated
            </Typography>
            <Typography variant="h3" color={colors.accent[500]}>
              $75,323
            </Typography>
          </Box>
          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box gridColumn="span 6" gridRow="span 2">
          <Box p="0 30px">
            <Typography variant="h5" color={colors.primary[200]}>
              Sales quantity
            </Typography>
            <Typography variant="h3" color={colors.primary[500]}>
              $75,323
            </Typography>
          </Box>

          <Box height="270px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          sx={{ borderRight: `1px solid ${colors.primary[500]}` }}
        >
          <Form onCalculateData={calculateHandler} />
        </Box>
        <Box gridColumn="span 6" gridRow="span 2" sx={{ overflow: "scroll" }}>
          {!userInput && (
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              height="200px"
            >
              <Typography
                variant="h5"
                color={colors.primary[200]}
                sx={{ mb: "15px" }}
              >
                Generate output
              </Typography>
              <Typography>No investment calculations made yet.</Typography>
            </Box>
          )}
          {userInput && (
            <Output
              yearlyData={yearlyData}
              initialInvestment={userInput["current-savings"]}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
