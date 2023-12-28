import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/dummyData";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";


const LineChart = ({isDashboard = false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <ResponsiveLine
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.primary[300]
                    }
                },
                legend: {
                    text: {
                        fill: colors.primary[300]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.primary[300],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.primary[300]
                    }
                }
            },
            legends: {
                text: {
                    fill: colors.primary[300]
                }
            },
            tooltip: {
                container: {
                    color: colors.primary[500]
                }
            }
        }}
        colors={[colors.primary[500], colors.accent[500]]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "transportation",
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickValues: 5,
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "count",
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={0}
        pointBorderWidth={0}
        useMesh={false}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 20,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.85,
                symbolSize: 30,
                symbolShape: 'circle',
                symbolBorderColor: colors.primary[500],
            }
        ]}
    />
    )
}

export default LineChart