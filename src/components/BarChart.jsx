import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/dummyData";

const BarChart = ({ isDashboard }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveBar
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.primary[300],
            },
          },
          legend: {
            text: {
              fill: colors.primary[300],
            },
          },
          ticks: {
            line: {
              stroke: colors.primary[300],
              strokeWidth: 1,
            },
            text: {
              fill: colors.primary[300],
            },
          },
        },
        legends: {
          text: {
            fill: colors.primary[500],
          },
        },
      }}
      data={data}
      keys={["sales", "total"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={[colors.primary[500], colors.gray[500]]}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      enableGridY={false}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 20,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 30,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      isInteractive={false}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default BarChart;
