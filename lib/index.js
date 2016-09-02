'use strict'

const Canvas = require('canvas')

/**
 * @id cResize
 * @function cResize
 * @param options {object} - Options for resizing:
 *   - **width** {*number*} - desired width, in pixels
 *   - **height** {*number*} - desired height, in pixels
 * @returns transform {function} - A function that accepts a canvas and returns it resized as specified by `options`
 */
module.exports = exports = function cResize (options) {
  return function transform (canvas, cb) {
    var img = new Canvas.Image()
    img.src = canvas.toBuffer()
    const coords = exports.computeCoords(img.width, img.height, parseInt(options.width, 10), parseInt(options.height, 10))

    var newCanvas = new Canvas(coords.width, coords.height)
    var ctx = newCanvas.getContext('2d')
    ctx.drawImage(img, coords.sx, coords.sy, coords.sWidth, coords.sHeight, coords.dx, coords.dy, coords.dWidth, coords.dHeight)

    cb(null, newCanvas)
  }
}

exports.computeCoords = function computeCoords (originalWidth, originalHeight, width, height) {
  var sx
  var sy
  var sWidth
  var sHeight

  var originalRatio = originalWidth / originalHeight

  if (!width && !height) {
    width = originalWidth
    height = originalHeight
    sx = 0
    sy = 0
    sWidth = originalWidth
    sHeight = originalHeight
  } else {
    if (!width) {
      width = Math.round(originalRatio * height)
    } else if (!height) {
      height = Math.round(width / originalRatio)
    }
    let ratio = width / height
    if (ratio === originalRatio) {
      sx = 0
      sy = 0
      sWidth = originalWidth
      sHeight = originalHeight
    } else if (ratio > originalRatio) {
      // losing height
      sx = 0
      sWidth = originalWidth
      sHeight = Math.round(originalWidth / ratio)
      sy = (originalHeight - sHeight) / 2
    } else {
      // losing width
      sy = 0
      sHeight = originalHeight
      sWidth = Math.round(originalHeight * ratio)
      sx = (originalWidth - sWidth) / 2
    }
    // sx = (originalWidth - width) / 2
    // sy = (originalHeight - height) / 2
  }
  var dx = 0
  var dy = 0
  var dWidth = width
  var dHeight = height
  return {
    width,
    height,
    sx,
    sy,
    sWidth,
    sHeight,
    dx,
    dy,
    dWidth,
    dHeight
  }
}
