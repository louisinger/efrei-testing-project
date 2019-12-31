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

describe("CheckMineur function", () => {
  it("should return true", () => {
    const today = new Date();
    const birthDate = new Date("2005-01-01");

    expect(functions.checkMineur(today, birthDate)).toBe(true);
  });

  it("should return false", () => {
    const today = new Date();
    const birthDate = new Date("1980-01-01");

    expect(functions.checkMineur(today, birthDate)).toBe(false);
  });
});
