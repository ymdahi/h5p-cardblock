var H5P = H5P || {};
 
H5P.CardBlock = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      cardTitle: 'Card Title',
      cardImage: null,
      cardText: 'Card Text'
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
    $container.addClass("h5p-cardblock-container");
    $container.append('<div class="cardblock"></div>');
    var cardTarget = $('.cardblock');

    // Add image if provided.
    if (this.options.cardImage && this.options.cardImage.path) {
      var cardMedia = `<div class="card-media"><img class="card-image" src="${H5P.getPath(this.options.cardImage.path, this.id)}"></div>`
      cardTarget.append(cardMedia);
      //$cardTarget.append('<div class="card-media"><img class="card-image" src="' + H5P.getPath(this.options.cardImage.path, this.id) + '"></div>');
    }

    if (this.options.cardTitle) {
      cardTarget.append(`<div class="card-body"></div>`);
      var cardTitle = `<h3 class="card-title">${H5P.getPath(this.options.cardTitle.path, this.id)}</h3>`;
      $(".card-body").append(cardTitle);
    }

    if (this.options.cardText) {
      var cardText = `<p class="card-text">${H5P.getPath(this.options.cardText.path, this.id)}</p>`;
      $(".card-body").append(cardText);
    }
    
  };
 
  return C;
})(H5P.jQuery);