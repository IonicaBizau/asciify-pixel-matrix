"use strict";

const asciifyPixel = require("asciify-pixel")
    , ul = require("ul")
    ;

/**
 * asciifyMatrix
 *
 * @name asciifyMatrix
 * @function
 * @param {Matrix} pixels The pixels matrix (array of arrays of pixel objects).
 * @param {Object} options An object to pass to `asciify-pixel` extended with the following fields:
 *
 *  - `stringify` (Boolean): If `false`, the pixel objects will not be stringified.
 *  - `concat` (Boolean): If `false`, the pixel objects will not be joined together.
 *
 * @return {Matrix|String} The result matrix.
 */
function asciifyMatrix(pixels, options) {
    let asciifier = new asciifyPixel.Asciifier(options);

    options = ul.merge(options, {
        stringify: true
      , concat: true
    });

    if (!Array.isArray(pixels)) {
        return [];
    }

    if (!Array.isArray(pixels[0])) {
        pixels = [pixels];
    }

    let result = pixels.map(row => {
        return row.map(p => {
            return asciifier.asciify(p);
        });
    });

    if (options.stringify !== false) {
        result = asciifyMatrix.stringify(result);
    }

    if (options.concat !== false) {
        result = asciifyMatrix.join(result);
    }

    return result;
}

/**
 * stringifyAll
 * Stringifies the matrix.
 *
 * @name stringifyAll
 * @function
 * @param {Matrix} input A matrix of pixels returned by the `asciify-pixel` package.
 * @return {String} The stringified matrix.
 */
asciifyMatrix.stringifyMatrix = function stringifyAll (input) {
    return asciifyMatrix.join(
        asciifyMatrix.stringify(input)
    );
};

/**
 * stringify
 * Stringifies the input pixels.
 *
 * @name stringify
 * @function
 * @param {Matrix} input A matrix of pixels returned by the `asciify-pixel` package.
 * @return {Matrix} A matrix of characters (the stringified pixel objects).
 */
asciifyMatrix.stringify = function stringify (input) {
    return input.map(row => {
        return row.map(c => c.toString());
    });
};

/**
 * join
 * Joins the matrix characters.
 *
 * @name join
 * @function
 * @param {Matrix} input A matrix of characters (the stringified pixel objects).
 * @return {String} The stringified matrix.
 */
asciifyMatrix.join = function join (input) {
    return input.map(row => {
        return row.join("");
    }).join("\n");
};

module.exports = asciifyMatrix;
