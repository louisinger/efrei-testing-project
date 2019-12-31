const { checkMineur } = require('../../st2tst_js.js')
const { expect } = require('chai')

describe('testCheckMineur', () => {
  it('should be a major', () => {
    const today = new Date()
    const birthDay = new Date()
    birthDay.setFullYear(today.getFullYear() - 19)
    expect(checkMineur(today, birthDay), 'the person is a major.').to.be.false
  })

  it('should be a minor', () => {
    const today = new Date()
    const birthDay = new Date()
    birthDay.setFullYear(today.getFullYear() - 17)
    expect(checkMineur(today, birthDay), 'the person is a minor.').to.be.true
  })

  it('should be a major today', () => {
    const today = new Date()
    const birthDay = new Date()
    expect(checkMineur(today, birthDay), 'the person is a major today.').to.be.true
  })
})
