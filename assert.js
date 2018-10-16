var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(" Assertion failed: " + assertionToCheck + "is not truthy");
    } else {
      console.log("%c Test passed!", "color: green")
    }
  },

  isString: function (string) {
    if (!typeof string === "" || !typeof string === '') {
      throw new Error(string + ' is not a string!')
    } else {
      console.log("%c Test passed!" + string + " is a string", "color: green")
    }
  },

  isArray: function(array) {
    if (!typeof array === []) {
      throw new Error(array + ' is not an array!')
    } else {
      console.log('%c Test passed!' + array + ' is an array!', "color: green")
    }
  }
};
