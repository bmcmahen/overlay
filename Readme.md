# Overlay

  Super simple overlay.

## Installation

```
$ component install bmcmahen/overlay
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

## Example
```
var Overlay = require('overlay');
var overlay = Overlay.show();
setTimeout(function(){
  overlay.hide();
}, 5000);

overlay.on('hidden', function(){
  // overlay is fully hidden
});
```

## License

  MIT