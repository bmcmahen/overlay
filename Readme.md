# Overlay

  Super simple overlay. Ensure that you have a `classList` polyfill for older browsers.

## Installation

  Install using [Duo](http://github.com/duojs/duo).

```javascript
var Overlay = require('bmcmahen/overlay');
```

## Example
```
var Overlay = require('overlay');
var overlay = Overlay('customClassName').show();
setTimeout(function(){
  overlay.hide();
}, 5000);

overlay.on('hidden', function(){
  // overlay is fully hidden
});
```

## API

### overlay()

  Returns a new `Overlay`.

### Overlay#show()

  Show the overlay.

### Overlay#hide()

  Hide the overlay.


## Events

  - `show` when the overlay is showing
  - 'shown' when the overlay is shown
  - `hide` when the overlay is hiding
  - `hidden` when the overlay is hidden (removed)

## License

  MIT
