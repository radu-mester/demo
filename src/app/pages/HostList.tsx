import React from "react";
import { Flex } from "@dynatrace/strato-components/layouts";
import { TitleBar } from "@dynatrace/strato-components-preview/layouts";
// import { ProgressCircle } from "@dynatrace/strato-components/content";
// import { convertToTimeseries } from "@dynatrace/strato-components-preview/conversion-utilities";
import { convertToColumns } from "@dynatrace/strato-components-preview/conversion-utilities";

import {
  DataTable,
  TableColumn,
} from "@dynatrace/strato-components-preview/tables";
// import { useDqlQuery } from "@dynatrace-sdk/react-hooks";
// import { CPU_USAGE_QUERY } from "../queries";
// import { Colors } from "@dynatrace/strato-design-tokens";
import { MOCK_DATA } from "../../mocks/host-list-mock-data";
import { CustomColumns } from "../../mocks/custom-columns"; //

export const HostList = () => {
  const { types, records } = MOCK_DATA; // Extract types and records
  const columns = convertToColumns(types); // Convert types to columns

  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" gap={16}>
      <TitleBar>
        <TitleBar.Title>Hosts Insights</TitleBar.Title>
      </TitleBar>
      <DataTable data={records} columns={CustomColumns}>
        <DataTable.Pagination />
      </DataTable>
    </Flex>
  );
};
