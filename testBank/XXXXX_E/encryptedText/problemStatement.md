# Encryptedv Text

`encrypted_text` was created by encrypting plain text using the following encryption algorithm.

1. Prepare a string key which has the same length as plain text.
2. Encrypt plain text using the key.
3. Rotates the previous result by `rotation` times.

For example, let's say "hellopython" to be encrypted, and the key is "abcdefghijk" and the `rotation` is 3.

First, encrypt "hellopython" using encrypted text and the key as follows.

- The lowercase letters 'a' to 'z' represent numbers from 1 to 26, respectively.
- Replaces each alphabet in plain text with an alphabet that appears after the number indicated by the lowercase letter in the corresponding position of the key.
- At this time, characters beyond 'z' start from 'a' again. (If you encrypt "xyz" to "dbc", the result is "bac".)

If "hellopython" is encrypted using "abcdefghijk" as above, it is encrypted as "igoptvfbqyy" as follows.

```
'h' + 'a' = 'i' (Alphabet 'h' after 1 is 'i')
'e' + 'b' = 'g' (Alphabet 'e' after 2 is 'g')
...
'y' + 'g' = 'f' (Alphabet 'f' is 7 ahead of 'y', and it goes beyond 'z', so it starts from 'a' again)
...
'n' + 'k' = 'y'  (Alphabet 'n' after 11 is 'y')

```

After changing the character, rotate the string by the number of `rotation` as follows. If the `rotation` value is positive, it rotates to the right, and if it is negative, it rotates to the left.

```
0 : igoptvfbqyy
1 : yigoptvfbqy
2 : yyigoptvfbq
3 : qyyigoptvfb
```

When the `encrypted_text`, the key and `rotation` used for encryption are given as parameters, complete the solution function which finds the original text before encryption and return it.

## Constraints

- 1 <= `encrypted_text` <= 1,000
- `encrypted_text` and original text are lowercase only.
- length of both `encrypted_text` and original text are equal.
- -1,000 <= rotation <= 1,000 (integer only)

## Examples

| encrypted_text | key           | rotation | result        |
| -------------- | ------------- | -------- | ------------- |
| "qyyigoptvfb"  | "abcdefghijk" | 3        | "hellopython" |
