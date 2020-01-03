const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(
  path.resolve(__dirname, '../../index.html'),
  'utf8'
)
const { validateForm } = require('../../st2tst_js')
const { expect } = require('chai')

describe('Valisate Form', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  it('should display the "telephonePortable" error message', () => {
    document.getElementById('nom').value = 'Jean Dupont'
    document.getElementById('jDn').value = '01'
    const day = document.getElementById('jDn')
    document.getElementById('mDn').set = '01'
    document.getElementById('aDn').value = '1990'
    document.getElementById('telephonePortable').value = '0612345678'
    document.getElementById('telephoneDomicile').value = '0123456789'
    document.getElementById('rue').value = 'Rue des pommiers'
    document.getElementById('ville').value = 'Paris'
    document.getElementById('codePostal').value = '75001'
    document.getElementById('email').value = 'email@exemple.fr'
    document.getElementsByName('profession')[0].value = 'Etudiant'
    document.getElementsByName('qualification_etudiant')[0].value = 'Motivé'
    document.getElementsByName('qualification_etudiant')[1].value = 'Inquiet'
    validateForm()
    const expectResult = '<h1>Résumé de vos informations</h1>' +
    '<p>M/Mme Jean Dupont est né(e) le 01/01/1990.' +
    '</p>Ses coordonées sont les suivantes : <ul><li>' +
    '<p>Téléphone portable : 0612345678</p></li><li>' +
    '<p>Téléphone fixe : 0123456789</p></li><li>' +
    '<p>Adresse : Rue des pommiers Paris 75001</p>' +
    '</li><li><p>Adresse email : email@exemple.fr</p></li></ul>'
    expect(document.body.innerHTML).to.equals(expectResult)
  })
})
