# toIntArray
Easily converts a `String` into an `Array` of `Numbers`

## Simply add the `js` to your `head` and *have fun*!
##### Accepts 2 arguments: ([null|String Separator][, Boolean Include Decimal])
###### Param 1 gives you the ability to split the string into an array based on a given String/Char
###### Param 2 gives you the option to include decimal places, thus dividing the array into Floats

#### Simple Examples

```jss
"abc12e3.def.456.)(*.7e89.23 t4tataet34.43awe.23456".toIntArray()
  // = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 3, 4, 4, 3, 2, 3, 4, 5, 6]
"abc12e3.def.456.)(*.7e89.23 t4tataet34.43awe.23456".toIntArray('e')
  // =  [12, 3, 4567, 89234, 3443, 23456]
"abc12e3.def.456.)(*.7e89.23 t4tataet34.43awe.23456".toIntArray('e', true)
  // = [12, 3, 0.4567, 89.234, 34.43, 0.23456]
```
