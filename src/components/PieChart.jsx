import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { mockPieData as data } from "../data/pieData";

const PieChart = () => {
  const theme = useTheme();
  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.grey[100],
            },
          },
          legend: {
            text: {
              fill: theme.palette.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.grey[100],
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ theme: "background" }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.primary.main}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={theme.palette.primary.dark}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", "3"]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 30,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
