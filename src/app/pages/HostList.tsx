import React from "react";
import { Flex } from "@dynatrace/strato-components/layouts";
import { TitleBar } from "@dynatrace/strato-components-preview/layouts";
import { DataTable } from "@dynatrace/strato-components-preview/tables";

//mocked data for demo
import { MOCK_DATA } from "../../mocks/host-list-mock-data";
import { CustomColumns } from "../../mocks/custom-columns";

export const HostList = () => {
  const { records } = MOCK_DATA; // Use the simplified records from MOCK_DATA

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
