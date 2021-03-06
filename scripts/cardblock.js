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
    $container.addClass('h5p-cardblock-container');
    var cardBlock;

    for (var i = 0; i < this.options.cards.length; i++) {
      var currentCard = this.options.cards[i];
      cardBlock = $('<div class="cardblock"></div>');
      $container.append(cardBlock);   

      // Add card image if provided.
      if (currentCard.params.cardImage && currentCard.params.cardImage.path) {
        // var cardMedia = $('<div class="card-media"><img class="card-image" src="'
        //   + H5P.getPath(currentCard.params.cardImage.path, this.id) +'"></div>');
        // cardBlock.append(cardMedia);
        let cardMedia = $('<div class="card-media"></div>');
        cardBlock.append(cardMedia);
        cardMedia.css('background-image', 'url("' + H5P.getPath(currentCard.params.cardImage.path, this.id) + '")');        
      } else {
        cardBlock.addClass('no-media');
      }

      // add card title (optional) and card body text (required)
      if (currentCard.params.cardTitle) {
        var cardBody = $('<div class="card-body"></div>');
        var cardText = $('<div class="card-text">' + currentCard.params.cardText.params.text 
          + '</div>');
        var cardTitle = $('<h3 class="card-title">' + currentCard.params.cardTitle 
          + '</h3>');
        cardBlock.append(cardBody);
        cardBody.append(cardTitle);
        cardBody.append(cardText);
      }

      // add card action buttons if provided
      if (currentCard.params.cardAction.url && currentCard.params.cardAction.label) {

        var url = '';
        if (currentCard.params.cardAction.protocol !== 'other') {
          url += currentCard.params.cardAction.protocol;
        }
        url += currentCard.params.cardAction.url;

        var cardAction = $('<div class="card-action"><a class="card-action" href="' 
          + url + '" target="_blank">' + currentCard.params.cardAction.label + '</a>');
        cardBlock.append(cardAction);

      } else {
        cardBlock.addClass('no-action');
      }
    }
  };

  return CardBlock;

})(H5P.jQuery);