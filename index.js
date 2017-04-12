/**
    * https://aerotwist.com/blog/polymer-for-the-performance-obsessed/
    * Conditionally loads webcomponents polyfill if needed.
    * Credit: Glen Maddern (geelen on GitHub)
    */
    var webComponentsSupported = ('registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template'));

    if (!webComponentsSupported) {
      var wcPoly = document.createElement('script');
      wcPoly.src = '../bower_components/webcomponentsjs/webcomponents-lite.min.js';
      wcPoly.onload = lazyLoadPolymerAndElements;
      document.head.appendChild(wcPoly);
    } else {
      lazyLoadPolymerAndElements();
    }

    function lazyLoadPolymerAndElements() {
      // Let's use Shadow DOM if we have it, because awesome.
      window.Polymer = window.Polymer || {};
      // Setup Polymer options
      window.Polymer = {
        dom: 'shadow',
        lazyRegister: true
      };

      var elements = ['x-demo.html'];

      elements.forEach(function (elementURL) {

        var elImport = document.createElement('link');
        elImport.rel = 'import';
        elImport.href = elementURL;

        document.head.appendChild(elImport);
      });
    };