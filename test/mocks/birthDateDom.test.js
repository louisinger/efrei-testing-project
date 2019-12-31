const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
const functions = require("../../st2tst_js");

/*   
  onLoadFunction,
  setJourDateDeNaissance,
  setMoisDateDeNaissance,
  setAnneeDateDeNaissance,
*/

// Checks if the birth date day select element was created properly
describe("Birth date day element", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  it("Select created and options added", function() {
    const mockFunction = jest.fn(functions.setJourDateDeNaissance);
    mockFunction();
    expect(mockFunction.mock.calls.length).toBe(1);

    expect(document.getElementById("jDn")).toBeTruthy();
    expect(document.getElementById("jDn").children).toBeTruthy();
    expect(document.getElementById("jDn").children.length).toBe(31);
  });
});

// Checks if the birth date month select element was created properly
describe("Birth date month element", () => {
  // To simulate the dom creation
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  it("Select created and options added", function() {
    const mockFunction = jest.fn(functions.setMoisDateDeNaissance);
    mockFunction();
    expect(mockFunction.mock.calls.length).toBe(1);

    expect(document.getElementById("mDn")).toBeTruthy();
    expect(document.getElementById("mDn").children).toBeTruthy();
    expect(document.getElementById("mDn").children.length).toBe(12);
  });
});

// Checks if the birth date year select element was created properly
describe("Birth date year element", () => {
  // To simulate the dom creation
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  it("Select created and options added", function() {
    const mockFunction = jest.fn(functions.setAnneeDateDeNaissance);
    mockFunction();
    expect(mockFunction.mock.calls.length).toBe(1);

    expect(document.getElementById("aDn")).toBeTruthy();
    expect(document.getElementById("aDn").children).toBeTruthy();
    expect(document.getElementById("aDn").children.length).toBe(201);
  });
});
