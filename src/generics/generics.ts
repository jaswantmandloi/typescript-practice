import { StringArray } from "./genericsType";

export function pass2DataVariants(values: string | StringArray): number {
  return Array.isArray(values) ? values.length : values.length;
}
