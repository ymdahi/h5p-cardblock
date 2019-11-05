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
      cardText: 'Card Text',
      cardAction: {
        label: '',
        protocol: '',
        url: ''
      }
    }, options);
    // Keep provided id.
    this.id = id;
  };
 
  var url = '';
  if (this.options.cardAction.protocol !== 'other') {
     url += this.options.cardAction.protocol;
  }
  url += this.options.cardAction.url;

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
      var cardTitle = `<h3 class="card-title">${this.options.cardTitle}</h3>`;
      $(".card-body").append(cardTitle);
    }

    if (this.options.cardText) {
      var cardText = `<div class="card-text">${this.options.cardText}</div>`;
      $(".card-body").append(cardText);
    }


    //var sanitizedUrl = sanitizeUrlProtocol(url);


    if (this.options.cardAction.url && this.options.cardAction.label) {
      var cardAction = `<div class="card-action"><a href="card-action" href="${url}" target="_blank">${this.options.cardAction.label}</a>`;
      cardTarget.append(cardAction);
    }

  };
 
  return C;
})(H5P.jQuery);