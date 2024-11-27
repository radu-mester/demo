import { TableColumn } from "@dynatrace/strato-components-preview/tables";

export const CustomColumns: TableColumn[] = [
  {
    header: "Host ID",
    accessor: "hostId",
    autoWidth: true,
  },
  {
    header: "Host Name",
    accessor: "hostName",
    autoWidth: true,
  },
  {
    id: "cpuUsage",
    header: "CPU Usage",
    columnType: "meterbar",
    accessor: ({ cpuAvg }) => [{ name: "CPU Usage", value: cpuAvg }],
    config: {
      showTooltip: true,
    },
    ratioWidth: 1,
  },
];
