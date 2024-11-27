type FieldType = "string" | "double";

type Mapping = {
  type: FieldType;
};

type Mappings = {
  [key: string]: Mapping;
};

type RangedFieldTypes = {
  indexRange: number[];
  mappings: Mappings;
};

type RecordType = {
  hostId: string;
  cpuAvg: number;
  hostName: string;
};

type MockDataType = {
  metadata: object;
  types: RangedFieldTypes[];
  records: RecordType[];
};

export const MOCK_DATA: MockDataType = {
  metadata: {},
  types: [
    {
      indexRange: [0, 11],
      mappings: {
        hostId: { type: "string" },
        cpuAvg: { type: "double" },
        hostName: { type: "string" },
      },
    },
  ],
  records: [
    {
      hostId: "HOST-02A",
      cpuAvg: 10.535,
      hostName: "i-0c84811",
    },
    {
      hostId: "HOST-560",
      cpuAvg: 3.449,
      hostName: "lnx1-dem",
    },
    {
      hostId: "HOST-6DF",
      cpuAvg: 12.76,
      hostName: "ip-172-31",
    },
    {
      hostId: "HOST-84D",
      cpuAvg: 50.268,
      hostName: "ip-172-31",
    },
    {
      hostId: "HOST-A21",
      cpuAvg: 10.998,
      hostName: "i-0c9392d",
    },
    {
      hostId: "HOST-02A",
      cpuAvg: 10.535,
      hostName: "i-0c84811",
    },
    {
      hostId: "HOST-560",
      cpuAvg: 3.449,
      hostName: "lnx1-dem",
    },
    {
      hostId: "HOST-6DF",
      cpuAvg: 12.76,
      hostName: "ip-172-31",
    },
    {
      hostId: "HOST-84D",
      cpuAvg: 50.268,
      hostName: "ip-172-31",
    },
    {
      hostId: "HOST-A21",
      cpuAvg: 10.998,
      hostName: "i-0c9392d",
    },
    {
      hostId: "HOST-84D",
      cpuAvg: 50.268,
      hostName: "ip-172-31",
    },
    {
      hostId: "HOST-A21",
      cpuAvg: 10.998,
      hostName: "i-0c9392d",
    },
  ],
};
