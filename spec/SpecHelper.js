const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (asssertion) => {
    if (exp === assertion) {
      console.log('%c Test passed!', "color: green")
      return true
    } else {
      throw new Error('Fail!')
      return false
    }
  },

  toContain: (element) => {
    if (exp.includes(element)) {
      console.log(`%c Test passed! ${exp} includes ${element}!`, "color: green")
      return true
    } else {
      throw new Error(`Fail ${exp} does not include ${element}!`)
      return false
    }
  },

  notToContain: (element) => {
    if (exp.includes(element)) {
      throw new Error(`Fail ${exp} includes ${element}!`)
    } else {
      console.log(`%c Test passed! ${exp} does not include ${element}!`, "color: green")
    }
  }
})

const expect = (exp) => matchers(exp)
