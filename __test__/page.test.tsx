import { describe, it, expect } from "vitest";
import { formatMessage } from "@/app/page";

describe("Sample Test Suite", () => {
  it("should pass this sample test", () => {
    const text = "UT";
    const result = formatMessage(text);
    expect(result).toBe("Hello: UT");
  });
});
