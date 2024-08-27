import { JSONSchemaType } from "ajv";

interface Data {
  [scope: string]: {
    [type: string]: {
      [name: string]: string[];
    };
  };
}

const schema: JSONSchemaType<Data> = {
  type: "object", // The root is expected to be an object
  patternProperties: {
    "^.*$": { // Matches any string key for the scope
      type: "object",
      patternProperties: {
        "^.*$": { // Matches any string key for the type
          type: "object",
          patternProperties: {
            "^.*$": { // Matches any string key for the name
              type: "array",
              items: {
                type: "string", // The items in the array are strings representing units
              },
              minItems: 1, // Ensure there is at least one unit
            },
          },
          required: [], // No required properties since the name is dynamic
          additionalProperties: false,
        },
      },
      required: [], // No required properties since the type is dynamic
      additionalProperties: false,
    },
  },
  required: [], // No required properties since the scope is dynamic
  additionalProperties: false,
};

export default schema;
