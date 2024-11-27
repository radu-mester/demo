import React, { useMemo, useState } from "react";
import { Flex } from "@dynatrace/strato-components/layouts";
import { TitleBar } from "@dynatrace/strato-components-preview/layouts";
import {
  TimeseriesChart,
  ChartSeriesAction,
} from "@dynatrace/strato-components-preview/charts";
import type { Timeseries } from "@dynatrace/strato-components-preview/charts";
import { SimpleTable } from "@dynatrace/strato-components-preview/tables";
import { MagnifyingGlassIcon } from "@dynatrace/strato-icons";
import { mockTimeseriesDiskUsage } from "@dynatrace/strato-components-preview/mock-data";
import { format } from "@dynatrace-sdk/units";

export const ExtendedHostDetails = () => {
  interface ExtendedTimeseries extends Timeseries {
    region: string;
    link: string;
    host: string;
    disk: string;
    object: { number: number; text: string; isForTesting: boolean };
  }

  const customData = {
    region: "us-east-1",
    link: "https://www.dynatrace.com/",
    object: {
      text: "this is a complex object",
      number: 1,
      isForTesting: true,
    },
  };

  const timeseriesWithCustomData: Timeseries[] = mockTimeseriesDiskUsage.map(
    (series, index) => ({
      ...series,
      ...customData,
      host: series.name[0],
      disk: series.name[1],
      object: {
        ...customData.object,
        number: index + 1,
      },
    })
  );

  const [selectedSeries, setSelectedSeries] = useState<ExtendedTimeseries>();

  const columns = [
    { id: "key", header: "Key", accessor: "key" },
    { id: "value", header: "Value", accessor: "value" },
  ];

  const data = useMemo(() => {
    if (selectedSeries) {
      const { region, host, disk, link, object } = selectedSeries;
      const { start, end, value } = selectedSeries.datapoints[0];
      return [
        { key: "Start", value: start.toLocaleString() },
        { key: "End", value: end?.toLocaleString() },
        { key: "Region", value: region },
        { key: "Host", value: host },
        { key: "Disk", value: disk },
        { key: "Link", value: link },
        { key: "Object", value: JSON.stringify(object) },
        { key: "Value", value: format(value) },
      ];
    }
    return [];
  }, [selectedSeries]);

  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" gap={16}>
      <TitleBar>
        <TitleBar.Title>Host Timeseries Details</TitleBar.Title>
      </TitleBar>
      <TimeseriesChart
        data={timeseriesWithCustomData}
        seriesActions={(seriesAction) => {
          const action = seriesAction as ExtendedTimeseries;
          return (
            <ChartSeriesAction>
              <ChartSeriesAction.Item
                key={action.host}
                onSelect={() => setSelectedSeries(action)}
              >
                <ChartSeriesAction.ItemIcon>
                  <MagnifyingGlassIcon />
                </ChartSeriesAction.ItemIcon>
                Inspect data point
              </ChartSeriesAction.Item>
            </ChartSeriesAction>
          );
        }}
      />
      {selectedSeries && (
        <>
          <h4>
            Selected series: {selectedSeries.host} • {selectedSeries.disk}
          </h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </Flex>
  );
};
