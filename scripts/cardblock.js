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
    console.log(this.options);
  };

  

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */

  // C.prototype.attach = function ($container) {

  //   $container.addClass("h5p-cardblock-container");
    

  //   for (var i = 0; i < this.options.cards.length; i++) {

  //     $container.append(`<div class="cardblock card-${i + 1}"></div>`);
  //     var cardTarget = $(`.card-${i + 1}`);

  //     // Add image if provided.
  //     if (this.options.cards[i].cardImage && this.options.cards[i].cardImage.path) {
  //       var cardMedia = `<div class="card-media"><img class="card-image" src="${H5P.getPath(this.options.cards[i].cardImage.path, this.id)}"></div>`;
  //       cardTarget.append(cardMedia);
  //     } else {
  //       cardTarget.addClass('no-media');
  //     }

  //     if (this.options.cards[i].cardTitle) {
  //       cardTarget.append(`<div class="card-body"></div>`);
  //       var cardTitle = `<h3 class="card-title">${this.options.cards[i].cardTitle}</h3>`;
  //       $(".card-body", cardTarget).append(cardTitle);
  //     }

  //     if (this.options.cards[i].cardText) {
  //       var cardText = `<div class="card-text">${this.options.cards[i].cardText.params.text}</div>`;
  //       $(".card-body", cardTarget).append(cardText);
  //     }

  //     if (this.options.cards[i].cardAction.url && this.options.cards[i].cardAction.label) {

  //       var url = '';
  //       if (this.options.cards[i].cardAction.protocol !== 'other') {
  //         url += this.options.cards[i].cardAction.protocol;
  //       }
  //       url += this.options.cards[i].cardAction.url;


  //       var cardAction = `<div class="card-action"><a class="card-action" href="${url}" target="_blank">${this.options.cards[i].cardAction.label}</a>`;

  //       cardTarget.append(cardAction);
  //     } else {
  //       cardTarget.addClass('no-action');
  //     }

  //   }
  // };

  return C;

})(H5P.jQuery);