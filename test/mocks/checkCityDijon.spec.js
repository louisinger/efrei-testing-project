const { checkCityDijon } = require('../../st2tst_js')
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

  it('should be not Dijon', () => {
    document.getElementById('ville').value = 'Paris'
    document.getElementById('codePostal').value = '7500'
    checkCityDijon()
    expect(document.getElementById('ville').style.background).to.equals('white')
  })

  it('should be postal code and city name of Dijon', () => {
    document.getElementById('ville').value = 'DiJoN'
    document.getElementById('codePostal').value = '21000'
    checkCityDijon()
    expect(document.getElementById('ville').style.background).to.equals('white')
  })

  it('should be postal code of Dijon but not the name of the city', () => {
    document.getElementById('ville').value = 'Paris'
    document.getElementById('codePostal').value = '21000'
    checkCityDijon()
    expect(document.getElementById('ville').style.background).to.equals('rgb(255, 214, 116)')
  })
})
