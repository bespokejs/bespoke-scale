[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-scale.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-scale)

# bespoke-scale

Responsive Slide Scaling for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-scale/master/dist/bespoke-scale.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-scale/master/dist/bespoke-scale.js

## Usage

First, include both `bespoke.js` and `bespoke-scale.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.horizontal.from('article', {
  scale: true
});
```

## Package managers

### Bower

```bash
$ bower install bespoke-scale
```

### npm

```bash
$ npm install bespoke-scale
```

The bespoke-scale npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-scale');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
