const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
const test = require("../../st2tst_js");

describe("Birth date", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  it("Select created and options added", function() {
    const mockFunction = jest.fn(test.setJourDateDeNaissance);
    mockFunction();
    expect(mockFunction.mock.calls.length).toBe(1);

    expect(document.getElementById("jDn")).toBeTruthy();
    expect(document.getElementById("jDn").children).toBeTruthy();
  });
});
