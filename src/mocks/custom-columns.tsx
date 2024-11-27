import { TableColumn } from "@dynatrace/strato-components-preview/tables";

export const CustomColumns: TableColumn[] = [
  {
    header: "Host ID",
    accessor: "hostId",
    autoWidth: true,
  },
  {
    header: "Host name",
    accessor: "hostName",
    autoWidth: true,
  },
  {
    id: "cpuUsage",
    header: "CPU Usage",
    columnType: "meterbar",
    accessor: ({ idle, ioWait, user, system, steal, other }) => [
      { name: "CPU idle", value: idle },
      { name: "I/O wait", value: ioWait },
      { name: "CPU user", value: user },
      { name: "CPU system", value: system },
      { name: "CPU steal", value: steal },
      { name: "CPU other", value: other },
    ],
    config: {
      showTooltip: true,
    },
    ratioWidth: 1,
  },
];
