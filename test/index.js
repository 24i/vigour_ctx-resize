'use strict'

const test = require('tape')
const cResize = require('../')
const computeCoords = cResize.computeCoords

test('computeCoords', function (t) {
  const cases = [{
    input: [200, 200, 20, 20],
    expected: [0, 0, 200, 200, 20, 20]
  }, {
    input: [200, 200, 300, 300],
    expected: [0, 0, 200, 200, 300, 300]
  }, {
    input: [200, 200, 200, 100],
    expected: [0, 50, 200, 100, 200, 100]
  }, {
    input: [200, 200, 100, 200],
    expected: [50, 0, 100, 200, 100, 200]
  }, {
    input: [200, 200, 150, 300],
    expected: [50, 0, 100, 200, 150, 300]
  }, {
    input: [200, 200, 100, void 0],
    expected: [0, 0, 200, 200, 100, 100]
  }, {
    input: [200, 200, void 0, 300],
    expected: [0, 0, 200, 200, 300, 300]
  }]
  for (let i = 0, len = cases.length; i < len; i += 1) {
    t.deepEqual(computeCoords.apply({}, cases[i].input), {
      width: cases[i].expected[4],
      height: cases[i].expected[5],
      sx: cases[i].expected[0],
      sy: cases[i].expected[1],
      sWidth: cases[i].expected[2],
      sHeight: cases[i].expected[3],
      dx: 0,
      dy: 0,
      dWidth: cases[i].expected[4],
      dHeight: cases[i].expected[5]
    }, cases[i].input)
  }
  t.end()
})

test('ctx-resize', function (t) {
  const Canvas = require('canvas')
  var canvas = new Canvas()
  canvas.width = 100
  canvas.height = 200
  const dimensions = {
    width: 20,
    height: 20
  }
  cResize(dimensions)(canvas, function (err, newCanvas) {
    if (err) {
      t.fail(err)
    }
    t.equal(newCanvas.width, dimensions.width, 'correct width')
    t.equal(newCanvas.width, dimensions.width, 'correct height')
    t.end()
  })
})
