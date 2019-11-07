var H5P = H5P || {};
 
H5P.CardBlock = (function ($) {
  /**
   * Constructor function.
   */
  function CardBlock(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      cards: []
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

  CardBlock.prototype.attach = function ($container) {
    $container.addClass("h5p-cardblock-container");

    for (var i = 0; i < this.options.cards.length; i++) {
      $container.append(`<div class="cardblock card-${i + 1}"></div>`);
      var cardTarget = $(`.card-${i + 1}`);

      // Add card image if provided.
      if (this.options.cards[i].params.cardImage && this.options.cards[i].params.cardImage.path) {
        var cardMedia = `<div class="card-media"><img class="card-image" src="${H5P.getPath(this.options.cards[i].params.cardImage.path, this.id)}"></div>`;
        cardTarget.append(cardMedia);
      } else {
        cardTarget.addClass('no-media');
      }

      // add card title if provided
      if (this.options.cards[i].params.cardTitle) {
        cardTarget.append(`<div class="card-body"></div>`);
        var cardTitle = `<h3 class="card-title">${this.options.cards[i].params.cardTitle}</h3>`;
        $(".card-body", cardTarget).append(cardTitle);
      }

      // add card text
      if (this.options.cards[i].params.cardText) {
        var cardText = `<div class="card-text">${this.options.cards[i].params.cardText.params.text}</div>`;
        $(".card-body", cardTarget).append(cardText);
      }

      // add card action buttons if provided
      if (this.options.cards[i].params.cardAction.url && this.options.cards[i].params.cardAction.label) {

        var url = '';
        if (this.options.cards[i].params.cardAction.protocol !== 'other') {
          url += this.options.cards[i].params.cardAction.protocol;
        }
        url += this.options.cards[i].params.cardAction.url;


        var cardAction = `<div class="card-action"><a class="card-action" href="${url}" target="_blank">${this.options.cards[i].params.cardAction.label}</a>`;

        cardTarget.append(cardAction);

      } else {
        cardTarget.addClass('no-action');
      }

    }
  };

  return CardBlock;

})(H5P.jQuery);