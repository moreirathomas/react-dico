import { Selector } from "testcafe";

/**
 * @param attribute The attribute to identify the DOM element
 * @returns The DOM element identified by the given "data-e2e" custom attribute.
 */
export function e2eSelector(attribute: string): Selector {
  return Selector(`[data-e2e="${attribute}"]`);
}
