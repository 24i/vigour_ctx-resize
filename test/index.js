'use strict'

const test = require('tape')
const cResize = require('../')

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
