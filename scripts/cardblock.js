var H5P = H5P || {};
 
H5P.CardBlock = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      cards: []
    }, options);
    // Keep provided id.
    this.id = id;

    console.log(this.options.cards[0].cardTitle);


    for (var i = 0; i < this.options.cards.length; i++) {
      var self = this;

      console.log(self.options.card[i].cardText);
    }

  };

  
  // for (var i = 0; i < this.options.cards.length; i++) {

  //   /**
  //    * Attach function called by H5P framework to insert H5P content into
  //    * page
  //    *
  //    * @param {jQuery} $container
  //    */
  //   C.prototype.attach = function ($container) {
  //     $container.addClass("h5p-cardblock-container");
  //     $container.append('<div class="cardblock"></div>');
  //     var cardTarget = $('.cardblock');

  //     // Add image if provided.
  //     if (this.options.cards[i].cardImage && this.options.cards[i].cardImage.path) {
  //       var cardMedia = `<div class="card-media"><img class="card-image" src="${H5P.getPath(this.options.cards[i].cardImage.path, this.id)}"></div>`
  //       cardTarget.append(cardMedia);
  //       //$cardTarget.append('<div class="card-media"><img class="card-image" src="' + H5P.getPath(this.options.cardImage.path, this.id) + '"></div>');
  //     }

  //     if (this.options.cards[i].cardTitle) {
  //       cardTarget.append(`<div class="card-body"></div>`);
  //       var cardTitle = `<h3 class="card-title">${this.options.cards[i].cardTitle}</h3>`;
  //       $(".card-body").append(cardTitle);
  //     }

  //     if (this.options.cardText) {
  //       var cardText = `<div class="card-text">${this.options.cards[i].cardText}</div>`;
  //       $(".card-body").append(cardText);
  //     }


  //     //var sanitizedUrl = sanitizeUrlProtocol(url);


  //     if (this.options.cards[i].cardAction.url && this.options.cards[i].cardAction.label) {

  //       var url = '';
  //       if (this.options.cards[i].cardAction.protocol !== 'other') {
  //         url += this.options.cards[i].cardAction.protocol;
  //       }
  //       url += this.options.cards[i].cardAction.url;


  //       var cardAction = `<div class="card-action"><a href="card-action" href="${url}" target="_blank">${this.options.cards[i].cardAction.label}</a>`;

  //       cardTarget.append(cardAction);
  //     }

  //   };
  
    return C;
  
})(H5P.jQuery);