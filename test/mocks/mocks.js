const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
const test = require("../../st2tst_js");

/*   
 
  checkNumTelephone,
  checkCodePostal,
  checkCityDijon,
  checkEmail 
*/
