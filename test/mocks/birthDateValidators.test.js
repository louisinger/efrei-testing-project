const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
const functions = require("../../st2tst_js");
const $ = require("jquery");
const { toBeVisible } = require("@testing-library/jest-dom");
expect.extend({ toBeVisible });

/*
 checkBirth : click sur vérifier
  checkMineur,
  */

/*   var dateNaissance = new Date(
    document.getElementById("aDn").value +
      "-" +
      document.getElementById("mDn").value +
      "-" +
      document.getElementById("jDn").value
  );*/
/*describe("Check if date valid", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  it("displays error if date in future", () => {
    $("#aDn")
      .children(":selected")
      .text("2050");
    $("#mDn")
      .children(":selected")
      .text("01");
    $("#jDn")
      .children(":selected")
      .text("01");

    functions.checkBirth();
    console.log(
      '$("#errorDateNaissance"): ',
      getComputedStyle(document.getElementById("errorDateNaissance"), null)
    );
    expect($("#errorDateNaissance")).toBeTruthy();
  });

  it("displays error if underage", () => {});

  it("displays valid", () => {});
});*/

jest.mock("../../st2tst_js.js");

test("Check if date valid", () => {
  document.body.innerHTML =
    "<div>" +
    '<p id = "errorDateNaissance" class = "element_evenementiel"' +
    'style = "color : red; display : none;" >Vous êtes donc né(e) dans le futur?</p>' +
    '<p id="dateNaissanceMineur" class="element_evenementiel" style="color : red; display : none;">Vous êtes donc mineur(e)?</p>' +
    '<select id = "jDn"><option value="1995" selected>2050</selected></select>' +
    '<select id = "mDn"><option value="01" selected>01</selected></select>' +
    '<select id = "aDn"><option value="01" selected>01</selected></select>' +
    '<input id = "verifier" type = "button" value = "vérifier" />' +
    "</div>";

  $("#verifier").click(() => {
    functions.checkBirth();
  });

  $("#verifier").click();
  expect(document.querySelector("#errorDateNaissance")).not.toBeVisible();
});
