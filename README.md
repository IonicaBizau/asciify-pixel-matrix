# asciify-pixel-matrix [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/asciify-pixel-matrix.svg)](https://www.npmjs.com/package/asciify-pixel-matrix) [![Downloads](https://img.shields.io/npm/dt/asciify-pixel-matrix.svg)](https://www.npmjs.com/package/asciify-pixel-matrix) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Asciifies a matrix of pixels.

## Installation

```sh
$ npm i --save asciify-pixel-matrix
```

## Example

```js
const asciify = require("asciify-pixel-matrix");

console.log(asciify([{
    r: 255
  , g: 255
  , b: 255
}]));
// @

console.log(asciify([
    [{ r: 231, g: 76, b: 60, a: 0.4 }, { r: 241, g: 196, b: 15, a: 0.4 }, { r: 52, g: 152, b: 219, a: 0.4 }]
  , [{ r: 231, g: 76, b: 60, a: 0.6 }, { r: 241, g: 196, b: 15, a: 0.6 }, { r: 52, g: 152, b: 219, a: 0.6 }]
  , [{ r: 231, g: 76, b: 60, a: 0.8 }, { r: 241, g: 196, b: 15, a: 0.8 }, { r: 52, g: 152, b: 219, a: 0.8 }]
  , [{ r: 231, g: 76, b: 60, a: 1   }, { r: 241, g: 196, b: 15, a: 1   }, { r: 52, g: 152, b: 219, a: 1   }]
  , [{ r: 231, g: 76, b: 60, a: 1   }, { r: 241, g: 196, b: 15, a: 1   }, { r: 52, g: 152, b: 219, a: 1   }]
  , [{ r: 231, g: 76, b: 60, a: 1   }, { r: 241, g: 196, b: 15, a: 1   }, { r: 52, g: 152, b: 219, a: 1   }]
  , [{ r: 231, g: 76, b: 60, a: 1   }, { r: 241, g: 196, b: 15, a: 1   }, { r: 52, g: 152, b: 219, a: 1   }]
  , [{ r: 192, g: 57, b: 43, a: 1   }, { r: 243, g: 156, b: 18, a: 1   }, { r: 41, g: 128, b: 185, a: 1   }]
  , [{ r: 192, g: 57, b: 43, a: 0.8 }, { r: 243, g: 156, b: 18, a: 0.8 }, { r: 41, g: 128, b: 185, a: 0.8 }]
  , [{ r: 192, g: 57, b: 43, a: 0.6 }, { r: 243, g: 156, b: 18, a: 0.6 }, { r: 41, g: 128, b: 185, a: 0.6 }]
  , [{ r: 192, g: 57, b: 43, a: 0.4 }, { r: 243, g: 156, b: 18, a: 0.4 }, { r: 41, g: 128, b: 185, a: 0.4 }]
], {
    pixels: ["######", "888888", "@@@@@@"]
  , bg: true
}));
// ##################
// 888888888888888888
// 888888888888888888
// 888888888888888888
// 888888888888888888
// 888888888888888888
// 888888888888888888
// 888888888888888888
// 888888888888888888
// ######888888888888
// ##################
```

## Documentation

### `asciifyMatrix(pixels, options)`

#### Params
- **Matrix** `pixels`: The pixels matrix (array of arrays of pixel objects).
- **Object** `options`: An object to pass to `asciify-pixel` extended with the following fields:
 - `stringify` (Boolean): If `false`, the pixel objects will not be stringified.
 - `concat` (Boolean): If `false`, the pixel objects will not be joined together.

#### Return
- **Matrix|String** The result matrix.

### `stringifyAll(input)`
Stringifies the matrix.

#### Params
- **Matrix** `input`: A matrix of pixels returned by the `asciify-pixel` package.

#### Return
- **String** The stringified matrix.

### `stringify(input)`
Stringifies the input pixels.

#### Params
- **Matrix** `input`: A matrix of pixels returned by the `asciify-pixel` package.

#### Return
- **Matrix** A matrix of characters (the stringified pixel objects).

### `join(input)`
Joins the matrix characters.

#### Params
- **Matrix** `input`: A matrix of characters (the stringified pixel objects).

#### Return
- **String** The stringified matrix.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md