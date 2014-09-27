
/**
 * Module dependencies.
 */

var emitter = require('emitter');
var redraw = require('redraw');
var afterTransition = require('after-transition');

/**
 * Expose `Overlay`.
 */

module.exports = Overlay;

/**
 * Initialize a new `Overlay`.
 *
 * @param {Object} options
 * @api public
 */

function Overlay(className) {
  if (!(this instanceof Overlay)) return new Overlay();
  this.el = document.createElement('div');
  this.el.className = 'Overlay';
  if (className) {
    this.el.classList.add(className);
  }
}

/**
 * Mixin 'Emitter'
 */

emitter(Overlay.prototype);

/**
 * Show the overlay.
 *
 * Emits "show" event.
 *
 * @return {Overlay}
 * @api public
 */

Overlay.prototype.show = function(){
  document.body.appendChild(this.el);
  this.emit('show');
  redraw(this.el);
  afterTransition.once(this.el, function(){
    this.emit('shown');
  }.bind(this));
  this.el.classList.add('show');
  return this;
};

/**
 * Hide the overlay.
 *
 * Emits "hide" event, and "hidden" when finished.
 *
 * @return {Overlay}
 * @api public
 */

Overlay.prototype.hide = function(){
  if (!this.el) return;
  this.emit('hide');
  afterTransition.once(this.el, function(){
    this.emit('hidden');
    this.el.parentNode.removeChild(this.el);
  }.bind(this));
  this.el.classList.remove('show');
  return this;
};
