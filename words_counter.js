exports.wordsCounter = function wordsCounter(text) {
    var prev_char_is_letter = false;
    var word_count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] != ' ' && !prev_char_is_letter) {
            prev_char_is_letter = true;
            word_count += 1;
        } else if (text[i] == ' ') {
            prev_char_is_letter = false
        } else {
            prev_char_is_letter = true
        }
    }
    return word_count;
};