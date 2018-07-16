let assert = require('chai').assert
let describe = require('mocha').describe
let it = require('mocha').it

const fromKGToLB = require('..').fromKGToLB
const fromLBToKG = require('..').fromLBToKG
const fromKmToMi = require('..').fromKmToMi
const fromMiToKm = require('..').fromMiToKm
const fromLToGal = require('..').fromLToGal
const fromGalToL = require('..').fromGalToL

describe('#weight conversion functions', function() {

    it('convert 5 Kg to Lb must be 11.0231', function() {
        let lb = `${fromKGToLB(5)}`
        assert.equal(lb,"11.0231")
    })

    it('convert 11 Lb to Kg must be 4.9895119999999995', function() {
        let kg = `${fromLBToKG(11)}`
        assert.equal(kg, "4.9895119999999995")
    })
})

describe('#distance conversion functions', function() {

    it('convert 12 Km to Mi must be 7.4564520000000005', function() {
        let mi = `${fromKmToMi(12)}`
        assert.equal(mi,"7.4564520000000005")
    })

    it('convert 7 Mi to Km must be 11.26538', function() {
        let km = `${fromMiToKm(7)}`
        assert.equal(km, "11.26538")
    })
})

describe('#volume conversion functions', function() {

    it('convert 23 L to Gal must be 6.075956000000001', function() {
        let gal = `${fromLToGal(23)}`
        assert.equal(gal,"6.075956000000001")
    })

    it('convert 8 Gal to L must be 30.28328', function() {
        let l = `${fromGalToL(8)}`
        assert.equal(l, "30.28328")
    })
})