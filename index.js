
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var classes = require('classes');
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
  if (className) classes(this.el).add(className);
  this.el.id = 'overlay';
}

/**
 * Mixin 'Emitter'
 */

Emitter(Overlay.prototype);

/**
 * Show the overlay.
 *
 * Emits "show" event.
 *
 * @return {Overlay}
 * @api public
 */

Overlay.prototype.show = function(){
  document.getElementsByTagName('body')[0].appendChild(this.el);
  this.emit('show');
  redraw(this.el);
  var self = this;
  afterTransition.once(this.el, function(){
    self.emit('shown');
  });
  classes(this.el).add('show');
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
  var self = this;
  afterTransition.once(this.el, function(){
    self.emit('hidden');
    self.el.parentNode.removeChild(self.el);
  });
  classes(this.el).remove('show');
  return this;
};


