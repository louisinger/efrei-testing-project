const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
const { resetForm } = require("../../st2tst_js");

describe("Form handling", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  it("should reset the form", () => {
    document.getElementById("nom").value = "Nom";
    document.getElementById("telephoneDomicile").value = "0150236298";

    expect(document.getElementById("nom").value).toHaveLength(3);
    expect(document.getElementById("telephoneDomicile").value).toHaveLength(10);

    const mockFunction = jest.fn(resetForm);
    mockFunction();
    expect(mockFunction.mock.calls.length).toBe(1);

    expect(document.getElementById("nom").value).toHaveLength(0);
    expect(document.getElementById("telephoneDomicile").value).toHaveLength(0);
  });
});
