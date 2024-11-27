type FieldType =
  | "string"
  | "boolean"
  | "undefined"
  | "double"
  | "long"
  | "timestamp"
  | "timeframe"
  | "duration"
  | "binary"
  | "ip_address"
  | "geo_point"
  | "array"
  | "record"
  | "uid"
  | "smartscape_id"
  | "date";

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
  timeframeStart: string;
  timeframeEnd: string;
  interval: string;
  hostId: string;
  cpuAvg: number;
  hostName: string;
  idle: number;
  ioWait: number;
  user: number;
  system: number;
  steal: number;
  other: number;
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
        timeframeStart: { type: "date" },
        timeframeEnd: { type: "date" },
        interval: { type: "double" },
        hostId: { type: "string" },
        cpuAvg: { type: "double" },
        hostName: { type: "string" },
        idle: { type: "double" },
        ioWait: { type: "double" },
        user: { type: "double" },
        system: { type: "double" },
        steal: { type: "double" },
        other: { type: "double" },
      },
    },
  ],
  records: [
    {
      timeframeStart: "2024-11-15",
      timeframeEnd: "2024-11-16",
      interval: "1 min",
      hostId: "HOST-02A",
      cpuAvg: 10.535,
      hostName: "i-0c84811",
      idle: 89.526,
      ioWait: 0.06,
      user: 5.55,
      system: 3.108,
      steal: 1.483,
      other: 0.273,
    },
    {
      timeframeStart: "2024-11-16",
      timeframeEnd: "2024-11-16",
      interval: "1 min",
      hostId: "HOST-560",
      cpuAvg: 3.449,
      hostName: "lnx1-dem",
      idle: 94.293,
      ioWait: 0.06,
      user: 4.886,
      system: 0.718,
      steal: 0.0,
      other: 0.042,
    },
    {
      timeframeStart: "2024-11-17",
      timeframeEnd: "2024-11-17",
      interval: "1 min",
      hostId: "HOST-6DF",
      cpuAvg: 12.76,
      hostName: "ip-172-31",
      idle: 85.742,
      ioWait: 0.073,
      user: 7.872,
      system: 2.895,
      steal: 3.138,
      other: 0.279,
    },
    {
      timeframeStart: "2024-11-18",
      timeframeEnd: "2024-11-18",
      interval: "1 min",
      hostId: "HOST-84D",
      cpuAvg: 50.268,
      hostName: "ip-172-31",
      idle: 41.087,
      ioWait: 0.087,
      user: 41.737,
      system: 6.101,
      steal: 10.596,
      other: 0.391,
    },
    {
      timeframeStart: "2024-11-19",
      timeframeEnd: "2024-11-19",
      interval: "1 min",
      hostId: "HOST-A21",
      cpuAvg: 10.998,
      hostName: "i-0c9392d",
      idle: 89.518,
      ioWait: 0.064,
      user: 4.563,
      system: 2.198,
      steal: 3.406,
      other: 0.252,
    },
    {
      timeframeStart: "2024-11-20",
      timeframeEnd: "2024-11-20",
      interval: "1 min",
      hostId: "HOST-02A",
      cpuAvg: 10.535,
      hostName: "i-0c84811",
      idle: 89.526,
      ioWait: 0.06,
      user: 5.55,
      system: 3.108,
      steal: 1.483,
      other: 0.273,
    },
    {
      timeframeStart: "2024-11-21",
      timeframeEnd: "2024-11-21",
      interval: "1 min",
      hostId: "HOST-560",
      cpuAvg: 3.449,
      hostName: "lnx1-dem",
      idle: 94.293,
      ioWait: 0.06,
      user: 4.886,
      system: 0.718,
      steal: 0.0,
      other: 0.042,
    },
    {
      timeframeStart: "2024-11-22",
      timeframeEnd: "2024-11-22",
      interval: "1 min",
      hostId: "HOST-6DF",
      cpuAvg: 12.76,
      hostName: "ip-172-31",
      idle: 85.742,
      ioWait: 0.073,
      user: 7.872,
      system: 2.895,
      steal: 3.138,
      other: 0.279,
    },
    {
      timeframeStart: "2024-11-23",
      timeframeEnd: "2024-11-23",
      interval: "1 min",
      hostId: "HOST-84D",
      cpuAvg: 50.268,
      hostName: "ip-172-31",
      idle: 41.087,
      ioWait: 0.087,
      user: 41.737,
      system: 6.101,
      steal: 10.596,
      other: 0.391,
    },
    {
      timeframeStart: "2024-11-24",
      timeframeEnd: "2024-11-24",
      interval: "1 min",
      hostId: "HOST-A21",
      cpuAvg: 10.998,
      hostName: "i-0c9392d",
      idle: 89.518,
      ioWait: 0.064,
      user: 4.563,
      system: 2.198,
      steal: 3.406,
      other: 0.252,
    },
    {
      timeframeStart: "2024-11-24",
      timeframeEnd: "2024-11-24",
      interval: "1 min",
      hostId: "HOST-84D",
      cpuAvg: 50.268,
      hostName: "ip-172-31",
      idle: 41.087,
      ioWait: 0.087,
      user: 41.737,
      system: 6.101,
      steal: 10.596,
      other: 0.391,
    },
    {
      timeframeStart: "2024-11-25",
      timeframeEnd: "2024-11-25",
      interval: "1 min",
      hostId: "HOST-A21",
      cpuAvg: 10.998,
      hostName: "i-0c9392d",
      idle: 89.518,
      ioWait: 0.064,
      user: 4.563,
      system: 2.198,
      steal: 3.406,
      other: 0.252,
    },
  ],
};
