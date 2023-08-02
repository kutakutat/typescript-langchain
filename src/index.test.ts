import { greeting } from "./index";

describe("greeting", () => {
  it("returns a greeting message with the given input", () => {
    const msg = "this is a test message";
    const result = greeting(msg);
    expect(result).toEqual(`Hello World!! ${msg}`);
  });
});
