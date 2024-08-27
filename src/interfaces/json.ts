import { JSONSchemaType } from "ajv";

interface OptionalData {
  country: string;
  company: string;
  fullName: string;
  email: string;
}

interface DataItem {
  scope: string;
  activity: string;
  emissionSource: string;
  consumption: string;
  unit: string;
  dataSource: string;
}

interface EmissionData {
  optionalData: OptionalData;
  data: DataItem[];
}

const schema: JSONSchemaType<EmissionData> = {
  type: "object", // Expecting an object at the root
  properties: {
    optionalData: {
      type: "object",
      properties: {
        country: { type: "string" },
        company: { type: "string" },
        fullName: { type: "string" },
        email: { type: "string" },
      },
      required: ["country", "company", "fullName", "email"],
    },
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          scope: { type: "string" },
          activity: { type: "string" },
          emissionSource: { type: "string" },
          consumption: { type: "string" },
          unit: { type: "string" },
          dataSource: { type: "string" },
        },
        required: [
          "scope",
          "activity",
          "emissionSource",
          "consumption",
          "unit",
          "dataSource",
        ],
      },
    },
  },
  required: ["optionalData", "data"],
  additionalProperties: false,
};

export default schema;
