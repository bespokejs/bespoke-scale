[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-scale.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-scale) [![Coverage Status](https://coveralls.io/repos/markdalgleish/bespoke-scale/badge.png)](https://coveralls.io/r/markdalgleish/bespoke-scale)

# bespoke-scale

Responsive Slide Scaling for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-scale/master/dist/bespoke-scale.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-scale/master/dist/bespoke-scale.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  scale = require('bespoke-scale');

bespoke.from('article', [
  scale()
]);
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.scale()
]);
```

By default, bespoke-scale detects which method to use for resizing slides. In browsers that support it, CSS `zoom` is used. In all other browsers, each slide is wrapped with an element with a `bespoke-scale-parent` class, which is resized with CSS transforms. You will need to provide styles for this element, for example:

```css
.bespoke-scale-parent {
  perspective: 600px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
```

If you'd like to specify which scaling method to use, you can pass `'zoom'` or `'transform'` as an option, for example:

```js
bespoke.from('article', [
  scale('zoom')
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-scale
```

### Bower

```bash
$ bower install bespoke-scale
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
