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

<<<<<<< HEAD
function Overlay(className) {
  if (!(this instanceof Overlay)) return new Overlay();
  this.el = document.createElement('div');
  if (className) classes(this.el).add(className);
  this.el.id = 'overlay';
=======
function Overlay(options) {
  if (!(this instanceof Overlay)) return new Overlay(options);
  options || (options = {});
  this.duration = options.duration || 300;
  this.id = options.id || 'overlay';
>>>>>>> 8a4b438dbe3352c6c52b42f06d8b379b5b6753d3
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
  if (this.el) return;
<<<<<<< HEAD
=======
  this.el = document.createElement('div');
  this.el.className = 'hide';
  this.el.id = this.id;
>>>>>>> 8a4b438dbe3352c6c52b42f06d8b379b5b6753d3
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


