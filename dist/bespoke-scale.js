/*!
 * bespoke-scale v0.0.0
 * https://github.com/markdalgleish/bespoke-scale
 *
 * Copyright 2013, Mark Dalgleish
 * This content is released under the MIT license
 */

(function(bespoke) {

  bespoke.plugins.scale = function(deck) {
    var parent = deck.parent,
      firstSlide = deck.slides[0],
      slideHeight = firstSlide.offsetHeight,
      slideWidth = firstSlide.offsetWidth,

      scale = function(ratio, element) {
        element.style.zoom = ratio;
      },

      scaleAll = function() {
        var xScale = parent.offsetWidth / slideWidth,
          yScale = parent.offsetHeight / slideHeight;

        deck.slides.forEach(scale.bind(null, Math.min(xScale, yScale)));
      };

    window.addEventListener('resize', scaleAll);
    scaleAll();
  };

}(bespoke));
