const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(
  path.resolve(__dirname, '../../index.html'),
  'utf8'
)
const { checkNumTelephone } = require('../../st2tst_js')
const { expect } = require('chai')

describe('Birth date', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  it('should display an error message' () => {
    const mockFunction = jest.fn(checkNumTelephone("zr"))
    mockFunction()
    expect(mockFunction.mock.calls.length).toBe(1)

    expect(document.getElementById('jDn')).toBeTruthy()
    expect(document.getElementById('jDn').children).toBeTruthy()
  })
})
