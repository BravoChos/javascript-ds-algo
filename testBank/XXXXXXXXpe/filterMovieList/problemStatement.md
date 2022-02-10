# Filter Movie List

Suppose that there's a list of movies reserved in a randomized order. Given a list of reserved movie `movie` as a parameter, write a function `solution` to return the list of titles sorted by order of the number of reservations. For the movies with the same number of reservations, sort them alphabetically.

## Constraints

- Length of the list of reserved movies is between 1 and 10,000.
- Length of the title of the movie is between 1 and 50, and the title consists of the only lowercase.
- Assume that no different movies have the same name.

## Examples

| movie                                                                    | result                                 |
| ------------------------------------------------------------------------ | -------------------------------------- |
| ["007", "Batman", "007", "Alien", "John Wick","Batman", "007", "Alien" ] | ["007", "Alien","Batman", "John Wick"] |

Example #1
"007" is the most reserved movie with 3 reservation. "Alien" and "Batman" are the second most reserved. Alphabetically, "Alien" is the second and "Batman" is the third. "John Wick" is the least reserved with 1 reservation.
