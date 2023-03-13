import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import React from "react";
import { mockLineData as data } from "../data/lineData";

const LineChart = () => {
  const theme = useTheme();
  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.grey[500],
            },
          },
          legend: {
            text: {
              fill: theme.palette.grey[500],
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.grey[500],
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.grey[600],
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.primary.main,
          },
        },
        tooltip: {
          container: {
            color: theme.palette.grey[500],
          },
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      lineWidth={5}
      pointSize={11}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 45,
          itemOpacity: 0.75,
          symbolSize: 30,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
