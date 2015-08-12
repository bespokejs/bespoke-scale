module.exports = function(options) {
  return function(deck) {
    var parent = deck.parent,
      firstSlide = deck.slides[0],
      slideHeight = firstSlide.offsetHeight,
      slideWidth = firstSlide.offsetWidth,
      wrapEachSlide = options === 'transform-group' ? false : true,
      useZoom = options === 'zoom' || ('zoom' in parent.style && options !== 'transform' && options !== 'transform-group'),

      wrapSlide = function(element) {
        var wrapper = document.createElement('div');
        wrapper.className = 'bespoke-scale-parent';
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(element);
        return wrapper;
      },

      wrapSlides = function(parent, slides) {
        var wrapper = document.createElement('div');
        wrapper.className = 'bespoke-scale-parent';
        slides.forEach(function(slide) {
          wrapper.appendChild(slide);
        });
        return [parent.appendChild(wrapper)];
      },

      elements = useZoom ? deck.slides :
          (wrapEachSlide ? deck.slides.map(wrapSlide) : wrapSlides(deck.parent, deck.slides)),

      transformProperty = (function(property) {
        var prefixes = 'Moz Webkit O ms'.split(' ');
        return prefixes.reduce(function(currentProperty, prefix) {
            return prefix + property in parent.style ? prefix + property : currentProperty;
          }, property.toLowerCase());
      }('Transform')),

      scale = useZoom ?
        function(ratio, element) {
          element.style.zoom = ratio;
        } :
        function(ratio, element) {
          element.style[transformProperty] = 'scale(' + ratio + ')';
        },

      scaleAll = function() {
        var xScale = parent.offsetWidth / slideWidth,
          yScale = parent.offsetHeight / slideHeight;

        elements.forEach(scale.bind(null, Math.min(xScale, yScale)));
      };

    window.addEventListener('resize', scaleAll);
    scaleAll();
  };

};
