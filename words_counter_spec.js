describe("Words Counter", function () {
  it('should count 2 words ignoring spaces', function () {
    expect(wordsCounter("word1 word2")).toEqual(2)
  });

  it('should count 3 words ignoring spaces', function () {
    expect(wordsCounter("word1 word2 word3")).toEqual(3)
  });

  it('should count 2 words ignoring spaces', function () {
    expect(wordsCounter(" word1 word2")).toEqual(2)
  });

  it('should count 4 words ignoring spaces', function () {
    expect(wordsCounter("word1 word2 3 word4")).toEqual(4)
  });

  it('should count 1 words ignoring spaces', function () {
    expect(wordsCounter("word1-word2")).toEqual(1)
  });

  it('should count 2 words ignoring spaces', function () {
    expect(wordsCounter("  word1  word2")).toEqual(2)
  });

  it('should ignores multiple spaces in row', function () {
    expect(wordsCounter('От меня вечор Леила\n\
                         Равнодушно уходила.\n\
                         Я сказал: "Постой, куда?"\n\
                         А она мне возразила:\n\
                         "Голова твоя седа".\n\
                         Я насмешнице нескромной\n\
                         Отвечал: "Всему пoрa!\n\
                         То, что было мускус темный\n\
                         Стало нынче камфора".\n\
                         Но Леила неудачным\n\
                         Посмеялася речам\n\
                         И сказала: "Знаешь сам:\n\
                         Сладок мускус новобрачным,\n\
                         Камфора годна гробам')).toEqual(46)
  });
});