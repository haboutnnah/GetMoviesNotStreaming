# GetMoviesNotStreaming

This node script gets movies from the IMDB Top 250, and filters based on if they're available for streaming or not.

To configure the streaming services, modify lines `277` to `279` of `check.js`.

To configure the IMDB top 250 (it's hardcoded for now), please add it as a JS object on lines `4` to `255`. The JS object must have the names on the left and an empty array on the right. All illegal characters in file names must be omitted (notably colons for the top 250). All non-ASCII characters should probably be removed, otherwise behaviour is undefined.

Currently, `./dumps` is of Australia. If in a different locale, please set it on line `257` and empty out `./dumps`.