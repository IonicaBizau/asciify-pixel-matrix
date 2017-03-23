
# asciify-pixel-matrix

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/asciify-pixel-matrix.svg)](https://www.npmjs.com/package/asciify-pixel-matrix) [![Downloads](https://img.shields.io/npm/dt/asciify-pixel-matrix.svg)](https://www.npmjs.com/package/asciify-pixel-matrix)

> Asciifies a matrix of pixels.

## :cloud: Installation

```sh
$ npm i --save asciify-pixel-matrix
```


## :clipboard: Example



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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `asciifyMatrix(pixels, options)`

#### Params
- **Matrix** `pixels`: The pixels matrix (array of arrays of pixel objects).
- **Object** `options`: An object to pass to `asciify-pixel` extended with the following fields:
 - `stringify` (Boolean): If `false`, the pixel objects will not be stringified.
 - `concat` (Boolean): If `false`, the pixel objects will not be joined together.

#### Return
- **Matrix|String** The result matrix.

### `stringifyMatrix(input)`
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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bronos`](https://github.com/kswilster/bronos#readme) (by Keith Williams)—A sonos cli for bros
 - [`image-to-ascii`](https://github.com/IonicaBizau/image-to-ascii)—A Node.JS module that converts images to ASCII art.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
