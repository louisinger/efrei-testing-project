const { checkNumTelephone } = require('../../st2tst_js')
const { expect } = require('chai')

describe('Check Telephone Number', () => {
  beforeEach(() => {
    document.body.innerHTML =
    '<div>' +
    '<label><b>Téléphone(s)</b></label></br></br>' +
    '<label>Domicile : </label>' +
    '<input id = "telephoneDomicile" type = "tel" onblur = "checkNumTelephone(this)"/>' +
    '</br></br>' +
    '<p id = "errorNumDomicile" class = "element_evenementiel" style = "color : red; display : none;" >Numéro incorrect. Fomart accepté : xxxxxxxxxx</p>' +
    '<label>Portable : </label>' +
    '<input id = "telephonePortable" type = "tel" onblur = "checkNumTelephone(this)" value = "06"/>' +
    '</br></br>' +
    '<p id = "errorNumPortable" class = "element_evenementiel" style = "color : red; display : none;" >Numéro incorrect. Fomart accepté : xxxxxxxxxx</p>' +
    '</div>'
  })

  it('should display the "telephonePortable" error message', () => {
    document.getElementById('telephonePortable').value = '012'
    checkNumTelephone(document.getElementById('telephonePortable'))
    expect(document.getElementById('errorNumPortable').style.display).to.equals('block')
  })

  it('should not display the "telephonePortable" error message', () => {
    document.getElementById('telephonePortable').value = '0123456789'
    checkNumTelephone(document.getElementById('telephonePortable'))
    expect(document.getElementById('errorNumPortable').style.display).to.equals('none')
  })

  it('should display the "telephonePortable" error message', () => {
    document.getElementById('telephonePortable').value = 'regzsqf'
    checkNumTelephone(document.getElementById('telephonePortable'))
    expect(document.getElementById('errorNumPortable').style.display).to.equals('block')
  })

  it('should display the "telephonePortable" error message', () => {
    document.getElementById('telephoneDomicile').value = '012'
    checkNumTelephone(document.getElementById('telephoneDomicile'))
    expect(document.getElementById('errorNumDomicile').style.display).to.equals('block')
  })

  it('should not display the "telephonePortable" error message', () => {
    document.getElementById('telephoneDomicile').value = '0123456789'
    checkNumTelephone(document.getElementById('telephoneDomicile'))
    expect(document.getElementById('errorNumDomicile').style.display).to.equals('none')
  })

  it('should display the "telephonePortable" error message', () => {
    document.getElementById('telephoneDomicile').value = 'htjhzefs'
    checkNumTelephone(document.getElementById('telephoneDomicile'))
    expect(document.getElementById('errorNumDomicile').style.display).to.equals('block')
  })
})
