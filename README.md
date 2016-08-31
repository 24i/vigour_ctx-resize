# ctx-resize

Resizes a canvas

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/ctx-resize.svg?branch=master)](https://travis-ci.org/vigour-io/ctx-resize)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/ctx-resize.svg)](https://badge.fury.io/js/ctx-resize)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/ctx-resize/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/ctx-resize?branch=master)

<!-- VDOC END -->

<!-- VDOC.jsdoc cResize -->

## Examples

#### javascript (browser)
```javascript
const cResize = require('ctx-resize')
const dimensions = {
  width: 900,
  height: 600
}
var canvas = document.getElementById('aCanvas')
canvas.width = 1000
canvas.height = 1000

const transform = cResize(dimensions)
transform(canvas, function (err, newCanvas) {
  assert(newCanvas.width === dimensions.width)
  assert(newCanvas.heigth === dimensions.height)
})
```

#### Node.js
```javascript
const cResize = require('ctx-resize')
const dimensions = {
  width: 900,
  height: 600
}
const Canvas = require('canvas')
var canvas = new Canvas(1000, 1000)

const transform = cResize(dimensions)
transform(canvas, function (err, newCanvas) {
  assert(newCanvas.width === dimensions.width)
  assert(newCanvas.heigth === dimensions.height)
})
```