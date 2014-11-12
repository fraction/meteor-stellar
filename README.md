# Stellar.js for Meteor

Stellar.js - Parallax scrolling made easy

This Meteor package contains the latest stable release of [Stellar.js](https://github.com/markdalgleish/stellar.js).

## ❗️No Longer Maintained

This project is no longer being actively maintained. If you're interested in taking over this project, please get in touch. Please leave a reply on [this issue](https://github.com/noorderstorm/meteor-stellar/issues/1), email developer@noorderstorm.com or contact [@Noorderstorm](https://twitter.com/Noorderstorm) on Twitter.

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add stellar`

## Usage

Please see the official [Stellar.js documentation](https://github.com/markdalgleish/stellar.js) for the full usage documentation.

To utilise Stellar, provide a callback for your template's `rendered` event like so:

```javascript
Template.myTemplate.rendered = function() {
  $('#element').attr('data-stellar-ratio', 1.1);
  $.stellar();
}
```

## Documentation

[https://github.com/markdalgleish/stellar.js](https://github.com/markdalgleish/stellar.js)
