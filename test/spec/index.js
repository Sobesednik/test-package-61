const assert = require('assert')
const context = require('../context/')
const testPackage_61 = require('../../src/')

const testPackage_61TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_61, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_61()
        })
    },
}

module.exports = testPackage_61TestSuite
