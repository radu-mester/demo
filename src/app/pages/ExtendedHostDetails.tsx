import React, { useState } from "react";
import { Flex } from "@dynatrace/strato-components/layouts";
import { TitleBar } from "@dynatrace/strato-components-preview/layouts";
import { TimeseriesChart } from "@dynatrace/strato-components-preview/charts";
import type { Timeseries } from "@dynatrace/strato-components-preview/charts";
import {
  ToggleButtonGroup,
  ToggleButtonGroupItem,
} from "@dynatrace/strato-components-preview/buttons";
import { mockTimeseriesDiskUsage } from "@dynatrace/strato-components-preview/mock-data";

export const ExtendedHostDetails = () => {
  const [chartVariant, setChartVariant] = useState<"default" | "area" | "bar">(
    "default"
  );

  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" gap={16}>
      <TitleBar>
        <TitleBar.Title>Host Timeseries Details</TitleBar.Title>
      </TitleBar>

      {/* Toggle Button Group for Chart Variant */}
      <ToggleButtonGroup
        value={chartVariant}
        onChange={(value) =>
          setChartVariant(value as "default" | "area" | "bar")
        }
      >
        <ToggleButtonGroupItem value="default">Default</ToggleButtonGroupItem>
        <ToggleButtonGroupItem value="area">Area</ToggleButtonGroupItem>
        <ToggleButtonGroupItem value="bar">Bar</ToggleButtonGroupItem>
      </ToggleButtonGroup>

      {/* Dynamic TimeseriesChart */}
      <TimeseriesChart
        data={mockTimeseriesDiskUsage}
        variant={chartVariant !== "default" ? chartVariant : undefined}
      />
    </Flex>
  );
};
