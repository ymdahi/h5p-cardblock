var H5P = H5P || {};
 
H5P.CardBlock = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      cardTitle: 'Hello world!',
      cardImage: null
    }, options);
    // Keep provided id.
    this.id = id;
  };
 
  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("h5p-cardblock");
    // Add image if provided.
    if (this.options.cardImage && this.options.cardImage.path) {
      $container.append('<img class="card-image" src="' + H5P.getPath(this.options.cardImage.path, this.id) + '">');
    }
    // Add greeting text.
    $container.append('<div class="card-title">' + this.options.cardTitle + '</div>');
  };
 
  return C;
})(H5P.jQuery);