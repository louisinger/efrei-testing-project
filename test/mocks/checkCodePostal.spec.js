const { checkCodePostal } = require('../../st2tst_js')
const { expect } = require('chai')

describe('Check Telephone Number', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<div>' +
      '<input id = "codePostal" type = "text" onblur = "checkCodePostal()"/>' +
      '<label>Ville :</label>' +
      '<input id = "ville" type = "text" onblur = "checkCityDijon()"/>' +
      '</br></br>' +
      '<p id = "errorCodePostal" class = "element_evenementiel" style = "color : red; display : none;" >Code postal incorrect</p>' +
      '</div>'
  })

  it('should be a postalCode but not Dijon', () => {
    document.getElementById('codePostal').value = '75000'
    checkCodePostal()
    expect(document.getElementById('errorCodePostal').style.display).to.equals('none')
    expect(document.getElementById('ville').value).not.to.equals('Dijon')
  })

  it('should be the postalCode of Dijon', () => {
    document.getElementById('codePostal').value = '21000'
    checkCodePostal()
    expect(document.getElementById('errorCodePostal').style.display).to.equals('none')
    expect(document.getElementById('ville').value).to.equals('Dijon')
  })

  it('should be not a postalCode', () => {
    document.getElementById('codePostal').value = '012'
    checkCodePostal()
    expect(document.getElementById('errorCodePostal').style.display).to.equals('block')
  })
})
