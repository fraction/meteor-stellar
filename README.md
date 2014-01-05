# Stellar.js for Meteor

Stellar.js - Parallax scrolling made easy

This Meteor package contains the latest stable release of [Stellar.js](https://github.com/markdalgleish/stellar.js).

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add stellar`

## Usage

Please see the official [Stellar.js documentation](https://github.com/markdalgleish/stellar.js) for the full usage documentation.

To utilise Stellar, provide a callback for your template's `rendered` event like so:

```javascript
Template.myTemplate.rendered = function() {
  $('#element').attr 'data-stellar-ratio', 1.1
  
  $.stellar()
}
```

## Documentation

[https://github.com/markdalgleish/stellar.js](https://github.com/markdalgleish/stellar.js)