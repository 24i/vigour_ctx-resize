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
    var newCanvas = new Canvas(parseInt(options.width, 10), parseInt(options.height, 10))
    var ctx = newCanvas.getContext('2d')

    ctx.drawImage(img, 0, 0, options.width, options.width)
    cb(null, newCanvas)
  }
}
