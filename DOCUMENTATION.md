## Documentation

You can see below the API reference of this module.

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

