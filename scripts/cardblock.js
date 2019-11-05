var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {object} params Options for this library.
 */
H5P.CardBlock = function (params) {
  this.cardText = params.text === undefined ? '<em>New text</em>' : params.text;
};

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 *
 * @param {jQuery} $wrapper
 */
H5P.CardBlock.prototype.attach = function ($wrapper) {
  $wrapper.addClass('h5p-text').html(this.cardText);
};